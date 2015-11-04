// TODO
// - pagination
// - K uncertainty http://sradack.blogspot.com/2008/06/elo-rating-system-multiple-players.html
// - bug with ZL rows (demonstrated on seed 123)
// - hide races with under 10 races played rearranges stuff and is wrong
// - fix firefox bug on board analysis page

// Express declaration
var express = require('express');
var router = express.Router();

// Local variables
var bingoVersion = {
	version: "8.4",
	releaseDate: "December 14",
	releaseSuffix: "th",
	releaseYear: "2014"
}
var goodTime = 4920; // 1:22:00 in seconds
var goodELO = 150;
var rowElements = {}; // Taken from generator_v8.2.js
rowElements["row1"] = [1, 2, 3, 4, 5];
rowElements["row2"] = [6, 7, 8, 9, 10];
rowElements["row3"] = [11, 12, 13, 14, 15];
rowElements["row4"] = [16, 17, 18, 19, 20];
rowElements["row5"] = [21, 22, 23, 24, 25];
rowElements["col1"] = [1, 6, 11, 16, 21];
rowElements["col2"] = [2, 7, 12, 17, 22];
rowElements["col3"] = [3, 8, 13, 18, 23];
rowElements["col4"] = [4, 9, 14, 19, 24];
rowElements["col5"] = [5, 10, 15, 20, 25];
rowElements["tlbr"] = [1, 7, 13, 19, 25];
rowElements["bltr"] = [5, 9, 13, 17, 21];

// Subroutines
var isNormalInteger = function(str) {
	var n = ~~Number(str);
	return String(n) === str && n >= 0;
}

var getOrdinal = function(n) {
	var s = ["th", "st", "nd", "rd"];
	var v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

var getBingoCard = function(n) {
	return ootBingoGenerator(bingoList, {'seed': n}); // bingoList is defined in goal-list.min.js
}

var secondsFormat = function(seconds) {
	var formattedTime = "";

	// Hours
	var hours = Math.floor(seconds / 3600);
	formattedTime += hours + ":";
	seconds -= hours * 3600;

	// Minutes
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		formattedTime += "0" + minutes + ":";
	} else {
		formattedTime += minutes + ":";
	}
	seconds -= minutes * 60;

	// Seconds
	if (seconds < 10) {
		formattedTime += "0" + seconds;
	} else {
		formattedTime += seconds;
	}

	return formattedTime;
}

