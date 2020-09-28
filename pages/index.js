import { Fragment, useState } from "react";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import List from "../components/List/List";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";
import Layout from "../components/Layout/Layout";

const App = () => {

  const [selected, setSelected] = useState("arak");

  const location = 
  {
    arak: [
      { name: "Halberd", price: 400, url: "https://wiki.mediviastats.info/images/1/12/Halberd.png" },
      { name: "Brass armor", price: 150, url: "https://wiki.mediviastats.info/images/b/b6/Brass_armor.png" },
      { name: "Battle hammer", price: 120, url: "https://wiki.mediviastats.info/images/5/5d/Battle_hammer.png" },
      { name: "Plate armor", price: 400, url: "https://wiki.mediviastats.info/images/9/9b/Plate_armor.png" },
      { name: "Steel shield", price: 80, url: "https://wiki.mediviastats.info/images/b/bc/Steel_shield.png" },
      { name: "Battle shield", price: 95, url: "https://wiki.mediviastats.info/images/6/67/Battle_shield.png" },
      { name: "Two handed sword", price: 450, url: "https://wiki.mediviastats.info/images/2/2f/Two_handed_sword.png" }
    ],
    osaris: [
      { name: "Double axe", price: 260, url: "https://wiki.mediviastats.info/images/2/25/Double_axe.png" },
      { name: "Steel helmet", price: 293, url: "https://wiki.mediviastats.info/images/f/f2/Steel_helmet.png" },
      { name: "Morning star", price: 100, url: "https://wiki.mediviastats.info/images/f/fd/Morning_star.png" },
    ],
    garrogat: [
      { name: "Clerical mace", price: 170, url: "https://wiki.mediviastats.info/images/a/a3/Clerical_mace.png" },
      { name: "Crystal ball", price: 190, url: "https://wiki.mediviastats.info/images/9/91/Crystal_ball.png" },
      { name: "Mind stone", price: 170, url: "https://wiki.mediviastats.info/images/5/50/150.gif" },
      { name: "Iron helmet", price: 150, url: "https://wiki.mediviastats.info/images/8/8d/Iron_helmet.png" },
      { name: "Viking shield", price: 85, url: "https://wiki.mediviastats.info/images/e/eb/Viking_shield.png" },
    ],
    lucindel: [
      { name: "Plate legs", price: 115, url: "https://wiki.mediviastats.info/images/b/b9/Plate_legs.png" },
    ],
    mittenhoff: [
      { name: "Dwarven shield", price: 100, url: "https://wiki.mediviastats.info/images/9/91/Dwarven_shield.png" }
    ],
    bluedjinn: [
      { name: "Dragon lance", price: 9000, url: "https://wiki.mediviastats.info/images/6/67/Dragon_lance.png" },
      { name: "Fire axe", price: 8000, url: "https://wiki.mediviastats.info/images/3/39/Fire_axe.gif" },
      { name: "Fire sword", price: 4000, url: "https://wiki.mediviastats.info/images/6/6a/Fire-sword.gif" },
      { name: "War hammer", price: 1200, url: "https://wiki.mediviastats.info/images/a/ab/War_hammer.png" },
      { name: "Spike sword", price: 1000, url: "https://wiki.mediviastats.info/images/f/f6/Spike_sword.png" },
      { name: "Ice rapier", price: 1000, url: "https://wiki.mediviastats.info/images/2/28/Ice_rapier.png" },
      { name: "Broad sword", price: 500, url: "https://wiki.mediviastats.info/images/9/91/102.gif" },
      { name: "Obsidian lance", price: 500, url: "https://wiki.mediviastats.info/images/b/bb/Obsidian_lance.png" },
      { name: "Crown armor", price: 12000, url: "https://wiki.mediviastats.info/images/d/d5/Crown_armor.png" },
      { name: "Blue robe", price: 10000, url: "https://wiki.mediviastats.info/images/7/70/Blue_robe.png" },
      { name: "Noble armor", price: 900, url: "https://wiki.mediviastats.info/images/9/9d/Noble_armor.png" },
      { name: "Royal helmet", price: 30000, url: "https://wiki.mediviastats.info/images/0/0c/Royal_helmet.png" },
      { name: "Crusader helmet", price: 6000, url: "https://wiki.mediviastats.info/images/e/e9/Crusader_helmet.png" },
      { name: "Crown helmet", price: 2500, url: "https://wiki.mediviastats.info/images/7/7e/Crown_helmet.png" },
      { name: "Crown legs", price: 12000, url: "https://wiki.mediviastats.info/images/d/d8/Crown_legs.png" },
      { name: "Scorpid hood", price: 2300, url: "https://wiki.mediviastats.info/images/e/ec/Scorpid_hood.png" },
      { name: "Boots of haste", price: 30000, url: "https://wiki.mediviastats.info/images/f/f3/Boots_of_haste.png" },
      { name: "Phoenix shield", price: 16000, url: "https://wiki.mediviastats.info/images/f/ff/853.gif" },
      { name: "Crown shield", price: 8000, url: "https://wiki.mediviastats.info/images/4/47/Crown_shield.png" },
      { name: "Dragon shield", price: 4000, url: "https://wiki.mediviastats.info/images/b/b9/Dragon_shield.png" },
      { name: "Guardian shield", price: 2000, url: "https://wiki.mediviastats.info/images/8/83/Guardian_shield.png" },
      { name: "Watcher shield", price: 1200, url: "" },
    ],
    greendjinn: [
      { name: "Scimitar", price: 150, url: "https://wiki.mediviastats.info/images/e/e5/Scimitar.png" },
      { name: "Giant sword", price: 17000, url: "https://wiki.mediviastats.info/images/c/cd/Giant_sword.png" },
      { name: "Serpent sword", price: 900, url: "https://wiki.mediviastats.info/images/a/a5/Serpent_sword.png" },
      { name: "Poison dagger", price: 50, url: "https://wiki.mediviastats.info/images/b/b6/Poison_dagger.png" },
      { name: "Knight axe", price: 2000, url: "https://wiki.mediviastats.info/images/5/55/Knight_axe.png" },
      { name: "Dragon hammer", price: 2000, url: "https://wiki.mediviastats.info/images/9/9b/Dragon_hammer.png" },
      { name: "Skull staff", price: 6000, url: "https://wiki.mediviastats.info/images/5/54/Skull_Staff.gif" },
      { name: "Dark armor", price: 400, url: "https://wiki.mediviastats.info/images/2/2e/Dark_armor.png" },
      { name: "Dark shield", price: 166, url: "https://wiki.mediviastats.info/images/e/e6/Dark_shield.png" },
      { name: "Knight armor", price: 5000, url: "https://wiki.mediviastats.info/images/e/e5/Knight_armor.png" },
      { name: "Dark helmet", price: 250, url: "https://wiki.mediviastats.info/images/f/f7/Dark_helmet.png" },
      { name: "Knight helmet", price: 2500, url: "https://wiki.mediviastats.info/images/8/82/Knight_helmet.png" },
      { name: "Warrior helmet", price: 5000, url: "https://wiki.mediviastats.info/images/e/e9/Warrior_helmet.png" },
      { name: "Strange helmet", price: 500, url: "https://wiki.mediviastats.info/images/c/c7/Strange_helmet.png" },
      { name: "Spider silk armor", price: 2000, url: "https://wiki.mediviastats.info/images/e/e0/6787.png" },
      { name: "Knight legs", price: 5000, url: "https://wiki.mediviastats.info/images/f/f3/Knight_legs.png" },
      { name: "Tower shield", price: 8000, url: "https://wiki.mediviastats.info/images/5/56/Tower_shield.png" },
      { name: "Black shield", price: 800, url: "https://wiki.mediviastats.info/images/1/14/Black_shield.png" },
      { name: "Ancient shield", price: 900, url: "https://wiki.mediviastats.info/images/e/ec/66.gif" },
      { name: "Vampire shield", price: 15000, url: "https://wiki.mediviastats.info/images/1/1e/Vampire_shield.png" },
    ],
    wulkan: [
      { name: "Chaos shield", price: 500000, url: "https://wiki.mediviastats.info/images/4/45/Chaos_shield.gif" },
      { name: "Magic plate armor", price: 200000, url: "https://wiki.mediviastats.info/images/7/70/Magic_plate_armor_new.png" },
      { name: "Red scale armor", price: 190000, url: "https://wiki.mediviastats.info/images/8/8e/Red_scale_armor.png" },
      { name: "Demon armor", price: 150000, url: "https://wiki.mediviastats.info/images/6/6b/Demon_armor.png" },
      { name: "Magic sword", price: 150000, url: "https://wiki.mediviastats.info/images/7/71/Magic_sword.png" },
      { name: "Stonecutter axe", price: 150000, url: "https://wiki.mediviastats.info/images/a/a6/772.gif" },
      { name: "Void staff", price: 150000, url: "https://wiki.mediviastats.info/images/b/b2/Void_Staff.png" },
      { name: "Vanquisher", price: 100000, url: "https://wiki.mediviastats.info/images/4/4d/Vanquisher.png" },
      { name: "Ancient armor", price: 75000, url: "https://wiki.mediviastats.info/images/7/7b/Ancient_Armor.png" },
      { name: "Demonbone legs", price: 60000, url: "https://wiki.mediviastats.info/images/7/70/Demonbone_legs.png" },
      { name: "Golden legs", price: 50000, url: "https://wiki.mediviastats.info/images/3/32/Golden_legs.png" },
      { name: "Mastermind shield", price: 50000, url: "https://wiki.mediviastats.info/images/8/8b/Mastermind_shield.png" },
      { name: "Ancient legs", price: 45000, url: "https://wiki.mediviastats.info/images/5/5a/Ancient_Legs.png" },
      { name: "Demon helmet", price: 45000, url: "https://wiki.mediviastats.info/images/f/fc/Demon_helmet.png" },
      { name: "Ancient helmet", price: 42000, url: "https://wiki.mediviastats.info/images/e/e8/Ancient_Helmet.png" },
      { name: "Ancient sword", price: 40000, url: "https://wiki.mediviastats.info/images/1/19/Ancinet_Sword.png" },
      { name: "Demonbone armor", price: 40000, url: "https://wiki.mediviastats.info/images/5/59/Demonbone_armor.png" },
      { name: "Helmet of the fallen king", price: 40000, url: "https://wiki.mediviastats.info/images/a/a0/Helmet_of_the_fallen_king.png" },
      { name: "Hellforged shield", price: 36000, url: "https://wiki.mediviastats.info/images/4/49/Hellforged_shield.png" },
      { name: "Shakirian blade", price: 35000, url: "https://wiki.mediviastats.info/images/d/d5/Shakirian_Blade.gif" },
      { name: "Royal plate armor", price: 35000, url: "https://wiki.mediviastats.info/images/e/ed/Royal_Plate_Armor_NEW.png" },
      { name: "Silver mace", price: 16500, url: "https://wiki.mediviastats.info/images/c/ce/Silver_Mace.png" },
      { name: "Unholy plate armor", price: 15000, url: "https://wiki.mediviastats.info/images/8/80/Unholy_plate_armor.png" },
      { name: "Crown boots", price: 12000, url: "https://wiki.mediviastats.info/images/3/3c/Crown_boots.png" },
      { name: "Demonbone boots", price: 14000, url: "https://wiki.mediviastats.info/images/6/6f/Demonbone_boots.png" },
      { name: "Light armor", price: 13000, url: "https://wiki.mediviastats.info/images/0/04/Light_armor.png" },
      { name: "Torn quicksand boots", price: 10000, url: "https://wiki.mediviastats.info/images/1/15/Torn_quicksand_boots.png" },
      { name: "Demonbone helmet", price: 9000, url: "https://wiki.mediviastats.info/images/b/b3/Demonbone_helmet.png" },
      { name: "Fiery armor", price: 7500, url: "https://wiki.mediviastats.info/images/c/c9/Fieryarmor.png" },
      { name: "Fiery helmet", price: 7500, url: "https://wiki.mediviastats.info/images/e/e1/Fieryhelmet%28transparent%29.png" },
      { name: "Assassin blade", price: 6300, url: "https://wiki.mediviastats.info/images/c/cf/Assassin_Blade.png" },
      { name: "Bone basher", price: 5500, url: "https://wiki.mediviastats.info/images/7/77/Bone_Basher.png" },
      { name: "Unholy halberd", price: 5500, url: "https://wiki.mediviastats.info/images/0/01/Unholy_Halberd.png" },
      { name: "Ancient boots", price: 5000, url: "https://wiki.mediviastats.info/images/2/2e/Ancient_boots.png" },
      { name: "Shakirian shield", price: 3000, url: "https://wiki.mediviastats.info/images/9/9b/Shakirian_shield1.png" },
      { name: "Wooden maul", price: 2000, url: "https://wiki.mediviastats.info/images/e/ee/Wooden_Maul.png" },
      { name: "Drake scale helmet", price: 850, url: "https://wiki.mediviastats.info/images/8/82/Drake_scale_helmet.png" },
      { name: "Soul dagger", price: 200, url: "https://wiki.mediviastats.info/images/1/10/Soul_dagger.png" },
    ],
    aremis: [
      { name: "Flaming bow", price: 18000, url: "https://wiki.mediviastats.info/images/1/19/Flaming_Bow.gif" },
      { name: "Poisoned bow", price: 16000, url: "https://wiki.mediviastats.info/images/6/65/Poisoned_Bow.png" },
      { name: "Bow", price: 130, url: "https://wiki.mediviastats.info/images/a/ad/Bow.gif" },
      { name: "Elven bow", price: 500, url: "https://wiki.mediviastats.info/images/3/3b/Elven_Bow.png" },
      { name: "Hunting bow", price: 1000, url: "https://wiki.mediviastats.info/images/8/80/Hunting_Bow.png" },
      { name: "Shakirian bow", price: 32000, url: "https://wiki.mediviastats.info/images/7/76/Shakirian_Bow.gif" },
      { name: "Crossbow", price: 160, url: "https://wiki.mediviastats.info/images/7/79/Crossbow.png" },
      { name: "Blazing crossbow", price: 70000, url: "https://wiki.mediviastats.info/images/6/69/Blazing-Crossbow_zpsc86a5833.gif" },
      { name: "Enhanced crossbow", price: 24000, url: "https://wiki.mediviastats.info/images/6/62/Enhanced_Crossbow.png" },
      { name: "Ignited bow", price: 5000, url: "https://wiki.mediviastats.info/images/8/85/Ignitedbow.gif" },
      { name: "Fiery bow", price: 46000, url: "https://wiki.mediviastats.info/images/0/0a/Fiery_Bow.gif" },
      { name: "Crystallized crossbow", price: 55000, url: "https://wiki.mediviastats.info/images/4/44/Crystallized_Crossbow.gif" },
      { name: "Envenomed crossbow", price: 65000, url: "https://wiki.mediviastats.info/images/f/fd/Envenomed_Crossbow.png" },
      { name: "Elven crossbow", price: 7500, url: "https://wiki.mediviastats.info/images/9/9d/Viperxbow.png" },
    ],
    ziyad: [
      { name: "Mercenary sword", price: 45000, url: "https://wiki.mediviastats.info/images/1/1c/Mercenary_Sword.png" },
      { name: "Dragon slayer", price: 40000, url: "https://wiki.mediviastats.info/images/3/32/Dragon_slayer.png" },
      { name: "Hellforged shield", price: 36000 , url: "https://wiki.mediviastats.info/images/4/49/Hellforged_shield.png"},
      { name: "Heavy mace", price: 35000 , url: "https://wiki.mediviastats.info/images/1/19/Heavy_Mace.png"},
      { name: "Heavy halberd", price: 35000 , url: "https://wiki.mediviastats.info/images/9/93/Heavy_Halberd.png"},
      { name: "Crystal ring", price: 100 , url: "https://wiki.mediviastats.info/images/7/76/Crystal_ring.gif"},
      { name: "Steel boots", price: 30000 , url: "https://wiki.mediviastats.info/images/9/98/Steel_boots.png"},
      { name: "Dragon scale mail", price: 30000 , url: "https://wiki.mediviastats.info/images/f/fc/Dragon_scale_mail.png"},
      { name: "Demon shield", price: 30000, url: "https://wiki.mediviastats.info/images/e/ed/Demon_shield.png" },
      { name: "Grim legs", price: 30000, url: "https://wiki.mediviastats.info/images/4/46/Grim_Legs.png" },
      { name: "Frozen shield", price: 29000, url: "https://wiki.mediviastats.info/images/b/bc/Frozen_Shield.png" },
      { name: "Bascinet", price: 24000, url: "https://wiki.mediviastats.info/images/7/7d/Bascinet.png" },
      { name: "Imperial soldier legs", price: 20000, url: "https://wiki.mediviastats.info/images/f/f0/Thaian_soldier_legs.png" },
      { name: "Arming sword", price: 20000 , url: "https://wiki.mediviastats.info/images/f/f2/Arming_sword.png"},
      { name: "Golden armor", price: 20000, url: "https://wiki.mediviastats.info/images/4/4d/Golden_armor.png" },
      { name: "Ring of the sky", price: 20000, url: "https://wiki.mediviastats.info/images/5/59/Ring_of_the_Sky.gif" },
      { name: "Grim boots", price: 10000 , url: "https://wiki.mediviastats.info/images/d/df/Grimboots.png"},
      { name: "Swinging demolisher", price: 11000 , url: "https://wiki.mediviastats.info/images/c/cf/Swinging_Demolisher.png"},
      { name: "Bright sword", price: 8000 , url: "https://wiki.mediviastats.info/images/0/06/Bright_sword.png"},
      { name: "Gold ring", price: 8000, url: "https://wiki.mediviastats.info/images/8/8c/Transparent.png" },
      { name: "Guardian halberd", price: 8000, url: "https://wiki.mediviastats.info/images/6/60/Guardian_halberd.png" },
      { name: "Medusa shield", price: 8000, url: "https://wiki.mediviastats.info/images/d/d1/Medusa_shield.png" },
      { name: "The stinger", price: 7000 , url: "https://wiki.mediviastats.info/images/9/94/26416.png"},
      { name: "Nether shield", price: 6600, url: "https://wiki.mediviastats.info/images/2/28/Nether_shield.png" },
      { name: "Shakirian wand", price: 6000 , url: "https://wiki.mediviastats.info/images/c/c0/Shakirian_Wand.gif"},
      { name: "Imperial soldier armor", price: 5500, url: "https://wiki.mediviastats.info/images/0/0e/Thaian_soldier_armor.png" },
      { name: "Light sword", price: 4500 , url: "https://wiki.mediviastats.info/images/a/a5/Light_Sword.png"},
      { name: "Wand of light", price: 4000 , url: "https://wiki.mediviastats.info/images/1/1b/Wandoflight_plz.gif"},
      { name: "Imperial soldier shield", price: 3000, url: "https://wiki.mediviastats.info/images/3/31/Thaian_soldier_shield.png" },
      { name: "Platinum amulet", price: 1500, url: "https://wiki.mediviastats.info/images/7/74/Platinum_amulet_new.png" },
      { name: "Scarab shield", price: 1500, url: "https://wiki.mediviastats.info/images/c/c3/Scarab_shield.png" },
      { name: "Assassin dagger", price: 1000, url: "https://wiki.mediviastats.info/images/4/45/Assassin_Dagger.png" },
      { name: "Shakirian waraxe", price: 1000, url: "https://wiki.mediviastats.info/images/d/d3/Shakirian_.png" },
      { name: "Devil helmet", price: 1000 , url: "https://wiki.mediviastats.info/images/4/4c/Devil_helmet.png"},
      { name: "Mystic turban", price: 1000, url: "https://wiki.mediviastats.info/images/4/40/Mystic_turban.png" },
      { name: "Smoking pipe", price: 600, url: "https://wiki.mediviastats.info/images/d/df/Pipe.gif" },
      { name: "Ancient amulet", price: 500, url: "https://wiki.mediviastats.info/images/c/c6/Ancient_Amulet.gif" },
      { name: "Scarab amulet", price: 500, url: "https://wiki.mediviastats.info/images/6/6d/Scarab_amulet.png" },
      { name: "Aquamarine", price: 350, url: "https://wiki.mediviastats.info/images/1/1b/Aquamarine.gif" },
      { name: "Bone shield", price: 100 , url: "https://wiki.mediviastats.info/images/b/be/Bone_Shield.gif"},
      { name: "Crystallized shield", price: 16000, url: "https://wiki.mediviastats.info/images/c/ca/Crystallized_Shield.png" },
      { name: "Ruby necklace", price: 900, url: "https://wiki.mediviastats.info/images/e/e1/Ruby_Necklace.gif" },
    ],
    draculd: [
      { name: "Pirate sabre", price: 95, url: "https://wiki.mediviastats.info/images/1/1c/Pirate_sabre.png" },
      { name: "Worn out pirate tabard", price: 100, url: "https://wiki.mediviastats.info/images/4/4c/Worn_out_pirate_tabard.png" },
      { name: "Red skirt", price: 150, url: "https://wiki.mediviastats.info/images/5/53/Redskirt.gif" },
      { name: "Worn out pirate beater", price: 200, url: "https://wiki.mediviastats.info/images/f/f7/Worn_out_pirate_beater.png" },
      { name: "Cursed gold coin", price: 250, url: "https://wiki.mediviastats.info/images/d/d6/Cursed_Gold_Coin.gif" },
      { name: "Worn out pirate cape", price: 250, url: "https://wiki.mediviastats.info/images/4/45/Worn_out_pirate_cape.png" },
      { name: "Frost dagger", price: 800, url: "https://wiki.mediviastats.info/images/b/be/Frost_dagger.png" },
      { name: "Permafrost longsword", price: 900, url: "https://wiki.mediviastats.info/images/b/bd/Permafrost_longsword.png" },
      { name: "Wendigo staff", price: 900 , url: "https://wiki.mediviastats.info/images/0/01/Wendigo_staff.png"},
      { name: "Alpha wolf tooth chain", price: 1000, url: "https://wiki.mediviastats.info/images/2/2c/Alpha_wolf_tooth_chain.png" },
      { name: "Pirate eye patch", price: 1000, url: "https://wiki.mediviastats.info/images/1/11/Pirate_eye_patch.png" },
      { name: "Pirate hand hook", price: 1500, url: "https://wiki.mediviastats.info/images/c/c8/Pirate_hand_hook.png" },
      { name: "Permafrost morningstar", price: 1600 , url: "https://wiki.mediviastats.info/images/5/59/Permafrost_morningstar.png"},
      { name: "Plaguespreader rod", price: 2000, url: "https://wiki.mediviastats.info/images/b/b9/Plaguespreader_rod.png" },
      { name: "Permafrost crystal", price: 3000, url: "https://wiki.mediviastats.info/images/b/be/Permafrost_crystal.png" },
      { name: "Pirate skull belt", price: 3000, url: "https://wiki.mediviastats.info/images/3/36/Pirate_skull_belt.png" },
      { name: "Red tunic", price: 5000, url: "https://wiki.mediviastats.info/images/3/3b/Fierytunic.png" },
      { name: "Permafrost stone", price: 7000, url: "https://wiki.mediviastats.info/images/d/d1/Permafrost_stone.gif" },
      { name: "Soul reaper", price: 7500, url: "https://wiki.mediviastats.info/images/9/9b/Soul_reaper.png" },
      { name: "Crystallized sword", price: 10000 , url: "https://wiki.mediviastats.info/images/2/2c/Crystallized_sword.png"},
      { name: "Crystallized axe", price: 11000, url: "https://wiki.mediviastats.info/images/b/bc/Crystallized_Axe.png" },
      { name: "Crystallized hammer", price: 13000, url: "https://wiki.mediviastats.info/images/6/66/Crystallized_Hammer.png" },
      { name: "Pirate bandana", price: 15000, url: "https://wiki.mediviastats.info/images/7/73/Pirate_bandana.png" },
      { name: "Yellow robe", price: 18000, url: "https://wiki.mediviastats.info/images/b/b6/Yellow_robe.png" },
      { name: "Golden staff", price: 20000, url: "https://wiki.mediviastats.info/images/4/4b/Golden_staff.png" },
      { name: "Fire hammer", price: 20000, url: "https://wiki.mediviastats.info/images/7/7b/Fire_Hammer.gif" },
      { name: "Pirate hat", price: 20000, url: "https://wiki.mediviastats.info/images/8/80/Pirate_hat.png" },
      { name: "Permafrost robe", price: 26000, url: "https://wiki.mediviastats.info/images/6/68/Permafrost_robe.png" },
      { name: "Plaguespreader robe", price: 26000, url: "https://wiki.mediviastats.info/images/f/fb/Plaguespreader_robe.png" },
      { name: "Lightbringer helmet", price: 40000 , url: "https://wiki.mediviastats.info/images/3/38/Lightbringer_helmet.png"},
    ],
  }

  return (
    <Layout>
      <Section>
        <h1 style={{ color: "white", fontSize: "30px" }}>Medivia item prices</h1>
        <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>Toggle between locations to see the best prices per specific items</p>
        <ButtonContainer>
          <Button handleClick={() => { setSelected("arak") }} city="Arak" />
          <Button handleClick={() => { setSelected("osaris") }} city="Osaris" />
          <Button handleClick={() => { setSelected("garrogat") }} city="Garrogat" />
          <Button handleClick={() => { setSelected("lucindel") }} city="Lucindel" />
          <Button handleClick={() => { setSelected("mittenhoff") }} city="Mittenhoff" />
          <Button handleClick={() => { setSelected("bluedjinn") }} city="Blue djinn" />
          <Button handleClick={() => { setSelected("greendjinn") }} city="Green djinn" />
          <Button handleClick={() => { setSelected("wulkan") }} city="Wulkan" />
          <Button handleClick={() => { setSelected("aremis") }} city="Aremis" />
          <Button handleClick={() => { setSelected("ziyad") }} city="Ziyad" />
          <Button handleClick={() => { setSelected("draculd") }} city="Draculd" />
        </ButtonContainer>

        <List>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <p>Item name:</p>
            <p>Price (gp)</p>
          </div>
        {selected == "arak" && location.arak.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "osaris" && location.osaris.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "garrogat" && location.garrogat.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "lucindel" && location.lucindel.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "mittenhoff" && location.mittenhoff.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "bluedjinn" && location.bluedjinn.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "greendjinn" && location.greendjinn.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "wulkan" && location.wulkan.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "aremis" && location.aremis.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "ziyad" && location.ziyad.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "draculd" && location.draculd.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}
        </List>
      </Section>
    </Layout>
  )
}

export default App;