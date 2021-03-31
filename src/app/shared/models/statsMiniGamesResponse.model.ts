import {IStatsMiniGamesItem} from "./statsMiniGamesItem.model";

export interface IStatsMiniGamesResponse {
  optional: {
    audiocall?: IStatsMiniGamesItem;
    sprint?: IStatsMiniGamesItem;
    savannah?: IStatsMiniGamesItem;
    'own-game'?: IStatsMiniGamesItem;
  };
}
