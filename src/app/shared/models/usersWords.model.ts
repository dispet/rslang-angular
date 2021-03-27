export interface IUsersWords {
  difficulty: string;
  optional: {
    learned?: boolean;
    hard?: boolean;
    deleted?: boolean;
  };
}
