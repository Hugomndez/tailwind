import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig([
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
]);

export default eslintConfig;