var getGoalHash = function(raceData) {
	// Get the leaderboard
	var playerLists = getLeaderboard(raceData);
	var playerList = playerLists[0];

	// Go through the races in the database
	var goalHash = {};
	for (var i = 0; i < raceData.length; i++) {
		// Get the card for this race
		var seed;
		if (/speedrunslive\.com\/tools\/oot-bingo\/.*seed=\d+/.test(raceData[i].goal)) {
			seed = raceData[i].goal.match(/speedrunslive\.com\/tools\/oot-bingo\/.*seed=(\d+)/)[1];
		} else {
			seed = 1;
			console.log('Seed extraction regex failed on race ID ' + raceData[i].id + '.');
		}
		var card = getBingoCard(seed);

		// Go through the card
		for (var j = 1; j < card.length; j++) {
			if (typeof goalHash[card[j].name] === 'undefined') { // If it doesn't exist already, create this goal in the hash
				goalHash[card[j].name] = {};
				goalHash[card[j].name].name = card[j].name;
				goalHash[card[j].name].good = 0;
				goalHash[card[j].name].goodTotal = 0;
				goalHash[card[j].name].won = 0;
				goalHash[card[j].name].wonTotal = 0;
				goalHash[card[j].name].attemptsGood = 0;
				goalHash[card[j].name].attemptsWon = 0;
				goalHash[card[j].name].attemptsTotal = 0;
			}
		}

		// Go through the results
		for (var j = 0; j < raceData[i].results.length; j++) {
			// Find out if this player has a good ELO
			var thisPlayer = raceData[i].results[j].player.toLowerCase();
			var isGoodPlayer = 0;
			if (playerList[thisPlayer].ELO >= goodELO) {
				isGoodPlayer = 1;
			}

			// End here if the time is bad
			var isGoodTime = 1;
			if (raceData[i].results[j].time > goodTime || raceData[i].results[j].time < 0) {
				if (isGoodPlayer == 0) {
					continue;
				}
				isGoodTime = 0;
			}

			// Find the row that the player did
			var rowChosen;
			if (/\br\s*\d+/i.test(raceData[i].results[j].message)) {
				rowChosen = "row" + raceData[i].results[j].message.match(/r\s*(\d+)/i)[1]; // I don't know how to optimize the double regex because I'm bad
			} else if (/\brow\s*\d+/i.test(raceData[i].results[j].message)) {
				rowChosen = "row" + raceData[i].results[j].message.match(/row\s*(\d+)/i)[1];
			} else if (/\bc\s*\d+/i.test(raceData[i].results[j].message)) {
				rowChosen = "col" + raceData[i].results[j].message.match(/c\s*(\d+)/i)[1];
			} else if (/\bcol\s*\d+/i.test(raceData[i].results[j].message)) {
				rowChosen = "col" + raceData[i].results[j].message.match(/col\s*(\d+)/i)[1];
			} else if (/\bcolumn\s*\d+/i.test(raceData[i].results[j].message)) {
				rowChosen = "col" + raceData[i].results[j].message.match(/column\s*(\d+)/i)[1];
			} else if (/\btl-*\s*br\b/i.test(raceData[i].results[j].message)) {
				rowChosen = "tlbr";
			} else if (/\bbr-*\s*tl\b/i.test(raceData[i].results[j].message)) {
				rowChosen = "tlbr";
			} else if (/\bbl-*\s*tr\b/i.test(raceData[i].results[j].message)) {
				rowChosen = "bltr";
			} else if (/\btr-*\s*bl\b/i.test(raceData[i].results[j].message)) {
				rowChosen = "bltr";
			} else {
				console.log('Row regex failed:');
				console.log('\trace ID = ' + raceData[i].id);
				console.log('\tcard link = http://www.zeldabingo.com/' + seed);
				console.log('\tplayer = ' + raceData[i].results[j].player);
				console.log('\tmessage = ' + raceData[i].results[j].message + '\n');
				continue;
			}

			// Make the stats for "Under 1:22:00" and "Under 1:22:00 and Won"
			if (isGoodTime == 1) {
				// Go through all of the goals in their chosen row
				for (var k = 0; k < rowElements[rowChosen].length; k++) {
					goalHash[card[rowElements[rowChosen][k]].name].good++; // Increment the "Under 1:22:00" tally
					if (j == 0) {
						goalHash[card[rowElements[rowChosen][k]].name].won++; // Increment the "Under 1:22:00 and Won" tally
					}
				}

				// Now that we have incremented the player's row, increment the goal hash with every goal on the card
				for (var k = 1; k < card.length; k++) {
					goalHash[card[k].name].goodTotal++; // Increment the "Under 1:22:00" total tally
					if (j == 0) {
						goalHash[card[k].name].wonTotal++; // Increment the "Under 1:22:00 and Won" total tally
					}
				}
			}

			// Make the stats for "Attempts Under 1:22:00" and "Attempts Under 1:22:00 and Won"
			if (isGoodPlayer == 1) {
				// Go through all of the goals in their chosen row
				for (var k = 0; k < rowElements[rowChosen].length; k++) {
					if (isGoodTime == 1) {
						goalHash[card[rowElements[rowChosen][k]].name].attemptsGood++; // Increment the "Attempts Under 1:22:00" tally
					}
					if (isGoodTime == 1 && j == 0) {
						goalHash[card[rowElements[rowChosen][k]].name].attemptsWon++; // Increment the "Attempts Under 1:22:00 and Won" tally
					}
					goalHash[card[rowElements[rowChosen][k]].name].attemptsTotal++; // Increment the attempts total tally
				}
			}
		}
	}

	// We are done creating the goal hash, so now store the percentages for all of the goals
	for (var goal in goalHash) {
		if (!goalHash.hasOwnProperty(goal)) {
			continue;
		}

		if (goalHash[goal].goodTotal == 0) {
			goalHash[goal].goodPercent = 0;
		} else {
			goalHash[goal].goodPercent = Math.round(goalHash[goal].good / goalHash[goal].goodTotal * 100);
		}

		if (goalHash[goal].wonTotal == 0) {
			goalHash[goal].wonPercent = 0;
		} else {
			goalHash[goal].wonPercent = Math.round(goalHash[goal].won / goalHash[goal].wonTotal * 100);
		}

		if (goalHash[goal].attemptsTotal == 0) {
			goalHash[goal].attemptsGoodPercent = 0;
			goalHash[goal].attemptsWonPercent = 0;
		} else {
			goalHash[goal].attemptsGoodPercent = Math.round(goalHash[goal].attemptsGood / goalHash[goal].attemptsTotal * 100);
			goalHash[goal].attemptsWonPercent = Math.round(goalHash[goal].attemptsWon / goalHash[goal].attemptsTotal * 100);
		}
	}

	return goalHash;
}

