import { ITypeRegExp } from '../models';
import { difficulty } from './difficulty.type';
import { query } from './query.type';

export type AggregatedFilter =
  | {
      $and: AggregatedFilter[];
      $or?: never;
      $nor?: never;
      'userWord.optional.learned'?: never;
      'userWord.difficulty'?: never;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      userWord?: never;
      word?: never;
    }
  | {
      $and?: never;
      $or: AggregatedFilter[];
      $nor?: never;
      'userWord.optional.learned'?: never;
      'userWord.difficulty'?: never;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      userWord?: never;
      word?: never;
    }
  | {
      $and?: never;
      $or?: never;
      $nor: AggregatedFilter[];
      'userWord.optional.learned'?: never;
      'userWord.difficulty'?: never;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      userWord?: never;
      word?: never;
    }
  | {
      $and?: never;
      $or?: never;
      $nor?: never;
      'userWord.optional.learned': boolean;
      'userWord.difficulty'?: never;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      userWord?: never;
      word?: never;
    }
  | {
      $and?: never;
      $or?: never;
      $nor?: never;
      'userWord.optional.learned'?: never;
      'userWord.difficulty': difficulty | query | ITypeRegExp;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      userWord?: never;
      word?: never;
    }
  | {
      $and?: never;
      $or?: never;
      $nor?: never;
      'userWord.optional.learned'?: never;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      'userWord.difficulty'?: never;
      userWord: null | { $exists: true };
      word?: never;
    }
  | {
      $and?: never;
      $or?: never;
      $nor?: never;
      'userWord.optional.learned'?: never;
      'userWord.optional.deleted'?: boolean;
      'userWord.optional.hard'?: boolean;
      'userWord.difficulty'?: never;
      userWord?: never;
      word: string | query | ITypeRegExp;
    };
