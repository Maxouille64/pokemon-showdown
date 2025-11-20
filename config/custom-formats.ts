// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
  // S/V Singles
  ///////////////////////////////////////////////////////////////////

  {
    section: "S/V Singles",
  },
  {
    name: "[Gen 9] nohax OU",
    mod: 'nohax',
    ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', 'nohax'],
    banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
  },
  {
    name: "[Gen 9] nohax Random Battle",
    desc: `Randomized teams of Pok&eacute;mon without hax.`,
    mod: 'nohax',
    team: 'random',
    bestOfDefault: true,
    ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod','nohax'],
  },

  // Use Them All
  ///////////////////////////////////////////////////////////////////
  {
    section: "UTA",
  },
  {
    name: "[Gen 9] Use Them All",
    desc: `UTA rereborn.`,
    threads: [
      `&bullet; <a href="">Ranking UTA</a>`,
    ],
    mod: 'gen9',
    ruleset: ['Standard'],
    banlist: ['Uber']
  },
  {
    name: "[Gen 8] Use Them All",
    desc: `UTA reborn.`,
    threads: [
      `&bullet; <a href="https://docs.google.com/spreadsheets/d/1hn2lt5HEVUvvpry2EA7NwvNd94Jb9TW89zZp4SNn5Dk/edit#gid=1697511675">Ranking UTA</a>`,
    ],
    mod: 'gen8',
    ruleset: ['Standard'],
    banlist: ['Uber', 'Moody', 'Shadow Tag', 'Baton Pass']

  },
  {
    name: "[Gen 7] Use Them All",
    desc: `qui UTA?`,
    threads: [
      `&bullet; <a href="https://salty.fandom.com/fr/wiki/Use_Them_All">Mais quesque c'est?</a>`,
      `&bullet; <a href="https://pokepast.es/b90186d50e4264f8">Sample Teams</a>`,
      `&bullet; <a href="https://docs.google.com/spreadsheets/d/1hn2lt5HEVUvvpry2EA7NwvNd94Jb9TW89zZp4SNn5Dk/edit#gid=1697511675">Ranking UTA</a>`,
    ],

    mod: 'gen7',
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
    banlist: ['Gengar-Mega', 'Kangaskhan-Mega', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Lugia', 'Ho-Oh', 'Blaziken', 'Blaziken-Mega', 'Salamence-Mega', 'Kyogre', 'Kyogre-Primal', 'Groudon', 'Groudon-Primal', 'Rayquaza', 'Rayquaza-Mega', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Lucario-Mega', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Shaymin-Sky', 'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal', 'Zygarde-Complete', 'Solgaleo', 'Lunala', 'Necrozma-Ultra', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Marshadow', 'Naganadel'],
    onValidateTeam(team) {
      const S = ['Charizard-Mega-X', 'Charizard-Mega-Y', 'Chansey', 'Pinsir-Mega', 'Magikarp', 'Swampert-Mega', 'Sableye-Mega', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Deoxys-Speed', 'Manaphy', 'Darkrai', 'Victini', 'Landorus', 'Landorus-Therian', 'KyuremBlack', 'Genesect', 'Greninja', 'Ash-Greninja', 'Aegislash-ShieldForme', 'Aegislash-BladeForme', 'Zygarde', 'Diancie-Mega', 'Hoopa', 'Hoopa-Unbound', 'TapuLele', 'Pheromosa', 'Kartana', 'Magearna'];
      const A = ['Venusaur-Mega', 'Clefable', 'Dugtrio', 'Alakazam-Mega', 'Slowbro-Mega', 'Gengar', 'Marowak-Alola', 'Gyarados-Mega', 'Zapdos', 'Dragonite', 'Mew', 'Azumarill', 'Scizor-Mega', 'Heracross-Mega', 'Blissey', 'Suicune', 'Tyranitar', 'Tyranitar-Mega', 'Celebi', 'Gardevoir-Mega', 'Manectric-Mega', 'Salamence', 'Latias-Mega', 'Latios', 'Latios-Mega', 'Jirachi', 'Lopunny-Mega', 'Garchomp', 'Garchomp-Mega', 'Weavile', 'Porygon-Z', 'Gallade-Mega', 'Heatran', 'Shaymin-LandForme', 'Serperior', 'Excadrill', 'Ferrothorn', 'Bisharp', 'Hydreigon', 'Volcarona', 'Terrakion', 'Tornadus-Therian', 'Thundurus', 'Keldeo', 'Keldeo-Resolute', 'Hawlucha', 'Volcanion', 'Toxapex', 'Mimikyu', 'TapuKoko', 'TapuBulu', 'Xurkitree', 'Celesteela']
      const B = ['Blastoise-Mega', 'Beedrill-Mega', 'Pidgeot-Mega', 'Nidoking', 'Ninetales-Alola', 'Alakazam', 'Starmie', 'Gyarados', 'Ditto', 'Aerodactyl-Mega', 'Scizor', 'Shuckle', 'Heracross', 'Skarmory', 'Houndoom-Mega', 'Kingdra', 'Smeargle', 'Raikou', 'Entei', 'Pelipper', 'Breloom', 'Sharpedo-Mega', 'Altaria-Mega', 'Crawdaunt', 'Latias', 'Lucario', 'Hippowdon', 'Magnezone', 'Tangrowth', 'Togekiss', 'Gliscor', 'Mamoswine', 'Rotom-Heat', 'Rotom-Wash', 'Cresselia', 'Conkeldurr', 'Scolipede', 'Darmanitan', 'Reuniclus', 'Amoonguss', 'Haxorus', 'Mandibuzz', 'Cobalion', 'Tornadus', 'Thundurus-Therian', 'Kyurem', 'Diggersby', 'Sylveon', 'Zygarde-,0%', 'Diancie', 'Ribombee', 'Kommo-o', 'TapuFini', 'Nihilego', 'Buzzwole', 'Gothitelle', 'Stakataka', 'Blacephalon']
      const C = ['Venusaur', 'Blastoise', 'Raichu-Alola', 'Nidoqueen', 'Ninetales', 'Victreebel', 'Tentacruel', 'Slowbro', 'Magneton', 'Muk-Alola', 'Cloyster', 'Exeggutor-Alola', 'Eevee', 'Omastar', 'Kabutops', 'Snorlax', 'Moltres', 'Feraligatr', 'Crobat', 'Xatu', 'Ampharos-Mega', 'Politoed', 'Quagsire', 'Espeon', 'Umbreon', 'Slowking', 'Wobbuffet', 'Steelix-Mega', 'Mantine', 'Porygon,', 'Sceptile-Mega', 'Swampert', 'Ludicolo', 'Aggron-Mega', 'Sharpedo', 'Camerupt-Mega', 'Torkoal', 'Flygon', 'Milotic', 'Banette-Mega', 'Absol-Mega', 'Glalie-Mega', 'Metagross', 'Infernape', 'Empoleon', 'Staraptor', 'Gastrodon', 'Honchkrow', 'Toxicroak', 'Abomasnow-Mega', 'Gallade', 'Rotom-Mow', 'Uxie', 'Azelf', 'Emboar', 'Whimsicott', 'Krookodile', 'Darmanitan-ZenMode', 'Carracosta', 'Zoroark', 'Jellicent', 'Alomomola', 'Galvantula', 'Chandelure', 'Mienshao', 'Druddigon', 'Virizion', 'Meloetta-AriaForm', 'Meloetta-PirouetteForm', 'Chesnaught', 'Talonflame', 'Florges', 'Pangoro', 'Doublade', 'Slurpuff', 'Barbaracle', 'Dragalge', 'Tyrantrum', 'Klefki', 'Primarina', 'Lycanroc-MiddayForm', 'Araquanid', 'Bewear', 'Lycanroc-MidnightForm']
      const D = ['Charizard', 'Raticate', 'Raticate-Alola', 'Arbok', 'Sandslash', 'Sandslash-Alola', 'Clefairy', 'Golbat', 'Venomoth', 'Diglett', 'Dugtrio-Alola', 'Persian-Alola', 'Primeape', 'Arcanine', 'Poliwrath', 'Kadabra', 'Machamp', 'Golem', 'Golem-Alola', 'Rapidash', 'Muk', 'Hypno', 'Exeggutor', 'Marowak', 'Hitmonlee', 'Weezing', 'Tangela', 'Tauros', 'Lapras', 'Vaporeon', 'Jolteon', 'Aerodactyl', 'Articuno', 'Typhlosion', 'Lanturn', 'Togetic', 'Foretress', 'Gligar', 'Steelix', 'Qwilfish', 'Sneasel', 'Ursaring', 'Piloswine', 'Houndoom', 'Donphan', 'Hitmontop', 'Miltank', 'Sceptile', 'Combusken', 'Linoone', 'Shiftry', 'Swellow', 'Gardevoir', 'Masquerain', 'Slaking', 'Exploud', 'Hariyama', 'Sableye', 'Aggron', 'Medicham', 'Trapinch', 'Cacturne', 'Altaria', 'Zangoose', 'Dusclops', 'Regirock', 'Regice', 'Registeel', 'Roserade', 'Rampardos', 'Floatzel', 'Bronzong', 'Chatot', 'Drapion', 'Abomasnow', 'Rhyperior', 'Electivire', 'Magmortar', 'Yanmega', 'Dusknoir', 'Froslass', 'Rotom-Frost', 'Mesprit', 'Regigigas', 'Samurott', 'Stoutland', 'Musharna', 'Gigalith', 'Swoobat', 'Audino-Mega', 'Seismitoad', 'Cottonee', 'Lilligant', 'Crustle', 'Scrafty', 'Sigilyph', 'Cofagrigus', 'Archeops', 'Garbodor', 'Cinccino', 'Gothita', 'Duosion', 'Sawsbusk', 'Escavalier', 'Eelektross', 'Golurk', 'Bouffalant', 'Braviary', 'Durant', 'Delphox', 'Vivillon', 'Pyroar', 'Gogoat', 'Malamar', 'Clawitzer', 'Heliolisk', 'Carbink', 'Goodra', 'Gourgeist-SuperSize', 'Gourgeist-LargeSize', 'Avalugg', 'Noivern', 'Decidueye', 'Crabominable', 'Salazzle', 'Tsareena', 'Comfey', 'Golisopod', 'Pyukumuku', 'Type:Null', 'Silvally', 'Minior-Meteor', 'Minior', 'Bruxish', 'Drampa', 'Dhelmise', 'Guzzlord', 'Necrozma']
      let m = 0;let n = 0;let o = 0;let p = 0;let q = 0;let r = 0;
      for (const set of team) {
        const baseSpecies = this.dex.species.get(set.species).baseSpecies;
        if (S.includes(baseSpecies)) m++;
        if (A.includes(baseSpecies)) n++;
        if (B.includes(baseSpecies)) o++;
        if (C.includes(baseSpecies)) p++;
        if (D.includes(baseSpecies)) q++;
        if (m > 1) return [`Tu as deux Pokémon rang S tu dois remplacer ` + baseSpecies + ` par un Pok\u00E9mon de rang inférieur`];
        if (n > 1) return [`Tu as deux Pokémon rang A tu dois remplacer ` + baseSpecies + ` par un Pok\u00E9mon de rang inférieur`];
        if (o > 1) return [`Tu as deux Pokémon rang B tu dois remplacer ` + baseSpecies + ` par un Pok\u00E9mon de rang inférieur`];
        if (p > 1) return [`Tu as deux Pokémon rang C tu dois remplacer ` + baseSpecies + ` par un Pok\u00E9mon de rang inférieur`];
        if (q > 1) return [`Tu as deux Pokémon rang D tu dois remplacer ` + baseSpecies + ` par un Pok\u00E9mon de rang inférieur`];

      }
    },
  },

  // OM of the Month
  ///////////////////////////////////////////////////////////////////

  {
    section: "OM of the Month",
    column: 2,
  },
  {
    name: "[Gen 6] Mix and Mega Random Battle",
    inherit: ['[Gen 6] Mix and Mega'],

    mod: 'mixandmegagen6',
    team: 'random',
    //ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
    ruleset: ['[Gen 6] Ubers', 'Overflow Stat Mod'],
    banlist: [],
    restricted: [],
    onModifySpecies(template, target, format, effect) {
      if (!effect || ['imposter', 'transform'].includes(effect.id)) return;
      const megaSpecies = (effect as Item).megaStone || ({dragonascent: 'Rayquaza-Mega', redorb: 'Groudon-Primal', blueorb: 'Kyogre-Primal'} as {[k: string]: string})[effect.id];
      if (!megaSpecies || megaSpecies === template.name) return;
      template = this.actions.getMixedSpecies(template, megaSpecies);
      return template;
    },
    onBegin() {
      const allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
      for (const pokemon of allPokemon) {
        pokemon.m.originalSpecies = pokemon.baseSpecies.name;
      }
    },
    onSwitchIn(pokemon) {
      const oMegaTemplate = this.dex.species.get(pokemon.species.originalMega);
      if (oMegaTemplate.exists && pokemon.m.originalSpecies !== oMegaTemplate.baseSpecies) {
        // Place volatiles on the Pokémon to show its mega-evolved condition and details
        this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
        const oTemplate = this.dex.species.get(pokemon.m.originalSpecies);
        if (oTemplate.types.length !== pokemon.species.types.length || oTemplate.types[1] !== pokemon.species.types[1]) {
          this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
        }
      }
    },
    onSwitchOut(pokemon) {
      const oMegaTemplate = this.dex.species.get(pokemon.species.originalMega);
      if (oMegaTemplate.exists && pokemon.m.originalSpecies !== oMegaTemplate.baseSpecies) {
        this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
      }
    }
  },
  {
    name: "[Gen 7] Mix and Mega Random Battle",
    inherit: ['[Gen 7] Mix and Mega'],

    mod: 'gen7mixandmega',
    team: 'random',
    ruleset: ['[Gen 7] Ubers', 'Overflow Stat Mod'],
    banlist: [],
    restricted: [],

    onModifySpecies(template, target, format, effect) {
      if (!effect || ['imposter', 'transform'].includes(effect.id)) return;
      const megaSpecies = (effect as Item).megaStone || ({dragonascent: 'Rayquaza-Mega', redorb: 'Groudon-Primal', blueorb: 'Kyogre-Primal'} as {[k: string]: string})[effect.id];
      if (!megaSpecies || megaSpecies === template.name) return;
      template = this.actions.getMixedSpecies(template, megaSpecies);
      return template;
    },
    onBegin() {
      const allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
      for (const pokemon of allPokemon) {
        pokemon.m.originalSpecies = pokemon.baseSpecies.name;
      }
    },
    onSwitchIn(pokemon) {
      const oMegaTemplate = this.dex.species.get(pokemon.species.originalMega);
      if (oMegaTemplate.exists && pokemon.m.originalSpecies !== oMegaTemplate.baseSpecies) {
        // Place volatiles on the Pokémon to show its mega-evolved condition and details
        this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
        const oTemplate = this.dex.species.get(pokemon.m.originalSpecies);
        if (oTemplate.types.length !== pokemon.species.types.length || oTemplate.types[1] !== pokemon.species.types[1]) {
          this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
        }
      }
    },
    onSwitchOut(pokemon) {
      const oMegaTemplate = this.dex.species.get(pokemon.species.originalMega);
      if (oMegaTemplate.exists && pokemon.m.originalSpecies !== oMegaTemplate.baseSpecies) {
        this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
      }
    }
  }
];