var getLeaderboard = function(raceData) {
	// Go through the races in the database
	var playerList = {};
	for (var i = 0; i < raceData.length; i++) {
		// Go through the participants and gather basic statistics
		for (var j = 0; j < raceData[i].results.length; j++) {
			// Add the player to the playerList object if they don't already exist
			var thisPlayer = raceData[i].results[j].player.toLowerCase();
			if (typeof playerList[thisPlayer] === 'undefined') {
				playerList[thisPlayer] = {
					'ELO': 0,
					'ELOChange': 0,
					'dateOfLastRace': 0,
					'totalRaces': 0,
					'totalGoodRaces': 0,
					'totalGoodWonRaces': 0,
					'lowestTime': 86400,
					'averageTime': 0,
					'averageTimeNum': 0,
					'averageTime10': [],
					'estimatedScore': 0,
					'score': 0
				};
			}

			// If the player quit (SRL sets your time is set to -1 if you quit)
			if (raceData[i].results[j].time == -1) {
				raceData[i].results[j].time = 86400; // Change the time to 86400 (24 hours) so that we can do simple time comparisons later on
			}

			// If the player got disqualified (SRL sets your time is set to -2 if you got disqualified)
			if (raceData[i].results[j].time == -2) {
				raceData[i].results[j].time = 90000; // Change the time to 90000 (25 hours) so that we can do simple time comparisons later on
			}

			// Increment this player's total races played
			playerList[thisPlayer].totalRaces++;

			// If they had a good time
			if (raceData[i].results[j].time < goodTime) {
				playerList[thisPlayer].totalGoodRaces++; // Increment this player's total races under 1:22:00
				// If they won the race
				if (j === 0) {
					playerList[thisPlayer].totalGoodWonRaces++; // Increment this player's total races under 1:22:00 and won
				}
			}

			// Set this player's lowest total time
			if (raceData[i].results[j].time < playerList[thisPlayer].lowestTime) {
				playerList[thisPlayer].lowestTime = raceData[i].results[j].time;
			}

			// Add the current race to the averageTime variable (if they didn't quit or get disqualified)
			if (raceData[i].results[j].time < 86400) {
				playerList[thisPlayer].averageTime += raceData[i].results[j].time;
				playerList[thisPlayer].averageTimeNum++;
			}

			// Add the current race to the averageTime10 variable (if they didn't quit or get disqualified)
			if (raceData[i].results[j].time < 86400) {
				playerList[thisPlayer].averageTime10.push(raceData[i].results[j].time);
				if (playerList[thisPlayer].averageTime10.length > 10) {
					playerList[thisPlayer].averageTime10.shift(); // Remove the first element so that there isn't more than 10 races
				}
			}

			// Set the player's last played race
			var d = new Date(0);
			d.setUTCSeconds(raceData[i].date);
			var month = d.getMonth() + 1; // We add 1 because it January is 0
			if (month < 10) {
				month = "0" + month;
			}
			var day = d.getDate();
			if (day < 10) {
				day = "0" + day;
			}
			var year = d.getFullYear() - 2000;
			var date = month + "/" + day + "/" + year;
			playerList[thisPlayer].dateOfLastRace = date;
		}

		var inTie = false;
		var tiedPlayers = 1;
		// Go through the participants and start to calculate ELO (based on http://sradack.blogspot.com/2008/06/elo-rating-system-multiple-players.html)
		for (var j = 0; j < raceData[i].results.length; j++) {
			// Get the score (S)
			// The (N * (N - 1)) / 2 part is intentionally left out and added to K later
			var thisPlayer = raceData[i].results[j].player.toLowerCase();
			if (j === 0) { // If this is the player in first place
				playerList[thisPlayer].score = raceData[i].results.length - 1;
			} else if (raceData[i].results[j].time === raceData[i].results[j - 1].time) { // If there is a tie
				inTie = true;
				tiedPlayers++;
			} else {
				if (inTie) {
					// We have reached the end of the multiple players who have tied, so fix all of their scores
					var tiedRank = raceData[i].results.length - j + ((tiedPlayers - 1) / 2);
					for (var k = 0; k < tiedPlayers; k++) {
						playerList[raceData[i].results[j - k - 1].player.toLowerCase()].score = tiedRank;
					}
					inTie = false;
					tiedPlayers = 1;
				}
				playerList[thisPlayer].score = raceData[i].results.length - (j + 1);
			}

			// Go through the participants that this person faced off against
			for (var k = j + 1; k < raceData[i].results.length; k++) {
				// Get the estimated scores; D = 400 (same as chess; this is the performance rating)
				thisOpponent = raceData[i].results[k].player.toLowerCase();
				playerList[thisPlayer].estimatedScore += 1 / (1 + Math.pow(10, (playerList[thisOpponent].ELO - playerList[thisPlayer].ELO) / 400));
				playerList[thisOpponent].estimatedScore += 1 / (1 + Math.pow(10, (playerList[thisPlayer].ELO - playerList[thisOpponent].ELO) / 400));
			}
		}

		if (inTie) {
			// We have reached the end of the multiple players who have tied, so fix all of their scores
			var tiedRank = (tiedPlayers - 1) / 2;
			for (var j = 0; j < tiedPlayers; j++) {
				playerList[raceData[i].results[raceData[i].results.length - j - 1].player.toLowerCase()].score = tiedRank;
			}
			inTie = false;
			tiedPlayers = 1;
		}

		// K = 32 (the magnitude of change per match); we put the (N * (N - 1)) / 2 part here because it is factored out of S and E
		//var K = 32 / ((raceData[i].results.length * (raceData[i].results.length - 1)) / 2); // This was the old K calculation, but the points were too low
		var K = 32 / ((raceData[i].results.length - 1) / 2); // Removed the N term; the maximum points you could get before was 2K / N, now it is 2K
		// Proof: Let S = N - 1, E = 0. Then S - E = N - 1, and K * (S - E) = (2K / N(N - 1))(N - 1) = 2K / N
		// Note from PsyMarth: The maximum points that one can gain or lose per match is 64

		// Update the ELO for the players in the race and also reset their S and E values
		for (var j = 0; j < raceData[i].results.length; j++) {
			var thisPlayer = raceData[i].results[j].player.toLowerCase();
			playerList[thisPlayer].ELOChange = Math.round(K * (playerList[thisPlayer].score - playerList[thisPlayer].estimatedScore));
			if (playerList[thisPlayer].ELOChange > 0) {
				playerList[thisPlayer].ELOChange = "+" + playerList[thisPlayer].ELOChange;
			}
			playerList[thisPlayer].ELO += Math.round(K * (playerList[thisPlayer].score - playerList[thisPlayer].estimatedScore));
			playerList[thisPlayer].estimatedScore = 0;
			playerList[thisPlayer].score = 0;
		}
	}

	// Format the lowest times
	for (var i in playerList) {
		if (playerList[i].lowestTime === 86400) {
			playerList[i].lowestTime = "n/a"; // They quit every race
		} else if (playerList[i].lowestTime === 90000) {
			playerList[i].lowestTime = "n/a"; // They got disqualified on every race
		} else {
			playerList[i].lowestTime = secondsFormat(playerList[i].lowestTime);
		}
	}

	// Calculate and format the average times
	for (var i in playerList) {
		if (playerList[i].averageTimeNum === 0) {
			playerList[i].averageTime = "n/a";
			playerList[i].averageTime10 = "n/a";
		} else {
			playerList[i].averageTime = Math.round(playerList[i].averageTime / playerList[i].averageTimeNum);
			playerList[i].averageTime = secondsFormat(playerList[i].averageTime);
			var sum = 0;
			for (var j in playerList[i].averageTime10) {
				sum += playerList[i].averageTime10[j];
			}
			playerList[i].averageTime10 = Math.round(sum / playerList[i].averageTime10.length);
			playerList[i].averageTime10 = secondsFormat(playerList[i].averageTime10);
		}
	}

	// Make a second player list with only players that have 10 or more races played
	var playerList2 = {};
	for (var i in playerList) {
		if (playerList[i].totalRaces >= 10) {
			playerList2[i] = JSON.parse(JSON.stringify(playerList[i])); // Clone a Javascript object (from http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object)
		}
	}

	// Assign leaderboard ranks (from http://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value)
	var playerListSorted = [];
	for (var i in playerList) {
		playerList[i].player = i;
		playerListSorted.push(playerList[i]);
	}
	playerListSorted.sort(function(a, b) {
		return b.ELO - a.ELO;
	});
	for (var i = 0; i < playerListSorted.length; i++) {
		playerListSorted[i].rank = i + 1; // Fill in all of the ranks from 1 to N
	}
	for (var i in playerListSorted) {
		if (i !== 0) { // If this isn't the first player
			if (playerListSorted[i] === playerListSorted[i - 1]) { // If there is a tie
				playerListSorted[i].rank = playerListSorted[i - 1].rank; // Adjust the rank to be equal
			}
		}
	}
	for (var i in playerListSorted) {
		playerList[playerListSorted[i].player].rank = playerListSorted[i].rank; // Put the leaderboard ranks back into the original object
	}

	// Assign leaderboard ranks for the players that have 10 or more races played
	var playerListSorted = [];
	for (var i in playerList2) {
		playerList2[i].player = i;
		playerListSorted.push(playerList2[i]);
	}
	playerListSorted.sort(function(a, b) {
		return b.ELO - a.ELO;
	});
	for (var i = 0; i < playerListSorted.length; i++) {
		playerListSorted[i].rank = i + 1; // Fill in all of the ranks from 1 to N
	}
	for (var i in playerListSorted) {
		if (i !== 0) { // If this isn't the first player
			if (playerListSorted[i] === playerListSorted[i - 1]) { // If there is a tie
				playerListSorted[i].rank = playerListSorted[i - 1].rank; // Adjust the rank to be equal
			}
		}
	}
	for (var i in playerListSorted) {
		playerList2[playerListSorted[i].player].rank = playerListSorted[i].rank; // Put the leaderboard ranks back into the original object
	}

	// Now that we are done assigning ranks, round all of the ELO values
	for (var i in playerList) {
		playerList[i].ELO = Math.round(playerList[i].ELO);
	}
	for (var i in playerList2) {
		playerList2[i].ELO = Math.round(playerList2[i].ELO);
	}

	return [playerList, playerList2];
}


