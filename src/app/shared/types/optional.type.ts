import {IStatsMiniGamesItem} from '../models';

export type optional = {
  audiocall: IStatsMiniGamesItem,
  sprint?: never,
  savannah?: never,
  'own-game'?: never,
} | {
  audiocall?: never,
  sprint: IStatsMiniGamesItem,
  savannah?: never,
  'own-game'?: never,
} | {
  audiocall?: never,
  sprint?: never,
  savannah: IStatsMiniGamesItem,
  'own-game'?: never,
} | {
  audiocall?: never,
  sprint?: never,
  savannah?: never,
  'own-game': IStatsMiniGamesItem,
};
