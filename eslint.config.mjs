import pluginJs from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended, // JS recommended rules
  pluginReact.configs.flat.recommended, // React recommended rules
  {
    name: 'Config files',
    files: ['**/*.config.js', '**/*.config.mjs'],
    languageOptions: {
      globals: {
        module: true,
        require: true,
      },
    },
  },
  {
    name: 'Front-end',
    files: ['front-end/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      cypress: pluginCypress,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      prettier: pluginPrettier,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'jsx-a11y/alt-text': 'warn',
      //'jsx-a11y/click-events-have-key-events': 'warn',
      //'jsx-a11y/label-has-associated-control': 'error',
      //'jsx-a11y/no-static-element-interactions': 'warn',
      'no-unused-vars': 'off',
      //'react/jsx-boolean-value': ['warn', 'never'], // Avoid unnecessary boolean values in JSX props
      'react/jsx-key': 'error', // Enforce keys for array elements
      'react/jsx-no-duplicate-props': 'error', // Avoid duplicate props in JSX
      //'react/jsx-no-useless-fragment': 'warn',      // Prevent useless fragments
      'react/jsx-pascal-case': 'warn', // Enforce PascalCase for component names
      'react/jsx-uses-react': 'off',
      //'react/no-array-index-key': 'warn',           // Discourage using array index as key
      'react/no-unknown-property': 'warn', // Prevent invalid DOM properties
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      //'react-hooks/exhaustive-deps': 'warn', // Validates dependencies of hooks
      //'react-hooks/rules-of-hooks': 'error', // Ensures hooks are used correctly
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js'],
        },
      },
    },
  },
  {
    name: 'Front-end Cypress',
    files: ['front-end/cypress/**/*.js', 'front-end/cypress/**/*.cy.js'],
    languageOptions: {
      globals: {
        cy: true,
        describe: true,
        beforeEach: true,
        it: true,
      },
    },
    plugins: {
      cypress: pluginCypress,
    },
  },
  {
    name: 'Front-end tests',
    files: ['front-end/**/*.test.js'],
    languageOptions: {
      globals: {
        expect: true,
        test: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    name: 'Front-end server',
    files: ['front-end/server.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
];
