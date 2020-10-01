const allItems = {
  items: [
    {
      name: "White Pearl",
      price: 160,
      url: "https://wiki.mediviastats.info/images/4/48/White_Pearl.gif",
      location: "All jewelers",
    },
    {
      name: "Black Pearl",
      price: 280,
      url: "https://wiki.mediviastats.info/images/e/e5/Black_Pearl.gif",
      location: "All jewelers",
    },
    {
      name: "Small Diamond",
      price: 300,
      url:
        "https://wiki.mediviastats.info/images/c/cc/Small_Diamond_%28Old%29.gif",
      location: "All jewelers",
    },
    {
      name: "Small Sapphire",
      price: 250,
      url:
        "https://wiki.mediviastats.info/images/6/6b/Small_Sapphire_%28Old%29.gif",
      location: "All jewelers",
    },
    {
      name: "Small Ruby",
      price: 250,
      url: "https://wiki.mediviastats.info/images/9/92/Small_Ruby1.gif",
      location: "All jewelers",
    },
    {
      name: "Small Emerald",
      price: 250,
      url: "https://wiki.mediviastats.info/images/9/98/Small_Emerald1.gif",
      location: "All jewelers",
    },
    {
      name: "Small Amethyst",
      price: 200,
      url: "https://wiki.mediviastats.info/images/0/0c/Small_Amethyst1.gif",
      location: "All jewelers",
    },
    {
      name: "Halberd",
      price: 400,
      url: "https://wiki.mediviastats.info/images/1/12/Halberd.png",
      location: "Arak",
    },
    {
      name: "Battle Axe",
      price: 80,
      url: "https://wiki.mediviastats.info/images/5/59/Battle_axe.png",
      location: "Arak",
    },
    {
      name: "Brass Armor",
      price: 150,
      url: "https://wiki.mediviastats.info/images/b/b6/Brass_armor.png",
      location: "Arak",
    },
    {
      name: "Battle Hammer",
      price: 120,
      url: "https://wiki.mediviastats.info/images/5/5d/Battle_hammer.png",
      location: "Arak",
    },
    {
      name: "Plate Armor",
      price: 400,
      url: "https://wiki.mediviastats.info/images/9/9b/Plate_armor.png",
      location: "Arak",
    },
    {
      name: "Steel Shield",
      price: 80,
      url: "https://wiki.mediviastats.info/images/b/bc/Steel_shield.png",
      location: "Arak",
    },
    {
      name: "Battle Shield",
      price: 95,
      url: "https://wiki.mediviastats.info/images/6/67/Battle_shield.png",
      location: "Arak",
    },
    {
      name: "Two Handed Sword",
      price: 450,
      url: "https://wiki.mediviastats.info/images/2/2f/Two_handed_sword.png",
      location: "Arak",
    },
    {
      name: "Double Axe",
      price: 260,
      url: "https://wiki.mediviastats.info/images/2/25/Double_axe.png",
      location: "Osaris",
    },
    {
      name: "Steel Helmet",
      price: 293,
      url: "https://wiki.mediviastats.info/images/f/f2/Steel_helmet.png",
      location: "Osaris",
    },
    {
      name: "Morning Star",
      price: 100,
      url: "https://wiki.mediviastats.info/images/f/fd/Morning_star.png",
      location: "Osaris",
    },
    {
      name: "Clerical Mace",
      price: 170,
      url: "https://wiki.mediviastats.info/images/a/a3/Clerical_mace.png",
      location: "Garrogat",
    },
    {
      name: "Crystal Ball",
      price: 190,
      url: "https://wiki.mediviastats.info/images/9/91/Crystal_ball.png",
      location: "Garrogat",
    },
    {
      name: "Mind Stone",
      price: 170,
      url: "https://wiki.mediviastats.info/images/5/50/150.gif",
      location: "Garrogat",
    },
    {
      name: "Iron Helmet",
      price: 150,
      url: "https://wiki.mediviastats.info/images/8/8d/Iron_helmet.png",
      location: "Garrogat",
    },
    {
      name: "Viking Shield",
      price: 85,
      url: "https://wiki.mediviastats.info/images/e/eb/Viking_shield.png",
      location: "Garrogat",
    },
    {
      name: "Plate Legs",
      price: 115,
      url: "https://wiki.mediviastats.info/images/b/b9/Plate_legs.png",
      location: "Lucindel",
    },
    {
      name: "Dwarven Shield",
      price: 100,
      url: "https://wiki.mediviastats.info/images/9/91/Dwarven_shield.png",
      location: "Mittenhoff",
    },
    {
      name: "Dragon Lance",
      price: 9000,
      url: "https://wiki.mediviastats.info/images/6/67/Dragon_lance.png",
      location: "Blue djinn",
    },
    {
      name: "Fire Axe",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/3/39/Fire_axe.gif",
      location: "Blue djinn",
    },
    {
      name: "Fire Sword",
      price: 4000,
      url: "https://wiki.mediviastats.info/images/6/6a/Fire-sword.gif",
      location: "Blue djinn",
    },
    {
      name: "War Hammer",
      price: 1200,
      url: "https://wiki.mediviastats.info/images/a/ab/War_hammer.png",
      location: "Blue djinn",
    },
    {
      name: "Spike Sword",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/f/f6/Spike_sword.png",
      location: "Blue djinn",
    },
    {
      name: "Ice Rapier",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/2/28/Ice_rapier.png",
      location: "Blue djinn",
    },
    {
      name: "Broad Sword",
      price: 500,
      url: "https://wiki.mediviastats.info/images/9/91/102.gif",
      location: "Blue djinn",
    },
    {
      name: "Obsidian Lance",
      price: 500,
      url: "https://wiki.mediviastats.info/images/b/bb/Obsidian_lance.png",
      location: "Blue djinn",
    },
    {
      name: "Crown Armor",
      price: 12000,
      url: "https://wiki.mediviastats.info/images/d/d5/Crown_armor.png",
      location: "Blue djinn",
    },
    {
      name: "Blue Robe",
      price: 10000,
      url: "https://wiki.mediviastats.info/images/7/70/Blue_robe.png",
      location: "Blue djinn",
    },
    {
      name: "Noble Armor",
      price: 900,
      url: "https://wiki.mediviastats.info/images/9/9d/Noble_armor.png",
      location: "Blue djinn",
    },
    {
      name: "Royal Helmet",
      price: 30000,
      url: "https://wiki.mediviastats.info/images/0/0c/Royal_helmet.png",
      location: "Blue djinn",
    },
    {
      name: "Crusader Helmet",
      price: 6000,
      url: "https://wiki.mediviastats.info/images/e/e9/Crusader_helmet.png",
      location: "Blue djinn",
    },
    {
      name: "Crown Helmet",
      price: 2500,
      url: "https://wiki.mediviastats.info/images/7/7e/Crown_helmet.png",
      location: "Blue djinn",
    },
    {
      name: "Crown Legs",
      price: 12000,
      url: "https://wiki.mediviastats.info/images/d/d8/Crown_legs.png",
      location: "Blue djinn",
    },
    {
      name: "Scorpid Hood",
      price: 2300,
      url: "https://wiki.mediviastats.info/images/e/ec/Scorpid_hood.png",
      location: "Blue djinn",
    },
    {
      name: "Boots of Haste",
      price: 30000,
      url: "https://wiki.mediviastats.info/images/f/f3/Boots_of_haste.png",
      location: "Blue djinn",
    },
    {
      name: "Phoenix Shield",
      price: 16000,
      url: "https://wiki.mediviastats.info/images/f/ff/853.gif",
      location: "Blue djinn",
    },
    {
      name: "Crown Shield",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/4/47/Crown_shield.png",
      location: "Blue djinn",
    },
    {
      name: "Dragon Shield",
      price: 4000,
      url: "https://wiki.mediviastats.info/images/b/b9/Dragon_shield.png",
      location: "Blue djinn",
    },
    {
      name: "Guardian Shield",
      price: 2000,
      url: "https://wiki.mediviastats.info/images/8/83/Guardian_shield.png",
      location: "Blue djinn",
    },
    { name: "Watcher Shield", price: 1200, url: "", location: "Blue djinn" },
    {
      name: "Red Spellwand",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/1/1d/Red_Spellwand.gif",
      location: "Blue djinn",
    },
    {
      name: "Blue Spellwand",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/f/fa/Blue_Spellwand.gif",
      location: "Blue djinn",
    },
    {
      name: "Green Spellwand",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/0/08/Green_Spellwand.gif",
      location: "Blue djinn",
    },
    {
      name: "Scimitar",
      price: 150,
      url: "https://wiki.mediviastats.info/images/e/e5/Scimitar.png",
      location: "Green djinn",
    },
    {
      name: "Giant Sword",
      price: 17000,
      url: "https://wiki.mediviastats.info/images/c/cd/Giant_sword.png",
      location: "Green djinn",
    },
    {
      name: "Serpent Sword",
      price: 900,
      url: "https://wiki.mediviastats.info/images/a/a5/Serpent_sword.png",
      location: "Green djinn",
    },
    {
      name: "Poison Dagger",
      price: 50,
      url: "https://wiki.mediviastats.info/images/b/b6/Poison_dagger.png",
      location: "Green djinn",
    },
    {
      name: "Knight Axe",
      price: 2000,
      url: "https://wiki.mediviastats.info/images/5/55/Knight_axe.png",
      location: "Green djinn",
    },
    {
      name: "Dragon Hammer",
      price: 2000,
      url: "https://wiki.mediviastats.info/images/9/9b/Dragon_hammer.png",
      location: "Green djinn",
    },
    {
      name: "Skull Staff",
      price: 6000,
      url: "https://wiki.mediviastats.info/images/5/54/Skull_Staff.gif",
      location: "Green djinn",
    },
    {
      name: "Dark Armor",
      price: 400,
      url: "https://wiki.mediviastats.info/images/2/2e/Dark_armor.png",
      location: "Green djinn",
    },
    {
      name: "Dark Shield",
      price: 166,
      url: "https://wiki.mediviastats.info/images/e/e6/Dark_shield.png",
      location: "Green djinn",
    },
    {
      name: "Knight Armor",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/e/e5/Knight_armor.png",
      location: "Green djinn",
    },
    {
      name: "Dark Helmet",
      price: 250,
      url: "https://wiki.mediviastats.info/images/f/f7/Dark_helmet.png",
      location: "Green djinn",
    },
    {
      name: "Knight Helmet",
      price: 2500,
      url: "https://wiki.mediviastats.info/images/8/82/Knight_helmet.png",
      location: "Green djinn",
    },
    {
      name: "Warrior Helmet",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/e/e9/Warrior_helmet.png",
      location: "Green djinn",
    },
    {
      name: "Strange Helmet",
      price: 500,
      url: "https://wiki.mediviastats.info/images/c/c7/Strange_helmet.png",
      location: "Green djinn",
    },
    {
      name: "Spider Silk Armor",
      price: 2000,
      url: "https://wiki.mediviastats.info/images/e/e0/6787.png",
      location: "Green djinn",
    },
    {
      name: "Knight Legs",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/f/f3/Knight_legs.png",
      location: "Green djinn",
    },
    {
      name: "Tower Shield",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/5/56/Tower_shield.png",
      location: "Green djinn",
    },
    {
      name: "Black Shield",
      price: 800,
      url: "https://wiki.mediviastats.info/images/1/14/Black_shield.png",
      location: "Green djinn",
    },
    {
      name: "Ancient Shield",
      price: 900,
      url: "https://wiki.mediviastats.info/images/e/ec/66.gif",
      location: "Green djinn",
    },
    {
      name: "Vampire Shield",
      price: 15000,
      url: "https://wiki.mediviastats.info/images/1/1e/Vampire_shield.png",
      location: "Green djinn",
    },
    {
      name: "Chaos Shield",
      price: 500000,
      url: "https://wiki.mediviastats.info/images/4/45/Chaos_shield.gif",
      location: "Wulkan",
    },
    {
      name: "Magic Plate Armor",
      price: 200000,
      url:
        "https://wiki.mediviastats.info/images/7/70/Magic_plate_armor_new.png",
      location: "Wulkan",
    },
    {
      name: "Red Scale Armor",
      price: 190000,
      url: "https://wiki.mediviastats.info/images/8/8e/Red_scale_armor.png",
      location: "Wulkan",
    },
    {
      name: "Demon Armor",
      price: 150000,
      url: "https://wiki.mediviastats.info/images/6/6b/Demon_armor.png",
      location: "Wulkan",
    },
    {
      name: "Magic Sword",
      price: 150000,
      url: "https://wiki.mediviastats.info/images/7/71/Magic_sword.png",
      location: "Wulkan",
    },
    {
      name: "Stonecutter Axe",
      price: 150000,
      url: "https://wiki.mediviastats.info/images/a/a6/772.gif",
      location: "Wulkan",
    },
    {
      name: "Void Staff",
      price: 150000,
      url: "https://wiki.mediviastats.info/images/b/b2/Void_Staff.png",
      location: "Wulkan",
    },
    {
      name: "Vanquisher",
      price: 100000,
      url: "https://wiki.mediviastats.info/images/4/4d/Vanquisher.png",
      location: "Wulkan",
    },
    {
      name: "Ancient Armor",
      price: 75000,
      url: "https://wiki.mediviastats.info/images/7/7b/Ancient_Armor.png",
      location: "Wulkan",
    },
    {
      name: "Demonbone Legs",
      price: 60000,
      url: "https://wiki.mediviastats.info/images/7/70/Demonbone_legs.png",
      location: "Wulkan",
    },
    {
      name: "Golden Legs",
      price: 50000,
      url: "https://wiki.mediviastats.info/images/3/32/Golden_legs.png",
      location: "Wulkan",
    },
    {
      name: "Mastermind Shield",
      price: 50000,
      url: "https://wiki.mediviastats.info/images/8/8b/Mastermind_shield.png",
      location: "Wulkan",
    },
    {
      name: "Ancient Legs",
      price: 45000,
      url: "https://wiki.mediviastats.info/images/5/5a/Ancient_Legs.png",
      location: "Wulkan",
    },
    {
      name: "Demon Helmet",
      price: 45000,
      url: "https://wiki.mediviastats.info/images/f/fc/Demon_helmet.png",
      location: "Wulkan",
    },
    {
      name: "Ancient Helmet",
      price: 42000,
      url: "https://wiki.mediviastats.info/images/e/e8/Ancient_Helmet.png",
      location: "Wulkan",
    },
    {
      name: "Ancient Sword",
      price: 40000,
      url: "https://wiki.mediviastats.info/images/1/19/Ancinet_Sword.png",
      location: "Wulkan",
    },
    {
      name: "Demonbone Armor",
      price: 40000,
      url: "https://wiki.mediviastats.info/images/5/59/Demonbone_armor.png",
      location: "Wulkan",
    },
    {
      name: "Helmet of the Fallen King",
      price: 40000,
      url:
        "https://wiki.mediviastats.info/images/a/a0/Helmet_of_the_fallen_king.png",
      location: "Wulkan",
    },
    {
      name: "Shakirian Blade",
      price: 35000,
      url: "https://wiki.mediviastats.info/images/d/d5/Shakirian_Blade.gif",
      location: "Wulkan",
    },
    {
      name: "Royal Plate Armor",
      price: 35000,
      url:
        "https://wiki.mediviastats.info/images/e/ed/Royal_Plate_Armor_NEW.png",
      location: "Wulkan",
    },
    {
      name: "Silver Mace",
      price: 16500,
      url: "https://wiki.mediviastats.info/images/c/ce/Silver_Mace.png",
      location: "Wulkan",
    },
    {
      name: "Unholy Plate Armor",
      price: 15000,
      url: "https://wiki.mediviastats.info/images/8/80/Unholy_plate_armor.png",
      location: "Wulkan",
    },
    {
      name: "Crown Boots",
      price: 12000,
      url: "https://wiki.mediviastats.info/images/3/3c/Crown_boots.png",
      location: "Wulkan",
    },
    {
      name: "Demonbone Boots",
      price: 14000,
      url: "https://wiki.mediviastats.info/images/6/6f/Demonbone_boots.png",
      location: "Wulkan",
    },
    {
      name: "Light Armor",
      price: 13000,
      url: "https://wiki.mediviastats.info/images/0/04/Light_armor.png",
      location: "Wulkan",
    },
    {
      name: "Torn Quicksand Boots",
      price: 10000,
      url:
        "https://wiki.mediviastats.info/images/1/15/Torn_quicksand_boots.png",
      location: "Wulkan",
    },
    {
      name: "Demonbone Helmet",
      price: 9000,
      url: "https://wiki.mediviastats.info/images/b/b3/Demonbone_helmet.png",
      location: "Wulkan",
    },
    {
      name: "Fiery Armor",
      price: 7500,
      url: "https://wiki.mediviastats.info/images/c/c9/Fieryarmor.png",
      location: "Wulkan",
    },
    {
      name: "Fiery Helmet",
      price: 7500,
      url:
        "https://wiki.mediviastats.info/images/e/e1/Fieryhelmet%28transparent%29.png",
      location: "Wulkan",
    },
    {
      name: "Assassin Blade",
      price: 6300,
      url: "https://wiki.mediviastats.info/images/c/cf/Assassin_Blade.png",
      location: "Wulkan",
    },
    {
      name: "Bone Basher",
      price: 5500,
      url: "https://wiki.mediviastats.info/images/7/77/Bone_Basher.png",
      location: "Wulkan",
    },
    {
      name: "Unholy Halberd",
      price: 5500,
      url: "https://wiki.mediviastats.info/images/0/01/Unholy_Halberd.png",
      location: "Wulkan",
    },
    {
      name: "Ancient Boots",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/2/2e/Ancient_boots.png",
      location: "Wulkan",
    },
    {
      name: "Shakirian Shield",
      price: 3000,
      url: "https://wiki.mediviastats.info/images/9/9b/Shakirian_shield1.png",
      location: "Wulkan",
    },
    {
      name: "Wooden Maul",
      price: 2000,
      url: "https://wiki.mediviastats.info/images/e/ee/Wooden_Maul.png",
      location: "Wulkan",
    },
    {
      name: "Drake Scale Helmet",
      price: 850,
      url: "https://wiki.mediviastats.info/images/8/82/Drake_scale_helmet.png",
      location: "Wulkan",
    },
    {
      name: "Soul Dagger",
      price: 200,
      url: "https://wiki.mediviastats.info/images/1/10/Soul_dagger.png",
      location: "Wulkan",
    },
    {
      name: "Flaming Bow",
      price: 18000,
      url: "https://wiki.mediviastats.info/images/1/19/Flaming_Bow.gif",
      location: "Aremis",
    },
    {
      name: "Poisoned Bow",
      price: 16000,
      url: "https://wiki.mediviastats.info/images/6/65/Poisoned_Bow.png",
      location: "Aremis",
    },
    {
      name: "Bow",
      price: 130,
      url: "https://wiki.mediviastats.info/images/a/ad/Bow.gif",
      location: "Aremis",
    },
    {
      name: "Elven Bow",
      price: 500,
      url: "https://wiki.mediviastats.info/images/3/3b/Elven_Bow.png",
      location: "Aremis",
    },
    {
      name: "Hunting Bow",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/8/80/Hunting_Bow.png",
      location: "Aremis",
    },
    {
      name: "Shakirian Bow",
      price: 32000,
      url: "https://wiki.mediviastats.info/images/7/76/Shakirian_Bow.gif",
      location: "Aremis",
    },
    {
      name: "Crossbow",
      price: 160,
      url: "https://wiki.mediviastats.info/images/7/79/Crossbow.png",
      location: "Aremis",
    },
    {
      name: "Blazing Crossbow",
      price: 70000,
      url:
        "https://wiki.mediviastats.info/images/6/69/Blazing-Crossbow_zpsc86a5833.gif",
      location: "Aremis",
    },
    {
      name: "Enhanced Crossbow",
      price: 24000,
      url: "https://wiki.mediviastats.info/images/6/62/Enhanced_Crossbow.png",
      location: "Aremis",
    },
    {
      name: "Ignited Bow",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/8/85/Ignitedbow.gif",
      location: "Aremis",
    },
    {
      name: "Fiery Bow",
      price: 46000,
      url: "https://wiki.mediviastats.info/images/0/0a/Fiery_Bow.gif",
      location: "Aremis",
    },
    {
      name: "Crystallized Crossbow",
      price: 55000,
      url:
        "https://wiki.mediviastats.info/images/4/44/Crystallized_Crossbow.gif",
      location: "Aremis",
    },
    {
      name: "Envenomed Crossbow",
      price: 65000,
      url: "https://wiki.mediviastats.info/images/f/fd/Envenomed_Crossbow.png",
      location: "Aremis",
    },
    {
      name: "Elven Crossbow",
      price: 7500,
      url: "https://wiki.mediviastats.info/images/9/9d/Viperxbow.png",
      location: "Aremis",
    },
    {
      name: "Mercenary Sword",
      price: 45000,
      url: "https://wiki.mediviastats.info/images/1/1c/Mercenary_Sword.png",
      location: "Ziyad",
    },
    {
      name: "Dragon Slayer",
      price: 40000,
      url: "https://wiki.mediviastats.info/images/3/32/Dragon_slayer.png",
      location: "Ziyad",
    },
    {
      name: "Hellforged Shield",
      price: 36000,
      url: "https://wiki.mediviastats.info/images/4/49/Hellforged_shield.png",
      location: "Ziyad",
    },
    {
      name: "Heavy Mace",
      price: 35000,
      url: "https://wiki.mediviastats.info/images/1/19/Heavy_Mace.png",
      location: "Ziyad",
    },
    {
      name: "Heavy Halberd",
      price: 35000,
      url: "https://wiki.mediviastats.info/images/9/93/Heavy_Halberd.png",
      location: "Ziyad",
    },
    {
      name: "Crystal Ring",
      price: 100,
      url: "https://wiki.mediviastats.info/images/7/76/Crystal_ring.gif",
      location: "Ziyad",
    },
    {
      name: "Steel Boots",
      price: 30000,
      url: "https://wiki.mediviastats.info/images/9/98/Steel_boots.png",
      location: "Ziyad",
    },
    {
      name: "Dragon Scale Mail",
      price: 30000,
      url: "https://wiki.mediviastats.info/images/f/fc/Dragon_scale_mail.png",
      location: "Ziyad",
    },
    {
      name: "Demon Shield",
      price: 30000,
      url: "https://wiki.mediviastats.info/images/e/ed/Demon_shield.png",
      location: "Ziyad",
    },
    {
      name: "Grim Legs",
      price: 30000,
      url: "https://wiki.mediviastats.info/images/4/46/Grim_Legs.png",
      location: "Ziyad",
    },
    {
      name: "Frozen Shield",
      price: 29000,
      url: "https://wiki.mediviastats.info/images/b/bc/Frozen_Shield.png",
      location: "Ziyad",
    },
    {
      name: "Bascinet",
      price: 24000,
      url: "https://wiki.mediviastats.info/images/7/7d/Bascinet.png",
      location: "Ziyad",
    },
    {
      name: "Imperial Soldier Legs",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/f/f0/Thaian_soldier_legs.png",
      location: "Ziyad",
    },
    {
      name: "Arming Sword",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/f/f2/Arming_sword.png",
      location: "Ziyad",
    },
    {
      name: "Golden Armor",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/4/4d/Golden_armor.png",
      location: "Ziyad",
    },
    {
      name: "Ring of the Sky",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/5/59/Ring_of_the_Sky.gif",
      location: "Ziyad",
    },
    {
      name: "Grim Boots",
      price: 10000,
      url: "https://wiki.mediviastats.info/images/d/df/Grimboots.png",
      location: "Ziyad",
    },
    {
      name: "Swinging Demolisher",
      price: 11000,
      url: "https://wiki.mediviastats.info/images/c/cf/Swinging_Demolisher.png",
      location: "Ziyad",
    },
    {
      name: "Bright Sword",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/0/06/Bright_sword.png",
      location: "Ziyad",
    },
    {
      name: "Gold Ring",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/8/8c/Transparent.png",
      location: "Ziyad",
    },
    {
      name: "Guardian Halberd",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/6/60/Guardian_halberd.png",
      location: "Ziyad",
    },
    {
      name: "Medusa Shield",
      price: 8000,
      url: "https://wiki.mediviastats.info/images/d/d1/Medusa_shield.png",
      location: "Ziyad",
    },
    {
      name: "The Stinger",
      price: 7000,
      url: "https://wiki.mediviastats.info/images/9/94/26416.png",
      location: "Ziyad",
    },
    {
      name: "Nether Shield",
      price: 6600,
      url: "https://wiki.mediviastats.info/images/2/28/Nether_shield.png",
      location: "Ziyad",
    },
    {
      name: "Shakirian Wand",
      price: 6000,
      url: "https://wiki.mediviastats.info/images/c/c0/Shakirian_Wand.gif",
      location: "Ziyad",
    },
    {
      name: "Imperial Soldier Armor",
      price: 5500,
      url:
        "https://wiki.mediviastats.info/images/0/0e/Thaian_soldier_armor.png",
      location: "Ziyad",
    },
    {
      name: "Light Sword",
      price: 4500,
      url: "https://wiki.mediviastats.info/images/a/a5/Light_Sword.png",
      location: "Ziyad",
    },
    {
      name: "Wand of Light",
      price: 4000,
      url: "https://wiki.mediviastats.info/images/1/1b/Wandoflight_plz.gif",
      location: "Ziyad",
    },
    {
      name: "Imperial Soldier Shield",
      price: 3000,
      url:
        "https://wiki.mediviastats.info/images/3/31/Thaian_soldier_shield.png",
      location: "Ziyad",
    },
    {
      name: "Platinum Amulet",
      price: 1500,
      url: "https://wiki.mediviastats.info/images/7/74/Platinum_amulet_new.png",
      location: "Ziyad",
    },
    {
      name: "Scarab Shield",
      price: 1500,
      url: "https://wiki.mediviastats.info/images/c/c3/Scarab_shield.png",
      location: "Ziyad",
    },
    {
      name: "Assassin Dagger",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/4/45/Assassin_Dagger.png",
      location: "Ziyad",
    },
    {
      name: "Shakirian Waraxe",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/d/d3/Shakirian_.png",
      location: "Ziyad",
    },
    {
      name: "Devil Helmet",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/4/4c/Devil_helmet.png",
      location: "Ziyad",
    },
    {
      name: "Mystic Turban",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/4/40/Mystic_turban.png",
      location: "Ziyad",
    },
    {
      name: "Smoking Pipe",
      price: 600,
      url: "https://wiki.mediviastats.info/images/d/df/Pipe.gif",
      location: "Ziyad",
    },
    {
      name: "Ancient Amulet",
      price: 500,
      url: "https://wiki.mediviastats.info/images/c/c6/Ancient_Amulet.gif",
      location: "Ziyad",
    },
    {
      name: "Scarab Amulet",
      price: 500,
      url: "https://wiki.mediviastats.info/images/6/6d/Scarab_amulet.png",
      location: "Ziyad",
    },
    {
      name: "Aquamarine",
      price: 350,
      url: "https://wiki.mediviastats.info/images/1/1b/Aquamarine.gif",
      location: "Ziyad",
    },
    {
      name: "Bone Shield",
      price: 100,
      url: "https://wiki.mediviastats.info/images/b/be/Bone_Shield.gif",
      location: "Ziyad",
    },
    {
      name: "Crystallized Shield",
      price: 16000,
      url: "https://wiki.mediviastats.info/images/c/ca/Crystallized_Shield.png",
      location: "Ziyad",
    },
    {
      name: "Ruby Necklace",
      price: 900,
      url: "https://wiki.mediviastats.info/images/e/e1/Ruby_Necklace.gif",
      location: "Ziyad",
    },
    {
      name: "Pirate Sabre",
      price: 95,
      url: "https://wiki.mediviastats.info/images/1/1c/Pirate_sabre.png",
      location: "Draculd",
    },
    {
      name: "Worn Out Pirate Tabard",
      price: 100,
      url:
        "https://wiki.mediviastats.info/images/4/4c/Worn_out_pirate_tabard.png",
      location: "Draculd",
    },
    {
      name: "Red Skirt",
      price: 150,
      url: "https://wiki.mediviastats.info/images/5/53/Redskirt.gif",
      location: "Draculd",
    },
    {
      name: "Worn Out Pirate Beater",
      price: 200,
      url:
        "https://wiki.mediviastats.info/images/f/f7/Worn_out_pirate_beater.png",
      location: "Draculd",
    },
    {
      name: "Cursed Gold Coin",
      price: 250,
      url: "https://wiki.mediviastats.info/images/d/d6/Cursed_Gold_Coin.gif",
      location: "Draculd",
    },
    {
      name: "Worn Out Pirate Cape",
      price: 250,
      url:
        "https://wiki.mediviastats.info/images/4/45/Worn_out_pirate_cape.png",
      location: "Draculd",
    },
    {
      name: "Frost Dagger",
      price: 800,
      url: "https://wiki.mediviastats.info/images/b/be/Frost_dagger.png",
      location: "Draculd",
    },
    {
      name: "Permafrost Longsword",
      price: 900,
      url:
        "https://wiki.mediviastats.info/images/b/bd/Permafrost_longsword.png",
      location: "Draculd",
    },
    {
      name: "Wendigo Staff",
      price: 900,
      url: "https://wiki.mediviastats.info/images/0/01/Wendigo_staff.png",
      location: "Draculd",
    },
    {
      name: "Alpha Wolf Tooth Chain",
      price: 1000,
      url:
        "https://wiki.mediviastats.info/images/2/2c/Alpha_wolf_tooth_chain.png",
      location: "Draculd",
    },
    {
      name: "Pirate Eye Patch",
      price: 1000,
      url: "https://wiki.mediviastats.info/images/1/11/Pirate_eye_patch.png",
      location: "Draculd",
    },
    {
      name: "Pirate Hand Hook",
      price: 1500,
      url: "https://wiki.mediviastats.info/images/c/c8/Pirate_hand_hook.png",
      location: "Draculd",
    },
    {
      name: "Permafrost Morningstar",
      price: 1600,
      url:
        "https://wiki.mediviastats.info/images/5/59/Permafrost_morningstar.png",
      location: "Draculd",
    },
    {
      name: "Plaguespreader Rod",
      price: 2000,
      url: "https://wiki.mediviastats.info/images/b/b9/Plaguespreader_rod.png",
      location: "Draculd",
    },
    {
      name: "Permafrost Crystal",
      price: 3000,
      url: "https://wiki.mediviastats.info/images/b/be/Permafrost_crystal.png",
      location: "Draculd",
    },
    {
      name: "Pirate Skull Belt",
      price: 3000,
      url: "https://wiki.mediviastats.info/images/3/36/Pirate_skull_belt.png",
      location: "Draculd",
    },
    {
      name: "Red Tunic",
      price: 5000,
      url: "https://wiki.mediviastats.info/images/3/3b/Fierytunic.png",
      location: "Draculd",
    },
    {
      name: "Permafrost Stone",
      price: 7000,
      url: "https://wiki.mediviastats.info/images/d/d1/Permafrost_stone.gif",
      location: "Draculd",
    },
    {
      name: "Soul Reaper",
      price: 7500,
      url: "https://wiki.mediviastats.info/images/9/9b/Soul_reaper.png",
      location: "Draculd",
    },
    {
      name: "Crystallized Sword",
      price: 10000,
      url: "https://wiki.mediviastats.info/images/2/2c/Crystallized_sword.png",
      location: "Draculd",
    },
    {
      name: "Crystallized Axe",
      price: 11000,
      url: "https://wiki.mediviastats.info/images/b/bc/Crystallized_Axe.png",
      location: "Draculd",
    },
    {
      name: "Crystallized Hammer",
      price: 13000,
      url: "https://wiki.mediviastats.info/images/6/66/Crystallized_Hammer.png",
      location: "Draculd",
    },
    {
      name: "Pirate Bandana",
      price: 15000,
      url: "https://wiki.mediviastats.info/images/7/73/Pirate_bandana.png",
      location: "Draculd",
    },
    {
      name: "Yellow Robe",
      price: 18000,
      url: "https://wiki.mediviastats.info/images/b/b6/Yellow_robe.png",
      location: "Draculd",
    },
    {
      name: "Golden Staff",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/4/4b/Golden_staff.png",
      location: "Draculd",
    },
    {
      name: "Fire Hammer",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/7/7b/Fire_Hammer.gif",
      location: "Draculd",
    },
    {
      name: "Pirate Hat",
      price: 20000,
      url: "https://wiki.mediviastats.info/images/8/80/Pirate_hat.png",
      location: "Draculd",
    },
    {
      name: "Permafrost Robe",
      price: 26000,
      url: "https://wiki.mediviastats.info/images/6/68/Permafrost_robe.png",
      location: "Draculd",
    },
    {
      name: "Plaguespreader Robe",
      price: 26000,
      url: "https://wiki.mediviastats.info/images/f/fb/Plaguespreader_robe.png",
      location: "Draculd",
    },
    {
      name: "Lightbringer Helmet",
      price: 40000,
      url: "https://wiki.mediviastats.info/images/3/38/Lightbringer_helmet.png",
      location: "Draculd",
    },
  ],
};

export default allItems;
