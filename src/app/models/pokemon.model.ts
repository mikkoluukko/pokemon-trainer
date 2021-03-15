export interface Pokemon {
  id?: number;
  name: string;
  url: string;
  image?: string;
  height?: number;
  weight?: number;
  types?: PokemonType[];
  stats?: PokemonStat[];
  abilities?: PokemonAbility[];
  base_experience?: number;
  moves?: PokemonMove[];
  sprites?: any;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeType;
}

export interface PokemonTypeType {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatStat;
}

export interface PokemonStatStat {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: PokemonAbilityAbility;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonAbilityAbility {
  name: string;
  url: string;
}

export interface PokemonMove {
  move: PokemonMoveMove;
  version_group_details: any[];
}

export interface PokemonMoveMove {
  name: string;
  url: string;
}

export interface PokemonSprite {
  back_shiny: string;
  front_shiny: string;
  other: PokemonSpriteOther;
}

export interface PokemonSpriteOther {
  dream_world: any;
  'official-artwork': PokemonSpriteOfficial;
}

export interface PokemonSpriteOfficial {
  front_default: string;
}