// Routes

router.get('/', function(req, res) {
	res.render('index');
});

router.post('/', function(req, res) {
	if (typeof req.body.seed != 'undefined') {
		// Validate that the seed is a number
		if (isNormalInteger(req.body.seed)) {
			res.redirect('/' + req.body.seed);
		}
	}
	res.redirect('/');
});

router.get('/debug', function(req, res) {
	var db = req.db;
	var raceCollection = db.get('races');
	raceCollection.find({}, {"sort": [['date', 'desc']]}, function(e, raceData) {
		// Go through the races in the database
		for (var i = 0; i < raceData.length; i++) {
			console.log(raceData[i].goal);
		}
	});
});

router.get('/goals', function(req, res) {
	var db = req.db;
	var raceCollection = db.get('races');
	// We want to sort the races ascending because we want to start the ELO calculations from the first race played
	raceCollection.find({}, {"sort": [['date', 'asc']]}, function(e, raceData) {
		// Get the goal statistics
		var goalHash = getGoalHash(raceData);

		res.render('goals', {
			"numRaces": raceData.length,
			"goalHash": goalHash,
			"bingoVersion": bingoVersion
		});
	});
});

router.get('/races', function(req, res) {
	var db = req.db;
	var raceCollection = db.get('races');
	raceCollection.find({}, {"sort": [['date', 'desc']]}, function(e, raceData) {
		var raceList = [];
		// Go through the races in the database
		for (var i = 0; i < raceData.length; i++) {
			// ID
			var id = raceData[i].id;

			// Seed
			var seed;
			if (/speedrunslive\.com\/tools\/oot-bingo\/.*seed=\d+/.test(raceData[i].goal)) {
				seed = raceData[i].goal.match(/speedrunslive\.com\/tools\/oot-bingo\/.*seed=(\d+)/)[1];
			} else {
				seed = 1;
				console.log('Seed extraction regex failed on race ID ' + raceData[i].id + '.');
			}

			// Date and time
			var d = new Date(0);
			d.setUTCSeconds(raceData[i].date);
			var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var day = days[d.getDay()] + ",";
			var date = months[d.getMonth()] + " " + getOrdinal(d.getDate()) + ", " + d.getFullYear();
			var time = "";
			if (d.getHours() < 10) {
				time += "0";
			}
			time += d.getHours() + ":";
			if (d.getMinutes() < 10) {
				time += "0";
			}
			time += d.getMinutes() + " (EST)";

			// Format some of the data in the results data
			for (var j = 0; j < raceData[i].results.length; j++) {
				// Convert time from a number to a string
				if (raceData[i].results[j].time === -1) {
					raceData[i].results[j].time = "Quit";
					raceData[i].results[j].place = "-"; // SRL sets the time to -1 if the player quit
				} else if (raceData[i].results[j].time === -2) {
					raceData[i].results[j].time = "Disqualified";
					raceData[i].results[j].place = "-"; // SRL sets the time to -2 if the player was disqualified
				} else {
					// Find if it is a good time
					if (raceData[i].results[j].time <= goodTime && raceData[i].results[j].time > 0) {
						raceData[i].results[j].race = 1; // Just going to overwrite the "race" field because we won't need it
					} else {
						raceData[i].results[j].race = 0;
					}

					// Format the seconds into "#:##:##"
					raceData[i].results[j].time = secondsFormat(raceData[i].results[j].time);
				}
			}

			// Results
			var results = raceData[i].results;

			raceList.push({
				'id': id,
				'seed': seed,
				'day': day,
				'date': date,
				'time': time,
				'numEntrants': raceData[i].numentrants,
				'results': raceData[i].results
			});
		}

		res.render('races', {
			"raceList": raceList,
			"bingoVersion": bingoVersion
		});
	});
});

