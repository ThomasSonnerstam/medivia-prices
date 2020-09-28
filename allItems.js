const allItems = 
  {
    items: [
      { name: "Halberd", price: 400, url: "https://wiki.mediviastats.info/images/1/12/Halberd.png", location: "Arak" },
      { name: "Brass armor", price: 150, url: "https://wiki.mediviastats.info/images/b/b6/Brass_armor.png", location: "Arak" },
      { name: "Battle hammer", price: 120, url: "https://wiki.mediviastats.info/images/5/5d/Battle_hammer.png", location: "Arak" },
      { name: "Plate armor", price: 400, url: "https://wiki.mediviastats.info/images/9/9b/Plate_armor.png", location: "Arak" },
      { name: "Steel shield", price: 80, url: "https://wiki.mediviastats.info/images/b/bc/Steel_shield.png", location: "Arak" },
      { name: "Battle shield", price: 95, url: "https://wiki.mediviastats.info/images/6/67/Battle_shield.png" , location: "Arak"},
      { name: "Two handed sword", price: 450, url: "https://wiki.mediviastats.info/images/2/2f/Two_handed_sword.png", location: "Arak" },
      { name: "Double axe", price: 260, url: "https://wiki.mediviastats.info/images/2/25/Double_axe.png", location: "Osaris" },
      { name: "Steel helmet", price: 293, url: "https://wiki.mediviastats.info/images/f/f2/Steel_helmet.png", location: "Osaris" },
      { name: "Morning star", price: 100, url: "https://wiki.mediviastats.info/images/f/fd/Morning_star.png", location: "Osaris" },
      { name: "Clerical mace", price: 170, url: "https://wiki.mediviastats.info/images/a/a3/Clerical_mace.png", location: "Garrogat" },
      { name: "Crystal ball", price: 190, url: "https://wiki.mediviastats.info/images/9/91/Crystal_ball.png", location: "Garrogat" },
      { name: "Mind stone", price: 170, url: "https://wiki.mediviastats.info/images/5/50/150.gif", location: "Garrogat" },
      { name: "Iron helmet", price: 150, url: "https://wiki.mediviastats.info/images/8/8d/Iron_helmet.png", location: "Garrogat" },
      { name: "Viking shield", price: 85, url: "https://wiki.mediviastats.info/images/e/eb/Viking_shield.png", location: "Garrogat" },
      { name: "Plate legs", price: 115, url: "https://wiki.mediviastats.info/images/b/b9/Plate_legs.png", location: "Lucindel" },
      { name: "Dwarven shield", price: 100, url: "https://wiki.mediviastats.info/images/9/91/Dwarven_shield.png", location: "Mittenhoff" },
      { name: "Dragon lance", price: 9000, url: "https://wiki.mediviastats.info/images/6/67/Dragon_lance.png", location: "Blue djinn" },
      { name: "Fire axe", price: 8000, url: "https://wiki.mediviastats.info/images/3/39/Fire_axe.gif", location: "Blue djinn" },
      { name: "Fire sword", price: 4000, url: "https://wiki.mediviastats.info/images/6/6a/Fire-sword.gif", location: "Blue djinn" },
      { name: "War hammer", price: 1200, url: "https://wiki.mediviastats.info/images/a/ab/War_hammer.png", location: "Blue djinn" },
      { name: "Spike sword", price: 1000, url: "https://wiki.mediviastats.info/images/f/f6/Spike_sword.png", location: "Blue djinn" },
      { name: "Ice rapier", price: 1000, url: "https://wiki.mediviastats.info/images/2/28/Ice_rapier.png", location: "Blue djinn" },
      { name: "Broad sword", price: 500, url: "https://wiki.mediviastats.info/images/9/91/102.gif", location: "Blue djinn" },
      { name: "Obsidian lance", price: 500, url: "https://wiki.mediviastats.info/images/b/bb/Obsidian_lance.png", location: "Blue djinn" },
      { name: "Crown armor", price: 12000, url: "https://wiki.mediviastats.info/images/d/d5/Crown_armor.png", location: "Blue djinn" },
      { name: "Blue robe", price: 10000, url: "https://wiki.mediviastats.info/images/7/70/Blue_robe.png", location: "Blue djinn" },
      { name: "Noble armor", price: 900, url: "https://wiki.mediviastats.info/images/9/9d/Noble_armor.png", location: "Blue djinn" },
      { name: "Royal helmet", price: 30000, url: "https://wiki.mediviastats.info/images/0/0c/Royal_helmet.png", location: "Blue djinn" },
      { name: "Crusader helmet", price: 6000, url: "https://wiki.mediviastats.info/images/e/e9/Crusader_helmet.png", location: "Blue djinn" },
      { name: "Crown helmet", price: 2500, url: "https://wiki.mediviastats.info/images/7/7e/Crown_helmet.png", location: "Blue djinn" },
      { name: "Crown legs", price: 12000, url: "https://wiki.mediviastats.info/images/d/d8/Crown_legs.png", location: "Blue djinn" },
      { name: "Scorpid hood", price: 2300, url: "https://wiki.mediviastats.info/images/e/ec/Scorpid_hood.png", location: "Blue djinn" },
      { name: "Boots of haste", price: 30000, url: "https://wiki.mediviastats.info/images/f/f3/Boots_of_haste.png", location: "Blue djinn" },
      { name: "Phoenix shield", price: 16000, url: "https://wiki.mediviastats.info/images/f/ff/853.gif", location: "Blue djinn" },
      { name: "Crown shield", price: 8000, url: "https://wiki.mediviastats.info/images/4/47/Crown_shield.png", location: "Blue djinn" },
      { name: "Dragon shield", price: 4000, url: "https://wiki.mediviastats.info/images/b/b9/Dragon_shield.png", location: "Blue djinn" },
      { name: "Guardian shield", price: 2000, url: "https://wiki.mediviastats.info/images/8/83/Guardian_shield.png", location: "Blue djinn" },
      { name: "Watcher shield", price: 1200, url: "", location: "Blue djinn" },
      { name: "Red spellwand", price: 5000, url: "https://wiki.mediviastats.info/images/1/1d/Red_Spellwand.gif", location: "Blue djinn" },
      { name: "Blue spellwand", price: 5000, url: "https://wiki.mediviastats.info/images/f/fa/Blue_Spellwand.gif", location: "Blue djinn" },
      { name: "Green spellwand", price: 5000, url: "https://wiki.mediviastats.info/images/0/08/Green_Spellwand.gif", location: "Blue djinn" },
      { name: "Scimitar", price: 150, url: "https://wiki.mediviastats.info/images/e/e5/Scimitar.png", location: "Green djinn" },
      { name: "Giant sword", price: 17000, url: "https://wiki.mediviastats.info/images/c/cd/Giant_sword.png", location: "Green djinn" },
      { name: "Serpent sword", price: 900, url: "https://wiki.mediviastats.info/images/a/a5/Serpent_sword.png", location: "Green djinn" },
      { name: "Poison dagger", price: 50, url: "https://wiki.mediviastats.info/images/b/b6/Poison_dagger.png", location: "Green djinn" },
      { name: "Knight axe", price: 2000, url: "https://wiki.mediviastats.info/images/5/55/Knight_axe.png", location: "Green djinn" },
      { name: "Dragon hammer", price: 2000, url: "https://wiki.mediviastats.info/images/9/9b/Dragon_hammer.png", location: "Green djinn" },
      { name: "Skull staff", price: 6000, url: "https://wiki.mediviastats.info/images/5/54/Skull_Staff.gif", location: "Green djinn" },
      { name: "Dark armor", price: 400, url: "https://wiki.mediviastats.info/images/2/2e/Dark_armor.png", location: "Green djinn" },
      { name: "Dark shield", price: 166, url: "https://wiki.mediviastats.info/images/e/e6/Dark_shield.png" , location: "Green djinn"},
      { name: "Knight armor", price: 5000, url: "https://wiki.mediviastats.info/images/e/e5/Knight_armor.png", location: "Green djinn" },
      { name: "Dark helmet", price: 250, url: "https://wiki.mediviastats.info/images/f/f7/Dark_helmet.png", location: "Green djinn" },
      { name: "Knight helmet", price: 2500, url: "https://wiki.mediviastats.info/images/8/82/Knight_helmet.png", location: "Green djinn" },
      { name: "Warrior helmet", price: 5000, url: "https://wiki.mediviastats.info/images/e/e9/Warrior_helmet.png", location: "Green djinn" },
      { name: "Strange helmet", price: 500, url: "https://wiki.mediviastats.info/images/c/c7/Strange_helmet.png", location: "Green djinn" },
      { name: "Spider silk armor", price: 2000, url: "https://wiki.mediviastats.info/images/e/e0/6787.png" , location: "Green djinn"},
      { name: "Knight legs", price: 5000, url: "https://wiki.mediviastats.info/images/f/f3/Knight_legs.png", location: "Green djinn" },
      { name: "Tower shield", price: 8000, url: "https://wiki.mediviastats.info/images/5/56/Tower_shield.png", location: "Green djinn" },
      { name: "Black shield", price: 800, url: "https://wiki.mediviastats.info/images/1/14/Black_shield.png", location: "Green djinn" },
      { name: "Ancient shield", price: 900, url: "https://wiki.mediviastats.info/images/e/ec/66.gif", location: "Green djinn" },
      { name: "Vampire shield", price: 15000, url: "https://wiki.mediviastats.info/images/1/1e/Vampire_shield.png", location: "Green djinn" },
      { name: "Chaos shield", price: 500000, url: "https://wiki.mediviastats.info/images/4/45/Chaos_shield.gif", location: "Wulkan" },
      { name: "Magic plate armor", price: 200000, url: "https://wiki.mediviastats.info/images/7/70/Magic_plate_armor_new.png", location: "Wulkan" },
      { name: "Red scale armor", price: 190000, url: "https://wiki.mediviastats.info/images/8/8e/Red_scale_armor.png", location: "Wulkan" },
      { name: "Demon armor", price: 150000, url: "https://wiki.mediviastats.info/images/6/6b/Demon_armor.png", location: "Wulkan" },
      { name: "Magic sword", price: 150000, url: "https://wiki.mediviastats.info/images/7/71/Magic_sword.png", location: "Wulkan" },
      { name: "Stonecutter axe", price: 150000, url: "https://wiki.mediviastats.info/images/a/a6/772.gif", location: "Wulkan" },
      { name: "Void staff", price: 150000, url: "https://wiki.mediviastats.info/images/b/b2/Void_Staff.png", location: "Wulkan" },
      { name: "Vanquisher", price: 100000, url: "https://wiki.mediviastats.info/images/4/4d/Vanquisher.png", location: "Wulkan" },
      { name: "Ancient armor", price: 75000, url: "https://wiki.mediviastats.info/images/7/7b/Ancient_Armor.png", location: "Wulkan" },
      { name: "Demonbone legs", price: 60000, url: "https://wiki.mediviastats.info/images/7/70/Demonbone_legs.png", location: "Wulkan" },
      { name: "Golden legs", price: 50000, url: "https://wiki.mediviastats.info/images/3/32/Golden_legs.png", location: "Wulkan" },
      { name: "Mastermind shield", price: 50000, url: "https://wiki.mediviastats.info/images/8/8b/Mastermind_shield.png", location: "Wulkan" },
      { name: "Ancient legs", price: 45000, url: "https://wiki.mediviastats.info/images/5/5a/Ancient_Legs.png", location: "Wulkan" },
      { name: "Demon helmet", price: 45000, url: "https://wiki.mediviastats.info/images/f/fc/Demon_helmet.png", location: "Wulkan" },
      { name: "Ancient helmet", price: 42000, url: "https://wiki.mediviastats.info/images/e/e8/Ancient_Helmet.png", location: "Wulkan" },
      { name: "Ancient sword", price: 40000, url: "https://wiki.mediviastats.info/images/1/19/Ancinet_Sword.png", location: "Wulkan" },
      { name: "Demonbone armor", price: 40000, url: "https://wiki.mediviastats.info/images/5/59/Demonbone_armor.png", location: "Wulkan" },
      { name: "Helmet of the fallen king", price: 40000, url: "https://wiki.mediviastats.info/images/a/a0/Helmet_of_the_fallen_king.png", location: "Wulkan" },
      { name: "Hellforged shield", price: 36000, url: "https://wiki.mediviastats.info/images/4/49/Hellforged_shield.png", location: "Wulkan" },
      { name: "Shakirian blade", price: 35000, url: "https://wiki.mediviastats.info/images/d/d5/Shakirian_Blade.gif", location: "Wulkan" },
      { name: "Royal plate armor", price: 35000, url: "https://wiki.mediviastats.info/images/e/ed/Royal_Plate_Armor_NEW.png", location: "Wulkan" },
      { name: "Silver mace", price: 16500, url: "https://wiki.mediviastats.info/images/c/ce/Silver_Mace.png", location: "Wulkan" },
      { name: "Unholy plate armor", price: 15000, url: "https://wiki.mediviastats.info/images/8/80/Unholy_plate_armor.png", location: "Wulkan" },
      { name: "Crown boots", price: 12000, url: "https://wiki.mediviastats.info/images/3/3c/Crown_boots.png", location: "Wulkan" },
      { name: "Demonbone boots", price: 14000, url: "https://wiki.mediviastats.info/images/6/6f/Demonbone_boots.png", location: "Wulkan" },
      { name: "Light armor", price: 13000, url: "https://wiki.mediviastats.info/images/0/04/Light_armor.png", location: "Wulkan" },
      { name: "Torn quicksand boots", price: 10000, url: "https://wiki.mediviastats.info/images/1/15/Torn_quicksand_boots.png", location: "Wulkan" },
      { name: "Demonbone helmet", price: 9000, url: "https://wiki.mediviastats.info/images/b/b3/Demonbone_helmet.png", location: "Wulkan" },
      { name: "Fiery armor", price: 7500, url: "https://wiki.mediviastats.info/images/c/c9/Fieryarmor.png", location: "Wulkan" },
      { name: "Fiery helmet", price: 7500, url: "https://wiki.mediviastats.info/images/e/e1/Fieryhelmet%28transparent%29.png", location: "Wulkan" },
      { name: "Assassin blade", price: 6300, url: "https://wiki.mediviastats.info/images/c/cf/Assassin_Blade.png", location: "Wulkan" },
      { name: "Bone basher", price: 5500, url: "https://wiki.mediviastats.info/images/7/77/Bone_Basher.png", location: "Wulkan" },
      { name: "Unholy halberd", price: 5500, url: "https://wiki.mediviastats.info/images/0/01/Unholy_Halberd.png", location: "Wulkan" },
      { name: "Ancient boots", price: 5000, url: "https://wiki.mediviastats.info/images/2/2e/Ancient_boots.png", location: "Wulkan" },
      { name: "Shakirian shield", price: 3000, url: "https://wiki.mediviastats.info/images/9/9b/Shakirian_shield1.png", location: "Wulkan" },
      { name: "Wooden maul", price: 2000, url: "https://wiki.mediviastats.info/images/e/ee/Wooden_Maul.png", location: "Wulkan" },
      { name: "Drake scale helmet", price: 850, url: "https://wiki.mediviastats.info/images/8/82/Drake_scale_helmet.png", location: "Wulkan" },
      { name: "Soul dagger", price: 200, url: "https://wiki.mediviastats.info/images/1/10/Soul_dagger.png", location: "Wulkan" },
      { name: "Flaming bow", price: 18000, url: "https://wiki.mediviastats.info/images/1/19/Flaming_Bow.gif", location: "Aremis" },
      { name: "Poisoned bow", price: 16000, url: "https://wiki.mediviastats.info/images/6/65/Poisoned_Bow.png", location: "Aremis" },
      { name: "Bow", price: 130, url: "https://wiki.mediviastats.info/images/a/ad/Bow.gif", location: "Aremis" },
      { name: "Elven bow", price: 500, url: "https://wiki.mediviastats.info/images/3/3b/Elven_Bow.png", location: "Aremis" },
      { name: "Hunting bow", price: 1000, url: "https://wiki.mediviastats.info/images/8/80/Hunting_Bow.png", location: "Aremis" },
      { name: "Shakirian bow", price: 32000, url: "https://wiki.mediviastats.info/images/7/76/Shakirian_Bow.gif", location: "Aremis" },
      { name: "Crossbow", price: 160, url: "https://wiki.mediviastats.info/images/7/79/Crossbow.png", location: "Aremis" },
      { name: "Blazing crossbow", price: 70000, url: "https://wiki.mediviastats.info/images/6/69/Blazing-Crossbow_zpsc86a5833.gif", location: "Aremis" },
      { name: "Enhanced crossbow", price: 24000, url: "https://wiki.mediviastats.info/images/6/62/Enhanced_Crossbow.png", location: "Aremis" },
      { name: "Ignited bow", price: 5000, url: "https://wiki.mediviastats.info/images/8/85/Ignitedbow.gif", location: "Aremis" },
      { name: "Fiery bow", price: 46000, url: "https://wiki.mediviastats.info/images/0/0a/Fiery_Bow.gif", location: "Aremis" },
      { name: "Crystallized crossbow", price: 55000, url: "https://wiki.mediviastats.info/images/4/44/Crystallized_Crossbow.gif", location: "Aremis" },
      { name: "Envenomed crossbow", price: 65000, url: "https://wiki.mediviastats.info/images/f/fd/Envenomed_Crossbow.png", location: "Aremis" },
      { name: "Elven crossbow", price: 7500, url: "https://wiki.mediviastats.info/images/9/9d/Viperxbow.png", location: "Aremis" },
      { name: "Mercenary sword", price: 45000, url: "https://wiki.mediviastats.info/images/1/1c/Mercenary_Sword.png", location: "Ziyad" },
      { name: "Dragon slayer", price: 40000, url: "https://wiki.mediviastats.info/images/3/32/Dragon_slayer.png", location: "Ziyad" },
      { name: "Hellforged shield", price: 36000 , url: "https://wiki.mediviastats.info/images/4/49/Hellforged_shield.png", location: "Ziyad" },
      { name: "Heavy mace", price: 35000 , url: "https://wiki.mediviastats.info/images/1/19/Heavy_Mace.png", location: "Ziyad"},
      { name: "Heavy halberd", price: 35000 , url: "https://wiki.mediviastats.info/images/9/93/Heavy_Halberd.png", location: "Ziyad"},
      { name: "Crystal ring", price: 100 , url: "https://wiki.mediviastats.info/images/7/76/Crystal_ring.gif", location: "Ziyad"},
      { name: "Steel boots", price: 30000 , url: "https://wiki.mediviastats.info/images/9/98/Steel_boots.png", location: "Ziyad"},
      { name: "Dragon scale mail", price: 30000 , url: "https://wiki.mediviastats.info/images/f/fc/Dragon_scale_mail.png", location: "Ziyad"},
      { name: "Demon shield", price: 30000, url: "https://wiki.mediviastats.info/images/e/ed/Demon_shield.png", location: "Ziyad" },
      { name: "Grim legs", price: 30000, url: "https://wiki.mediviastats.info/images/4/46/Grim_Legs.png", location: "Ziyad" },
      { name: "Frozen shield", price: 29000, url: "https://wiki.mediviastats.info/images/b/bc/Frozen_Shield.png" , location: "Ziyad"},
      { name: "Bascinet", price: 24000, url: "https://wiki.mediviastats.info/images/7/7d/Bascinet.png" , location: "Ziyad"},
      { name: "Imperial soldier legs", price: 20000, url: "https://wiki.mediviastats.info/images/f/f0/Thaian_soldier_legs.png", location: "Ziyad" },
      { name: "Arming sword", price: 20000 , url: "https://wiki.mediviastats.info/images/f/f2/Arming_sword.png", location: "Ziyad"},
      { name: "Golden armor", price: 20000, url: "https://wiki.mediviastats.info/images/4/4d/Golden_armor.png", location: "Ziyad" },
      { name: "Ring of the sky", price: 20000, url: "https://wiki.mediviastats.info/images/5/59/Ring_of_the_Sky.gif", location: "Ziyad" },
      { name: "Grim boots", price: 10000 , url: "https://wiki.mediviastats.info/images/d/df/Grimboots.png", location: "Ziyad"},
      { name: "Swinging demolisher", price: 11000 , url: "https://wiki.mediviastats.info/images/c/cf/Swinging_Demolisher.png", location: "Ziyad"},
      { name: "Bright sword", price: 8000 , url: "https://wiki.mediviastats.info/images/0/06/Bright_sword.png", location: "Ziyad"},
      { name: "Gold ring", price: 8000, url: "https://wiki.mediviastats.info/images/8/8c/Transparent.png" , location: "Ziyad"},
      { name: "Guardian halberd", price: 8000, url: "https://wiki.mediviastats.info/images/6/60/Guardian_halberd.png" , location: "Ziyad"},
      { name: "Medusa shield", price: 8000, url: "https://wiki.mediviastats.info/images/d/d1/Medusa_shield.png", location: "Ziyad" },
      { name: "The stinger", price: 7000 , url: "https://wiki.mediviastats.info/images/9/94/26416.png", location: "Ziyad"},
      { name: "Nether shield", price: 6600, url: "https://wiki.mediviastats.info/images/2/28/Nether_shield.png" , location: "Ziyad"},
      { name: "Shakirian wand", price: 6000 , url: "https://wiki.mediviastats.info/images/c/c0/Shakirian_Wand.gif", location: "Ziyad"},
      { name: "Imperial soldier armor", price: 5500, url: "https://wiki.mediviastats.info/images/0/0e/Thaian_soldier_armor.png", location: "Ziyad" },
      { name: "Light sword", price: 4500 , url: "https://wiki.mediviastats.info/images/a/a5/Light_Sword.png", location: "Ziyad"},
      { name: "Wand of light", price: 4000 , url: "https://wiki.mediviastats.info/images/1/1b/Wandoflight_plz.gif", location: "Ziyad"},
      { name: "Imperial soldier shield", price: 3000, url: "https://wiki.mediviastats.info/images/3/31/Thaian_soldier_shield.png", location: "Ziyad" },
      { name: "Platinum amulet", price: 1500, url: "https://wiki.mediviastats.info/images/7/74/Platinum_amulet_new.png", location: "Ziyad" },
      { name: "Scarab shield", price: 1500, url: "https://wiki.mediviastats.info/images/c/c3/Scarab_shield.png" , location: "Ziyad"},
      { name: "Assassin dagger", price: 1000, url: "https://wiki.mediviastats.info/images/4/45/Assassin_Dagger.png" , location: "Ziyad"},
      { name: "Shakirian waraxe", price: 1000, url: "https://wiki.mediviastats.info/images/d/d3/Shakirian_.png", location: "Ziyad" },
      { name: "Devil helmet", price: 1000 , url: "https://wiki.mediviastats.info/images/4/4c/Devil_helmet.png", location: "Ziyad"},
      { name: "Mystic turban", price: 1000, url: "https://wiki.mediviastats.info/images/4/40/Mystic_turban.png", location: "Ziyad" },
      { name: "Smoking pipe", price: 600, url: "https://wiki.mediviastats.info/images/d/df/Pipe.gif" , location: "Ziyad"},
      { name: "Ancient amulet", price: 500, url: "https://wiki.mediviastats.info/images/c/c6/Ancient_Amulet.gif", location: "Ziyad" },
      { name: "Scarab amulet", price: 500, url: "https://wiki.mediviastats.info/images/6/6d/Scarab_amulet.png", location: "Ziyad" },
      { name: "Aquamarine", price: 350, url: "https://wiki.mediviastats.info/images/1/1b/Aquamarine.gif", location: "Ziyad" },
      { name: "Bone shield", price: 100 , url: "https://wiki.mediviastats.info/images/b/be/Bone_Shield.gif", location: "Ziyad"},
      { name: "Crystallized shield", price: 16000, url: "https://wiki.mediviastats.info/images/c/ca/Crystallized_Shield.png", location: "Ziyad" },
      { name: "Ruby necklace", price: 900, url: "https://wiki.mediviastats.info/images/e/e1/Ruby_Necklace.gif", location: "Ziyad" },
      { name: "Pirate sabre", price: 95, url: "https://wiki.mediviastats.info/images/1/1c/Pirate_sabre.png", location: "Draculd" },
      { name: "Worn out pirate tabard", price: 100, url: "https://wiki.mediviastats.info/images/4/4c/Worn_out_pirate_tabard.png", location: "Draculd" },
      { name: "Red skirt", price: 150, url: "https://wiki.mediviastats.info/images/5/53/Redskirt.gif", location: "Draculd" },
      { name: "Worn out pirate beater", price: 200, url: "https://wiki.mediviastats.info/images/f/f7/Worn_out_pirate_beater.png", location: "Draculd" },
      { name: "Cursed gold coin", price: 250, url: "https://wiki.mediviastats.info/images/d/d6/Cursed_Gold_Coin.gif", location: "Draculd" },
      { name: "Worn out pirate cape", price: 250, url: "https://wiki.mediviastats.info/images/4/45/Worn_out_pirate_cape.png", location: "Draculd" },
      { name: "Frost dagger", price: 800, url: "https://wiki.mediviastats.info/images/b/be/Frost_dagger.png", location: "Draculd" },
      { name: "Permafrost longsword", price: 900, url: "https://wiki.mediviastats.info/images/b/bd/Permafrost_longsword.png", location: "Draculd" },
      { name: "Wendigo staff", price: 900 , url: "https://wiki.mediviastats.info/images/0/01/Wendigo_staff.png", location: "Draculd"},
      { name: "Alpha wolf tooth chain", price: 1000, url: "https://wiki.mediviastats.info/images/2/2c/Alpha_wolf_tooth_chain.png", location: "Draculd" },
      { name: "Pirate eye patch", price: 1000, url: "https://wiki.mediviastats.info/images/1/11/Pirate_eye_patch.png", location: "Draculd" },
      { name: "Pirate hand hook", price: 1500, url: "https://wiki.mediviastats.info/images/c/c8/Pirate_hand_hook.png", location: "Draculd" },
      { name: "Permafrost morningstar", price: 1600 , url: "https://wiki.mediviastats.info/images/5/59/Permafrost_morningstar.png", location: "Draculd"},
      { name: "Plaguespreader rod", price: 2000, url: "https://wiki.mediviastats.info/images/b/b9/Plaguespreader_rod.png", location: "Draculd" },
      { name: "Permafrost crystal", price: 3000, url: "https://wiki.mediviastats.info/images/b/be/Permafrost_crystal.png", location: "Draculd" },
      { name: "Pirate skull belt", price: 3000, url: "https://wiki.mediviastats.info/images/3/36/Pirate_skull_belt.png", location: "Draculd" },
      { name: "Red tunic", price: 5000, url: "https://wiki.mediviastats.info/images/3/3b/Fierytunic.png", location: "Draculd" },
      { name: "Permafrost stone", price: 7000, url: "https://wiki.mediviastats.info/images/d/d1/Permafrost_stone.gif", location: "Draculd" },
      { name: "Soul reaper", price: 7500, url: "https://wiki.mediviastats.info/images/9/9b/Soul_reaper.png", location: "Draculd" },
      { name: "Crystallized sword", price: 10000 , url: "https://wiki.mediviastats.info/images/2/2c/Crystallized_sword.png", location: "Draculd"},
      { name: "Crystallized axe", price: 11000, url: "https://wiki.mediviastats.info/images/b/bc/Crystallized_Axe.png", location: "Draculd" },
      { name: "Crystallized hammer", price: 13000, url: "https://wiki.mediviastats.info/images/6/66/Crystallized_Hammer.png", location: "Draculd" },
      { name: "Pirate bandana", price: 15000, url: "https://wiki.mediviastats.info/images/7/73/Pirate_bandana.png", location: "Draculd" },
      { name: "Yellow robe", price: 18000, url: "https://wiki.mediviastats.info/images/b/b6/Yellow_robe.png", location: "Draculd" },
      { name: "Golden staff", price: 20000, url: "https://wiki.mediviastats.info/images/4/4b/Golden_staff.png", location: "Draculd" },
      { name: "Fire hammer", price: 20000, url: "https://wiki.mediviastats.info/images/7/7b/Fire_Hammer.gif", location: "Draculd" },
      { name: "Pirate hat", price: 20000, url: "https://wiki.mediviastats.info/images/8/80/Pirate_hat.png", location: "Draculd" },
      { name: "Permafrost robe", price: 26000, url: "https://wiki.mediviastats.info/images/6/68/Permafrost_robe.png", location: "Draculd" },
      { name: "Plaguespreader robe", price: 26000, url: "https://wiki.mediviastats.info/images/f/fb/Plaguespreader_robe.png", location: "Draculd" },
      { name: "Lightbringer helmet", price: 40000 , url: "https://wiki.mediviastats.info/images/3/38/Lightbringer_helmet.png", location: "Draculd"},
    ]
  }

  export default allItems;