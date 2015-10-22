var bingoList = [];
bingoList["info"] = {
version: "v8.4"
};
bingoList[1] = [
	{ name: "Bottled Fairy", jp: 'ãƒ“ãƒ³(å¦–ç²¾)', types: ["bottle"], child: "yes" },
	{ name: "Bullet Bag (50)", jp: 'ãƒ‡ã‚¯ã®ã‚¿ãƒè¢‹(50)', types: ["bulletbag"], child: "yes" },
	{ name: "Bomb Bag (30)", jp: 'ãƒœãƒ è¢‹(30)', types: ["bombbag"], child: "yes" },
	{ name: "Lens of Truth", jp: 'ã¾ã“ã¨ã®ãƒ¡ã‚¬ãƒ', types: ["botw"], child: "yes" } ,
	{ name: "Defeat a Skull Kid", jp: 'ã‚¹ã‚¿ãƒ«ã‚­ãƒƒãƒ‰æ’ƒç ´', types: ["skullkid"], child: "no" },
	{ name: "At least 30 Deku Nuts", jp: 'ãƒ‡ã‚¯ã®å®Ÿ30å€‹ä»¥ä¸Š', types: ["nuts"], child: "yes" }
];
bingoList[2] = [
	{ name: "Map & Compass in Dodongo's Cavern", jp: 'ãƒ‰ãƒ‰ãƒ³ã‚´ã®æ´žçªŸã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["dc"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Map & Compass in Deku Tree", jp: 'ãƒ‡ã‚¯ã®æ¨¹æ§˜ã®ä¸­ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["deku"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Map & Compass in Bottom of the Well", jp: 'äº•æˆ¸ã®åº•ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["botw"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Giant's Knife", jp: 'å·¨äººã®ãƒŠã‚¤ãƒ•', types: ["swords"], subtypes: ["wallet"], child: "no" },
	{ name: "Minuet of Forest", jp: 'æ£®ã®ãƒ¡ãƒŒã‚¨ãƒƒãƒˆ', types: ["forest"], subtypes: ["songs"], child: "no" },
	{ name: "Goron Tunic", jp: 'ã‚´ãƒ­ãƒ³ã®æœ', types: ["tunics", "dmc", "fire"], child: "no" },
	{ name: "Zora Tunic", jp: 'ã‚¾ãƒ¼ãƒ©ã®æœ', types: ["tunics", "ice"], child: "no" }
];
bingoList[3] = [
	{ name: "Both heart pieces in Death Mountain Crater", jp: 'ãƒ‡ã‚¹ãƒžã‚¦ãƒ³ãƒ†ãƒ³ç«å£ã®ãƒãƒ¼ãƒˆã®ã‹ã‘ã‚‰ï¼’ã¤', types: ["dmc", "fire"], subtypes: ["hearts"], child: "yes" },
	{ name: "Fairy Slingshot", jp: 'å¦–ç²¾ã®ãƒ‘ãƒãƒ³ã‚³', types: ["bulletbag", "deku"], child: "yes" },
	{ name: "At least 3 songs", jp: 'æ­Œ3ã¤ä»¥ä¸Š', types: ["songs", "zl"], child: "yes" },
	{ name: "Quiver (40)", jp: 'çŸ¢ç«‹ã¦(40)', types: ["atrade", "forest", "quiver"], child: "no" },
	{ name: "Defeat all Lizalfos in Dodongo's Cavern", jp: 'ãƒ‰ãƒ‰ãƒ³ã‚´ã®æ´žçªŸã®ãƒªã‚¶ãƒ«ãƒ•ã‚©ã‚¹å…¨ã¦æ’ƒç ´', types: ["dc"], child: "yes" },
	{ name: "Bolero of Fire", jp: 'ç‚Žã®ãƒœãƒ¬ãƒ­', types: ["dmc", "fire"], subtypes: ["songs"], child: "no" }
];
bingoList[4] = [
	{ name: "30 Deku Sticks", jp: 'ãƒ‡ã‚¯ã®æ£’30æœ¬', types: ["atrade"], child: "yes" },
	{ name: "Defeat King Dodongo", jp: 'ã‚­ãƒ³ã‚°ãƒ‰ãƒ‰ãƒ³ã‚´æ’ƒç ´', types: ["dc", "kd"], subtypes: ["hearts"], child: "yes" },
	{ name: "Fire Temple Boss Key", jp: 'ç‚Žã®ç¥žæ®¿ã®ãƒœã‚¹éƒ¨å±‹ã®ã‚«ã‚®', types: ["fire"], subtypes: ["bosskey"], child: "no"},
	{ name: "Ruto's Letter", jp: 'ãƒ«ãƒˆã®æ‰‹ç´™', types: ["bottle"], child: "yes" },
	{ name: "Ice Arrows", jp: 'æ°·ã®çŸ¢', types: ["fortress", "quiver"], subtypes: ["kd"], child: "yes" },
	{ name: "Map & Compass in Shadow Temple", jp: 'é—‡ã®ç¥žæ®¿ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["shadow"], subtypes: ["mapcompass"], child: "yes" }
];
bingoList[5] = [
	{ name: "Bullet Bag (40)", jp: 'ãƒ‡ã‚¯ã®ã‚¿ãƒè¢‹(40)', types: ["bulletbag", "deku"], child: "yes" },
	{ name: "Blue Fire", jp: 'é’ã„ç‚Ž', types: ["ice", "bottle", "ganon"], child: "yes" },
	{ name: "Defeat Queen Gohma", jp: 'ã‚´ãƒ¼ãƒžæ’ƒç ´', types: ["deku", "ganon"], subtypes: ["hearts"], child: "yes" },
	{ name: "All 3 Kokiri Forest area Skulltulas", jp: 'ã‚³ã‚­ãƒªã®æ£®ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©ï¼“åŒ¹', types: ["forest"], subtypes: ["wallet"], child: "no" },
	{ name: "Ice Cavern Heart Piece", jp: 'æ°·ã®æ´žçªŸã®ãƒãƒ¼ãƒˆã®ã‹ã‘ã‚‰', types: ["ice"], subtypes: ["hearts", "mapcompass"], child: "yes" },
	{ name: "3 Tunics", jp: 'æœ3ç¨®é¡ž', types: ["tunics", "ice", "fire"], child: "no" },
	{ name: "Water Temple Boss Key", jp: 'æ°´ã®ç¥žæ®¿ã®ãƒœã‚¹éƒ¨å±‹ã®ã‚«ã‚®', types: ["water", "fortress"], subtypes: ["bosskey"], child: "no" }
];
bingoList[6] = [
	{ name: "Beat Dodongo's Cavern", jp: 'ãƒ‰ãƒ‰ãƒ³ã‚´ã®æ´žçªŸã‚¯ãƒªã‚¢', types: ["dc", "fortress", "kd"], child: "yes" },
	{ name: "Map & Compass in Ice Cavern", jp: 'æ°·ã®æ´žçªŸã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["ice"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Defeat a White Wolfos", jp: 'ãƒ›ãƒ¯ã‚¤ãƒˆã‚¦ãƒ«ãƒ•ã‚©ã‚¹æ’ƒç ´', types: ["ice", "fortress"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Ganon's Castle Boss Key", jp: 'ã‚¬ãƒŽãƒ³åŸŽã®ãƒœã‚¹éƒ¨å±‹ã®ã‚«ã‚®', types: ["ganon", "deku"], subtypes: ["bosskey"], child: "yes" },
	{ name: "All 3 Skulltulas in Bottom of the Well", jp: 'äº•æˆ¸ã®åº•ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©3åŒ¹', types: ["botw"], subtypes: ["wallet"], child: "yes" },
	{ name: "Cow in House", jp: 'ç‰›(ãƒªãƒ³ã‚¯ã®å®¶)', types: ["cow"], child: "no" },
	{ name: "Beat the Deku Tree", jp: 'ãƒ‡ã‚¯ã®æ¨¹æ§˜ã®ä¸­ã‚¯ãƒªã‚¢', types: ["deku", "ganon"], child: "yes" },
	{ name: "3 unused keys in Gerudo Training Grounds", jp: 'ã‚²ãƒ«ãƒ‰ã®ä¿®ç·´å ´ã®æœªä½¿ç”¨ã®ã‚«ã‚®3ã¤', types: ["fortress"], child: "yes" },
	{ name: "All 3 Skulltulas in Ice Cavern", jp: 'æ°·ã®æ´žçªŸã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©3åŒ¹', types: ["ice"], subtypes: ["wallet", "mapcompass"], child: "yes" }
];
bingoList[7] = [
	{ name: "Milk", jp: 'ãƒ­ãƒ³ãƒ­ãƒ³ç‰›ä¹³', types: ["lonlon", "bottle"], child: "yes" },
	{ name: "4 unused keys in Gerudo Training Grounds", jp: 'ã‚²ãƒ«ãƒ‰ã®ä¿®ç·´å ´ã®æœªä½¿ç”¨ã®ã‚«ã‚®4ã¤', types: ["fortress"], child: "yes" },
	{ name: "All 4 Lost Woods area Skulltulas", jp: 'è¿·ã„ã®æ£®ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["forest"], subtypes: ["wallet"], child: "no" },
	{ name: "Fill all 4 Bottle Slots", jp: '4ã¤ã®ç©ºããƒ“ãƒ³ã‚¹ãƒ­ãƒƒãƒˆã‚’å…¨ã¦åŸ‹ã‚ã‚‹', types: ["bottle"], child: "yes" },
	{ name: "Blue Potion", jp: 'é’ã„ã‚¯ã‚¹ãƒª', types: ["atrade", "zl"], child: "no" },
	{ name: "At least 4 songs", jp: 'æ­Œ4ã¤ä»¥ä¸Š', types: ["songs", "atrade", "zl"], subtypes: ["child2"], child: "yes" },
	{ name: "Giant's Wallet", jp: 'å·¨äººã®ã‚µã‚¤ãƒ•', types: ["wallet"], child: "yes" }
];
bingoList[8] = [
	{ name: "Plant bean in Death Mountain Crater", jp: 'ãƒ‡ã‚¹ãƒžã‚¦ãƒ³ãƒ†ãƒ³ç«å£ã®åœŸã«ãƒžãƒ¡ã‚’æ¤ãˆã‚‹', types: ["dmc", "beans"], subtypes: ["child2"], child: "yes" },
	{ name: "Both Gerudo's Fortress area Skulltulas", jp: 'ã‚²ãƒ«ãƒ‰ã®ç ¦ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©2åŒ¹', types: ["fortress"], subtypes: ["wallet"], child: "no" },
	{ name: "Epona's Song", jp: 'ã‚¨ãƒãƒŠã®æ­Œ', types: ["lonlon"], subtypes: ["songs"], child: "yes" },
	{ name: "Iron Boots", jp: 'ãƒ˜ãƒ“ãƒ¼ãƒ–ãƒ¼ãƒ„', types: ["ice", "boots", "mapcompass"], child: "yes" },
	{ name: "5 unused keys in Gerudo Training Grounds", jp: 'ã‚²ãƒ«ãƒ‰ã®ä¿®ç·´å ´ã®æœªä½¿ç”¨ã®ã‚«ã‚®5ã¤', types: ["fortress"], child: "yes" },
	{ name: "6 Hearts", jp: 'ãƒãƒ¼ãƒˆ6ã¤', types: ["hearts"], child: "yes" },
	{ name: "Defeat Phantom Ganon", jp: 'ãƒ•ã‚¡ãƒ³ãƒˆãƒ ã‚¬ãƒŽãƒ³æ’ƒç ´', types: ["forest", "pg"], subtypes: ["hearts"], child: "yes" },
	{ name: "Map & Compass in Water Temple", jp: 'æ°´ã®ç¥žæ®¿ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["water"], subtypes: ["mapcompass"], child: "no" }
];
bingoList[9] = [
	{ name: "3 Swords & 3 Tunics", jp: 'å‰£3ç¨®é¡žã¨æœ3ç¨®é¡ž', types: ["swords", "tunics", "ice", "fire"], subtypes: ["wallet"], child: "no" },
	{ name: "3 Boots", jp: 'é´3ç¨®é¡ž', types: ["boots", "ice", "mapcompass"], child: "yes" },
	{ name: "All 5 Skulltulas in Dodongo's Cavern", jp: 'ãƒ‰ãƒ‰ãƒ³ã‚´ã®æ´žçªŸã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["dc"], subtypes: ["wallet"], child: "yes" },
	{ name: "Defeat Morpha", jp: 'ãƒ¢ãƒ¼ãƒ•ã‚¡æ’ƒç ´', types: ["water"], subtypes: ["hearts"], child: "no" },
	{ name: "Beat the Forest Temple", jp: 'æ£®ã®ç¥žæ®¿ã‚¯ãƒªã‚¢', types: ["forest", "pg"], subtypes: ["hearts"], child: "yes" },
	{ name: "500 Rupees", jp: '500ãƒ«ãƒ”ãƒ¼', types: ["wallet"], child: "yes" }
];
bingoList[10] = [
	{ name: "At least 7 Magic Beans", jp: 'é­”æ³•ã®ãƒžãƒ¡7ã¤ä»¥ä¸Š', types: ["beans"], subtypes: ["child2", "wallet"], child: "yes" },
	{ name: "Defeat Big Octo", jp: 'å¤§ã‚ªã‚¯ã‚¿æ’ƒç ´', types: ["jabu", "ice"], child: "yes" },
	{ name: "37th heart piece (Child Fortress)", jp: '37ç•ªç›®ã®ãƒãƒ¼ãƒˆã®ã‹ã‘ã‚‰(å­ä¾›ã®ã‚²ãƒ«ãƒ‰ã®ç ¦)', types: ["fortress"], subtypes: ["hearts", "kd"], child: "yes" },
	{ name: "Beat the Water Temple", jp: 'æ°´ã®ç¥žæ®¿ã‚¯ãƒªã‚¢', types: ["water"], subtypes: ["hearts"], child: "no" },
	{ name: "Forest Medallion", jp: 'æ£®ã®ãƒ¡ãƒ€ãƒ«', types: ["forest", "lightarrow", "atrade", "zl", "pg"], subtypes: ["hearts"], child: "yes" },
	{ name: "6 unused keys in Gerudo Training Grounds", jp: 'ã‚²ãƒ«ãƒ‰ã®ä¿®ç·´å ´ã®æœªä½¿ç”¨ã®ã‚«ã‚®6ã¤', types: ["fortress"], child: "yes" },
	{ name: "Requiem of Spirit", jp: 'é­‚ã®ãƒ¬ã‚¯ã‚¤ã‚¨ãƒ ', types: ["spirit"], subtypes: ["songs"], child: "yes" },
	{ name: "At least 6 songs", jp: 'æ­Œ6ã¤ä»¥ä¸Š', types: ["songs", "atrade", "zl"], subtypes: ["child2"], child: "no" }
];
bingoList[11] = [										   
	{ name: "At least 4 Skulltulas in Shadow Temple", jp: 'é—‡ã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹ä»¥ä¸Š', types: ["shadow"], subtypes: ["wallet"], child: "no" },
	{ name: "All 8 Kakariko area Skulltulas", jp: 'ã‚«ã‚«ãƒªã‚³æ‘ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©8åŒ¹', types: ["botw"], subtypes: ["wallet"], child: "no" },
	{ name: "Mirror Shield", jp: 'ãƒŸãƒ©ãƒ¼ã‚·ãƒ¼ãƒ«ãƒ‰', types: ["shields", "spirit"], child: "yes" },
	{ name: "All 5 Skulltulas in Forest Temple", jp: 'æ£®ã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["forest"], subtypes: ["wallet"], child: "no" },
	{ name: "All 4 Skulltulas in Deku Tree", jp: 'ãƒ‡ã‚¯ã®æ¨¹æ§˜ã®ä¸­ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["deku"], subtypes: ["wallet"], child: "yes" },
	{ name: "Water Medallion", jp: 'æ°´ã®ãƒ¡ãƒ€ãƒ«', types: ["water", "lightarrow", "atrade", "zl"], subtypes: ["hearts"], child: "no" },
	{ name: "Gerudo's Card", jp: 'ã‚²ãƒ«ãƒ‰ã®ä¼šå“¡è¨¼', types: ["fortress"], child: "yes" },
	{ name: "Defeat Amy (Green Poe)", jp: 'ã‚¨ã‚¤ãƒŸãƒ¼æ’ƒç ´(ç·‘ã®ãƒã‚¦)ï½´', types: ["forest", "fortress", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" }
];
bingoList[12] = [
	{ name: "Stone of Agony", jp: 'ã‚‚ã ãˆçŸ³', types: ["wallet"], child: "yes" },
	{ name: "Get to the end of Fire Trial", jp: 'ç‚Žã®çµç•Œã®æœ€å¾Œã®éƒ¨å±‹ã«åˆ°é”', types: ["ganon", "strength", "fire"], subtypes: ["bosskey"], child: "no" },
	{ name: "Golden Gauntlets", jp: 'é‡‘ã®ã‚°ãƒ­ãƒ¼ãƒ–', types: ["strength", "ganon", "deku"], child: "yes" },
	{ name: "Get Bombchu chest in Spirit Temple", jp: 'é­‚ã®ç¥žæ®¿ã®ãƒœãƒ ãƒãƒ¥ã‚¦å–å¾—', types: ["spirit"], child: "yes" },
	{ name: "All 4 Skulltulas in Jabu-Jabu", jp: 'ã‚¸ãƒ£ãƒ–ã‚¸ãƒ£ãƒ–æ§˜ã®ãŠè…¹ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["jabu", "ice"], subtypes: ["hearts", "wallet"], child: "yes" },
	{ name: "Fairy Bow", jp: 'å¦–ç²¾ã®å¼“', types: ["forest", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "Defeat Dark Link", jp: 'ãƒ€ãƒ¼ã‚¯ãƒªãƒ³ã‚¯æ’ƒç ´', types: ["water", "ice"], child: "no" },
	{ name: "Fire Arrow", jp: 'ç‚Žã®çŸ¢', types: ["water", "fortress", "firearrow", "quiver"], child: "no" }
];
bingoList[13] = [
	{ name: "7 Hearts", jp: 'ãƒãƒ¼ãƒˆ7ã¤', types: ["hearts"], child: "yes" },
	{ name: "Map & Compass in Jabu-Jabu", jp: 'ã‚¸ãƒ£ãƒ–ã‚¸ãƒ£ãƒ–æ§˜ã®ãŠè…¹ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["jabu"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Win Bombchu Bowling Prize", jp: 'ãƒœãƒ ãƒãƒ¥ã‚¦ãƒœã‚¦ãƒªãƒ³ã‚°ã®ãƒãƒ¼ãƒˆã®ã‹ã‘ã‚‰', types: ["dc", "kd"], subtypes: ["hearts", "child2"], child: "yes" },
	{ name: "Silver Gauntlets", jp: 'éŠ€ã®ã‚°ãƒ­ãƒ¼ãƒ–', types: ["strength", "spirit"], child: "yes" },
	{ name: "Longshot", jp: 'ãƒ­ãƒ³ã‚°ãƒ•ãƒƒã‚¯', types: ["water", "ice"], child: "no" },
	{ name: "3 Swords & 3 Boots", jp: 'å‰£3ç¨®é¡žã¨é´3ç¨®é¡ž', types: ["swords", "boots", "ice"], subtypes: ["wallet", "mapcompass"], child: "no" }
];
bingoList[14] = [
	{ name: "Both Hyrule Field area Skulltulas", jp: 'ãƒã‚¤ãƒ©ãƒ«å¹³åŽŸã‚¨ãƒªã‚¢ã®é»„é‡‘ãƒŽã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©2åŒ¹', types: ["zl", "water"], subtypes: ["wallet"], child: "yes" },
	{ name: "All 4 Lon-Lon Ranch area Skulltulas", jp: 'ãƒ­ãƒ³ãƒ­ãƒ³ç‰§å ´ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["jabu", "lonlon"], subtypes: ["wallet"], child: "yes" },
	{ name: "Double Magic", jp: 'é­”åŠ›2å€', types: ["dmc", "zl"], child: "yes" },
	{ name: "At least 8 songs", jp: 'æ­Œ8ã¤ä»¥ä¸Š', types: ["songs", "atrade", "zl"], subtypes: ["child2"], child: "no" },
	{ name: "Bronze Gauntlets", jp: 'éŠ…ã®ã‚°ãƒ­ãƒ¼ãƒ–', types: ["strength", "bulletbag", "ganon", "atrade"], subtypes: ["wallet"], child: "no" },
	{ name: "Keaton Mask", jp: 'ã‚­ãƒ¼ã‚¿ãƒ³ã®ãŠé¢', types: ["zl"], child: "yes" },
	{ name: "3 Tunics & 3 Boots", jp: 'æœ3ç¨®é¡žã¨é´3ç¨®é¡ž', types: ["tunics", "boots", "fire", "ice"], subtypes: ["mapcompass"], child: "no" },
	{ name: "Forest Temple Boss Key", jp: 'æ£®ã®ç¥žæ®¿ã®ãƒœã‚¹éƒ¨å±‹ã®ã‚«ã‚®', types: ["forest", "claimcheck", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" }
];
bingoList[15] = [
	{ name: "Map & Compass in Forest Temple", jp: 'æ£®ã®ç¥žæ®¿ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["forest", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "Map & Compass in Fire Temple", jp: 'ç‚Žã®ç¥žæ®¿ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "All 4 Gerudo Valley area Skulltulas", jp: 'ã‚²ãƒ«ãƒ‰ã®è°·ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["fortress"], subtypes: ["wallet", "child2"], child: "no" },
	{ name: "All 8 Death Mountain area Skulltulas", jp: 'ãƒ‡ã‚¹ãƒžã‚¦ãƒ³ãƒ†ãƒ³ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©8åŒ¹', types: ["dmc"], subtypes: ["child2", "wallet"], child: "no" },
	{ name: "At least 9 Magic Beans", jp: 'é­”æ³•ã®ãƒžãƒ¡9ã¤ä»¥ä¸Š', types: ["beans"], subtypes: ["child2", "wallet"], child: "yes" },
	{ name: "Blue Gauntlets", jp: 'é’ã®ã‚°ãƒ­ãƒ¼ãƒ–', types: ["spirit", "strength", "bulletbag", "atrade"], subtypes: ["wallet"], child: "no" }
];
bingoList[16] = [
	{ name: "Megaton Hammer", jp: 'ãƒ¡ã‚¬ãƒˆãƒ³ãƒãƒ³ãƒžãƒ¼', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "6 Maps", jp: 'ãƒžãƒƒãƒ—6ã¤', types: ["mapcompass", "claimcheck"], child: "yes" },
	{ name: "All 8 Zora's Domain area Skulltulas", jp: 'ã‚¾ãƒ¼ãƒ©ã®é‡Œã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©8åŒ¹', types: ["jabu", "ice"], subtypes: ["wallet"], child: "no" },
	{ name: "Defeat Barinade", jp: 'ãƒãƒªãƒãƒ¼ãƒ‰æ’ƒç ´', types: ["jabu"], subtypes: ["hearts"], child: "yes" },
	{ name: "Double Defense", jp: 'é˜²å¾¡åŠ›2å€', types: ["zl", "ganon"], child: "no" },
	{ name: "At least 3 Skulltulas in Water Temple", jp: 'æ°´ã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©3åŒ¹ä»¥ä¸Š', types: ["water", "ice", "zl"], subtypes: ["wallet"], child: "no"}
];
bingoList[17] = [
	{ name: "Frog's Heart Piece", jp: 'ã‚«ã‚¨ãƒ«ã®ãƒãƒ¼ãƒˆã®ã‹ã‘ã‚‰(åµã®æ­Œ)', types: ["forest", "child2", "pg"], subtypes: ["hearts", "songs"], child: "no" },
	{ name: "Shadow Temple Boss Key", jp: 'é—‡ã®ç¥žæ®¿ã®ãƒœã‚¹éƒ¨å±‹ã®ã‚«ã‚®', types: ["shadow", "zl"], subtypes: ["hearts", "bosskey"], child: "no"},
	{ name: "Defeat both Flare Dancers", jp: 'ãƒ•ãƒ¬ã‚¢ãƒ€ãƒ³ã‚µãƒ¼2ä½“æ’ƒç ´', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "Beat Jabu-Jabu's Belly", jp: 'ã‚¸ãƒ£ãƒ–ã‚¸ãƒ£ãƒ–æ§˜ã®ãŠè…¹ã‚¯ãƒªã‚¢', types: ["jabu"], subtypes: ["hearts", "child2"], child: "yes" },
	{ name: "All 5 Skulltulas in Spirit Temple", jp: 'é­‚ã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["spirit"], subtypes: ["wallet"], child: "yes" },
	{ name: "3 Swords & 3 Shields", jp: 'å‰£3ç¨®é¡žã¨ç›¾3ç¨®é¡ž', types: ["swords", "shields", "spirit"], subtypes: ["wallet"], child: "no" },
	{ name: "Get to the end of Light Trial", jp: 'å…‰ã®çµç•Œã®æœ€å¾Œã®éƒ¨å±‹ã«åˆ°é”', types: ["ganon", "zl", "strength"] , child: "no"},
	{ name: "8 different unused keys in Gerudo Training Grounds", jp: 'ã‚²ãƒ«ãƒ‰ã®ä¿®ç·´å ´ã®æœªä½¿ç”¨ã®ã‚«ã‚®8ã¤', types: ["fortress", "strength", "quiver"], child: "no" }
];
bingoList[18] = [
	{ name: "Defeat Nabooru-Knuckle", jp: 'ã‚¢ã‚¤ã‚¢ãƒ³ãƒŠãƒƒã‚¯(ãƒŠãƒœãƒ¼ãƒ«)æ’ƒç ´', types: ["spirit"], child: "no" },
	{ name: "Saria's Song", jp: 'ã‚µãƒªã‚¢ã®æ­Œ', types: ["zl", "saria"], subtypes: ["child2", "songs"], child: "yes" },
	{ name: "Farore's Wind", jp: 'ãƒ•ãƒ­ãƒ«ã®é¢¨', types: ["zl", "ice"], child: "yes" },
	{ name: "All 5 Skulltulas in Fire Temple", jp: 'ç‚Žã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["fire"], subtypes: ["wallet", "mapcompass", "bosskey"], child: "no" },
	{ name: "Defeat Volvagia", jp: 'ãƒ´ã‚¡ãƒ«ãƒã‚¸ã‚¢æ’ƒç ´', types: ["fire"], subtypes: ["hearts", "mapcompass", "bosskey", "pg"], child: "no" },
	{ name: "At least 9 songs", jp: 'æ­Œ9ã¤ä»¥ä¸Š', types: ["songs", "atrade", "zl"], subtypes: ["child2"], child: "no" }
];
bingoList[19] = [
	{ name: "Defeat Bongo-Bongo", jp: 'ãƒœãƒ³ã‚´ãƒœãƒ³ã‚´æ’ƒç ´', types: ["shadow", "zl", "deku"], subtypes: ["hearts", "bosskey"], child: "no" },
	{ name: "8 Hearts", jp: 'ãƒãƒ¼ãƒˆ8ã¤', types: ["hearts"], child: "yes" },
	{ name: "6 Compasses", jp: 'ã‚³ãƒ³ãƒ‘ã‚¹6ã¤', types: ["mapcompass"], child: "yes" },
	{ name: "3 Shields & 3 Tunics", jp: 'ç›¾3ç¨®é¡žã¨æœ3ç¨®é¡ž', types: ["shields", "fire", "tunics", "spirit"], child: "no" },
	{ name: "Beat the Fire Temple", jp: 'ç‚Žã®ç¥žæ®¿ã‚¯ãƒªã‚¢', types: ["fire", "forest"], subtypes: ["hearts", "bosskey", "mapcompass", "pg"], child: "no" },
];
bingoList[20] = [
	{ name: "Light Arrows", jp: 'å…‰ã®çŸ¢', types: ["lightarrow", "atrade", "zl"], child: "no" },
	{ name: "Beat the Shadow Temple", jp: 'é—‡ã®ç¥žæ®¿ã‚¯ãƒªã‚¢', types: ["shadow", "zl", "deku"], subtypes: ["hearts", "bosskey"], child: "no" },
	{ name: "Defeat Meg (purple Poe)", jp: 'ãƒ¡ã‚°æ’ƒç ´(ç´«ã®ãƒã‚¦)', types: ["forest", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "All 4 Wasteland/ Colossus area Skulltulas", jp: 'å¹»å½±ã®ç ‚æ¼ ãƒ»å·¨å¤§é‚ªç¥žåƒã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["spirit"], subtypes: ["child2", "wallet", "kd"], child: "no" },
	{ name: "Goron Bracelet", jp: 'ã‚´ãƒ­ãƒ³ã®è…•è¼ª', types: ["strength", "zl", "saria"], subtypes: ["child2"], child: "yes" },
	{ name: "Nayru's Love", jp: 'ãƒãƒ¼ãƒ«ã®æ„›', types: ["spirit", "zl"], child: "yes" },
	{ name: "Free all 9 gorons in Fire Temple", jp: 'ç‚Žã®ç¥žæ®¿ã§ï¼™äººã®ã‚´ãƒ­ãƒ³ã‚’å…¨å“¡æ•‘ã†', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no"}
];
bingoList[21] = [
	{ name: "All 5 Lake Hylia Skulltulas", jp: 'ãƒã‚¤ãƒªã‚¢æ¹–ç•”ã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["ice", "water"], subtypes: ["child2", "wallet", "mapcompass"], child: "no" },
	{ name: "Din's Fire", jp: 'ãƒ‡ã‚£ãƒ³ã®ç‚Ž', types: ["zl"], subtypes: ["child2"], child: "yes" },
	{ name: "Get to the end of Spirit Trial", jp: 'é­‚ã®çµç•Œã®æœ€å¾Œã®éƒ¨å±‹ã«åˆ°é”', types: ["ganon", "spirit", "quiver"], child: "no" },
	{ name: "All 4 Market area Skulltulas", jp: 'åŸŽä¸‹ç”ºã‚¨ãƒªã‚¢ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©4åŒ¹', types: ["forest", "child2", "pg"], subtypes: ["hearts", "wallet"], child: "no" },
	{ name: "Spooky Mask", jp: 'ã“ã‚ããªãŠé¢', types: ["zl", "fortress", "saria", "beans"], child: "yes" }
];
bingoList[22] = [
	{ name: "Spirit Temple Boss Key", jp: 'é­‚ã®ç¥žæ®¿ã®ãƒœã‚¹éƒ¨å±‹ã®ã‚«ã‚®', types: ["spirit", "lightarrow", "zl"], subtypes: ["bosskey"], child: "no" },
	{ name: "Quiver (50)", jp: 'çŸ¢ç«‹ã¦(50)', types: ["quiver", "fortress", "beans"], child: "no" },
	{ name: "3 Shields & 3 Boots", jp: 'ç›¾3ç¨®é¡žã¨é´3ç¨®é¡ž', types: ["shields", "boots", "spirit", "ice"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Get to the end of Water Trial", jp: 'æ°´ã®çµç•Œã®æœ€å¾Œã®éƒ¨å±‹ã«åˆ°é”', types: ["ganon", "fire", "lightarrow"], subtypes: ["mapcompass", "bosskey", "pg"], child: "no" }
];
bingoList[23] = [
	{ name: "Both heart pieces in Lost Woods", jp: 'è¿·ã„ã®æ£®ã®ãƒãƒ¼ãƒˆã®ã‹ã‘ã‚‰ï¼’ã¤', types: ["zl"], subtypes: ["hearts", "child2", "songs"], child: "yes" },
	{ name: "7 Maps", jp: 'ãƒžãƒƒãƒ—7ã¤', types: ["mapcompass", "claimcheck"], child: "yes" },
	{ name: "Map & Compass in Spirit Temple", jp: 'é­‚ã®ç¥žæ®¿ã®ãƒžãƒƒãƒ—ã¨ã‚³ãƒ³ãƒ‘ã‚¹', types: ["spirit", "zl"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Defeat Twinrova", jp: 'ãƒ„ã‚¤ãƒ³ãƒ­ãƒ¼ãƒæ’ƒç ´', types: ["spirit"], subtypes: ["hearts"], child: "no" }
];
bingoList[24] = [
	{ name: "Beat the Spirit Temple", jp: 'é­‚ã®ç¥žæ®¿ã‚¯ãƒªã‚¢', types: ["spirit"], subtypes: ["hearts"], child: "no" },
	{ name: "9 Hearts", jp: 'ãƒãƒ¼ãƒˆ9ã¤', types: ["hearts"], child: "yes" },
	{ name: "All 5 Skulltulas in Shadow Temple", jp: 'é—‡ã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["shadow", "zl"], subtypes: ["wallet", "bosskey"], child: "no" },
	{ name: "Get to the end of Shadow Trial", jp: 'é—‡ã®çµç•Œã®æœ€å¾Œã®éƒ¨å±‹ã«åˆ°é”', types: ["ganon", "fire"], subtypes: ["lightarrow", "mapcompass", "bosskey", "pg"], child: "no" }
];
bingoList[25] = [
	{ name: "7 Compasses", jp: 'ã‚³ãƒ³ãƒ‘ã‚¹7ã¤', types: ["mapcompass"], child: "no" },
	{ name: "All 5 Skulltulas in Water Temple", jp: 'æ°´ã®ç¥žæ®¿ã®é»„é‡‘ã®ã‚¹ã‚¿ãƒ«ãƒãƒ¥ãƒ©5åŒ¹', types: ["water", "zl"], child: "no" },
	{ name: "Two Fairy Spells", jp: 'é­”æ³•ã®ã‚¢ã‚¤ãƒ†ãƒ ï¼’ã¤', types: ["zl", "spirit"], subtypes: ["child2"], child: "yes" },
	{ name: "Green Gauntlets", jp: 'ç·‘ã®ã‚°ãƒ­ãƒ¼ãƒ–', types: ["strength", "bulletbag", "zl", "atrade", "saria"], subtypes: ["wallet"], child: "no" }
];
