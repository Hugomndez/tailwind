import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig([
  {
    ignores: [
      '**/.next',
      '**/.cache',
      '**/package-lock.json',
      '**/public',
      '**/node_modules',
      '**/next-env.d.ts',
      '**/yarn.lock',
    ],
  },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'off',
      'no-console': [
        'error',
        {
          allow: ['debug', 'info', 'warn', 'error'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
        },
      ],
    },
  }),
]);

export default eslintConfig;