router.get('/leaderboard', function(req, res) {
	var db = req.db;
	var raceCollection = db.get('races');
	// We want to sort the races ascending because we want to start the ELO calculations from the first race played
	raceCollection.find({}, {"sort": [['date', 'asc']]}, function(e, raceData) {
		// Get the leaderboard
		var playerLists = getLeaderboard(raceData);
		var playerList = playerLists[0];
		var playerList2 = playerLists[1];

		res.render('leaderboard', {
			"playerList": playerList,
			"playerList2": playerList2,
			"bingoVersion": bingoVersion
		});
	});
});

router.get('/news', function(req, res) {
	res.render('news');
});

router.get('/:seedChosen', function(req, res) {
	// Validate that the seed is a number
	if (isNormalInteger(req.param('seedChosen'))) {
		var db = req.db;
		var raceCollection = db.get('races');
		// We want to sort the races ascending because we want to start the ELO calculations from the first race played
		raceCollection.find({}, {"sort": [['date', 'asc']]}, function(e, raceData) {
			// Get the card for this race
			var card = getBingoCard(req.param('seedChosen'));

			// Get the goal statistics
			var goalHash = getGoalHash(raceData);

			// Go through the card
			for (var i = 1; i < card.length; i++) {
				// If the card has a goal that we don't have statistics on yet, the code will mess up
				if (typeof goalHash[card[i].name] === 'undefined') { // It doesn't exist already, create this goal in the hash
					goalHash[card[i].name] = {};
					goalHash[card[i].name].name = card[i].name;
					goalHash[card[i].name].good = 0;
					goalHash[card[i].name].goodTotal = 0;
					goalHash[card[i].name].goodPercent = 0;
					goalHash[card[i].name].won = 0;
					goalHash[card[i].name].wonTotal = 0;
					goalHash[card[i].name].wonPercent = 0;
				}
			}

			// Calculate the row total percentages
			var rowData = {};
			rowData.good = {};
			rowData.good.row1 = 100 * Math.pow((goalHash[card[1].name].goodPercent / 100.0) * (goalHash[card[2].name].goodPercent / 100.0) * (goalHash[card[3].name].goodPercent / 100.0) * (goalHash[card[4].name].goodPercent / 100.0) * (goalHash[card[5].name].goodPercent / 100.0), 0.2);
			rowData.good.row2 = 100 * Math.pow((goalHash[card[6].name].goodPercent / 100.0) * (goalHash[card[7].name].goodPercent / 100.0) * (goalHash[card[8].name].goodPercent / 100.0) * (goalHash[card[9].name].goodPercent / 100.0) * (goalHash[card[10].name].goodPercent / 100.0), 0.2);
			rowData.good.row3 = 100 * Math.pow((goalHash[card[11].name].goodPercent / 100.0) * (goalHash[card[12].name].goodPercent / 100.0) * (goalHash[card[13].name].goodPercent / 100.0) * (goalHash[card[14].name].goodPercent / 100.0) * (goalHash[card[15].name].goodPercent / 100.0), 0.2);
			rowData.good.row4 = 100 * Math.pow((goalHash[card[16].name].goodPercent / 100.0) * (goalHash[card[17].name].goodPercent / 100.0) * (goalHash[card[18].name].goodPercent / 100.0) * (goalHash[card[19].name].goodPercent / 100.0) * (goalHash[card[20].name].goodPercent / 100.0), 0.2);
			rowData.good.row5 = 100 * Math.pow((goalHash[card[21].name].goodPercent / 100.0) * (goalHash[card[22].name].goodPercent / 100.0) * (goalHash[card[23].name].goodPercent / 100.0) * (goalHash[card[24].name].goodPercent / 100.0) * (goalHash[card[25].name].goodPercent / 100.0), 0.2);
			rowData.good.col1 = 100 * Math.pow((goalHash[card[1].name].goodPercent / 100.0) * (goalHash[card[6].name].goodPercent / 100.0) * (goalHash[card[11].name].goodPercent / 100.0) * (goalHash[card[16].name].goodPercent / 100.0) * (goalHash[card[21].name].goodPercent / 100.0), 0.2);
			rowData.good.col2 = 100 * Math.pow((goalHash[card[2].name].goodPercent / 100.0) * (goalHash[card[7].name].goodPercent / 100.0) * (goalHash[card[12].name].goodPercent / 100.0) * (goalHash[card[17].name].goodPercent / 100.0) * (goalHash[card[22].name].goodPercent / 100.0), 0.2);
			rowData.good.col3 = 100 * Math.pow((goalHash[card[3].name].goodPercent / 100.0) * (goalHash[card[8].name].goodPercent / 100.0) * (goalHash[card[13].name].goodPercent / 100.0) * (goalHash[card[18].name].goodPercent / 100.0) * (goalHash[card[23].name].goodPercent / 100.0), 0.2);
			rowData.good.col4 = 100 * Math.pow((goalHash[card[4].name].goodPercent / 100.0) * (goalHash[card[9].name].goodPercent / 100.0) * (goalHash[card[14].name].goodPercent / 100.0) * (goalHash[card[19].name].goodPercent / 100.0) * (goalHash[card[24].name].goodPercent / 100.0), 0.2);
			rowData.good.col5 = 100 * Math.pow((goalHash[card[5].name].goodPercent / 100.0) * (goalHash[card[10].name].goodPercent / 100.0) * (goalHash[card[15].name].goodPercent / 100.0) * (goalHash[card[20].name].goodPercent / 100.0) * (goalHash[card[25].name].goodPercent / 100.0), 0.2);
			rowData.good.tlbr = 100 * Math.pow((goalHash[card[1].name].goodPercent / 100.0) * (goalHash[card[7].name].goodPercent / 100.0) * (goalHash[card[13].name].goodPercent / 100.0) * (goalHash[card[19].name].goodPercent / 100.0) * (goalHash[card[25].name].goodPercent / 100.0), 0.2);
			rowData.good.bltr = 100 * Math.pow((goalHash[card[5].name].goodPercent / 100.0) * (goalHash[card[9].name].goodPercent / 100.0) * (goalHash[card[13].name].goodPercent / 100.0) * (goalHash[card[17].name].goodPercent / 100.0) * (goalHash[card[21].name].goodPercent / 100.0), 0.2);
			rowData.won = {};
			rowData.won.row1 = 100 * Math.pow((goalHash[card[1].name].wonPercent / 100.0) * (goalHash[card[2].name].wonPercent / 100.0) * (goalHash[card[3].name].wonPercent / 100.0) * (goalHash[card[4].name].wonPercent / 100.0) * (goalHash[card[5].name].wonPercent / 100.0), 0.2);
			rowData.won.row2 = 100 * Math.pow((goalHash[card[6].name].wonPercent / 100.0) * (goalHash[card[7].name].wonPercent / 100.0) * (goalHash[card[8].name].wonPercent / 100.0) * (goalHash[card[9].name].wonPercent / 100.0) * (goalHash[card[10].name].wonPercent / 100.0), 0.2);
			rowData.won.row3 = 100 * Math.pow((goalHash[card[11].name].wonPercent / 100.0) * (goalHash[card[12].name].wonPercent / 100.0) * (goalHash[card[13].name].wonPercent / 100.0) * (goalHash[card[14].name].wonPercent / 100.0) * (goalHash[card[15].name].wonPercent / 100.0), 0.2);
			rowData.won.row4 = 100 * Math.pow((goalHash[card[16].name].wonPercent / 100.0) * (goalHash[card[17].name].wonPercent / 100.0) * (goalHash[card[18].name].wonPercent / 100.0) * (goalHash[card[19].name].wonPercent / 100.0) * (goalHash[card[20].name].wonPercent / 100.0), 0.2);
			rowData.won.row5 = 100 * Math.pow((goalHash[card[21].name].wonPercent / 100.0) * (goalHash[card[22].name].wonPercent / 100.0) * (goalHash[card[23].name].wonPercent / 100.0) * (goalHash[card[24].name].wonPercent / 100.0) * (goalHash[card[25].name].wonPercent / 100.0), 0.2);
			rowData.won.col1 = 100 * Math.pow((goalHash[card[1].name].wonPercent / 100.0) * (goalHash[card[6].name].wonPercent / 100.0) * (goalHash[card[11].name].wonPercent / 100.0) * (goalHash[card[16].name].wonPercent / 100.0) * (goalHash[card[21].name].wonPercent / 100.0), 0.2);
			rowData.won.col2 = 100 * Math.pow((goalHash[card[2].name].wonPercent / 100.0) * (goalHash[card[7].name].wonPercent / 100.0) * (goalHash[card[12].name].wonPercent / 100.0) * (goalHash[card[17].name].wonPercent / 100.0) * (goalHash[card[22].name].wonPercent / 100.0), 0.2);
			rowData.won.col3 = 100 * Math.pow((goalHash[card[3].name].wonPercent / 100.0) * (goalHash[card[8].name].wonPercent / 100.0) * (goalHash[card[13].name].wonPercent / 100.0) * (goalHash[card[18].name].wonPercent / 100.0) * (goalHash[card[23].name].wonPercent / 100.0), 0.2);
			rowData.won.col4 = 100 * Math.pow((goalHash[card[4].name].wonPercent / 100.0) * (goalHash[card[9].name].wonPercent / 100.0) * (goalHash[card[14].name].wonPercent / 100.0) * (goalHash[card[19].name].wonPercent / 100.0) * (goalHash[card[24].name].wonPercent / 100.0), 0.2);
			rowData.won.col5 = 100 * Math.pow((goalHash[card[5].name].wonPercent / 100.0) * (goalHash[card[10].name].wonPercent / 100.0) * (goalHash[card[15].name].wonPercent / 100.0) * (goalHash[card[20].name].wonPercent / 100.0) * (goalHash[card[25].name].wonPercent / 100.0), 0.2);
			rowData.won.tlbr = 100 * Math.pow((goalHash[card[1].name].wonPercent / 100.0) * (goalHash[card[7].name].wonPercent / 100.0) * (goalHash[card[13].name].wonPercent / 100.0) * (goalHash[card[19].name].wonPercent / 100.0) * (goalHash[card[25].name].wonPercent / 100.0), 0.2);
			rowData.won.bltr = 100 * Math.pow((goalHash[card[5].name].wonPercent / 100.0) * (goalHash[card[9].name].wonPercent / 100.0) * (goalHash[card[13].name].wonPercent / 100.0) * (goalHash[card[17].name].wonPercent / 100.0) * (goalHash[card[21].name].wonPercent / 100.0), 0.2);

			// Find the best rows
			var bestGoodRow = 'row1';
			var bestPercent = 0;
			for (var prop in rowData.good) {
				if (!rowData.good.hasOwnProperty(prop)) {
					continue;
				}
				if (rowData.good[prop] > bestPercent) {
					bestGoodRow = prop;
					bestPercent = rowData.good[prop];
				}
			}
			var bestWonRow = 'row1';
			var bestPercent = 0;
			for (var prop in rowData.won) {
				if (!rowData.won.hasOwnProperty(prop)) {
					continue;
				}
				if (rowData.won[prop] > bestPercent) {
					bestWonRow = prop;
					bestPercent = rowData.won[prop];
				}
			}

			// Round the goal percentages
			for (var i = 1; i < card.length; i++) {
				goalHash[card[i].name].goodPercent = Math.round(goalHash[card[i].name].goodPercent);
				goalHash[card[i].name].wonPercent = Math.round(goalHash[card[i].name].wonPercent);
			}

			// Round the row percentages
			for (var prop in rowData.good) {
				if (!rowData.good.hasOwnProperty(prop)) {
					continue;
				}
				rowData.good[prop] = Math.round(rowData.good[prop]);
			}
			for (var prop in rowData.won) {
				if (!rowData.won.hasOwnProperty(prop)) {
					continue;
				}
				rowData.won[prop] = Math.round(rowData.won[prop]);
			}

			res.render('board', {
				"seed": req.param('seedChosen'),
				"card": card,
				"rowData": rowData,
				"bestGoodRow": bestGoodRow,
				"bestWonRow": bestWonRow,
				"numRaces": raceData.length,
				"goalHash": goalHash,
				"bingoVersion": bingoVersion
			});
		});
	} else {
		res.redirect('/');
	}
});

router.use(function(req, res) {
	res.redirect('/');
});

module.exports = router;
