module.export = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.*?.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: ['plugin:@angular-eslint/recommended'],
      rules: {},
    },
    {
      files: ['*.components.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
      },
    },
    {
      files: ['*.components.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
  ],
};
