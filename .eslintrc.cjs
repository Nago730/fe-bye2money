module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier' // prettier와 충돌나는 ESLint 룰 제거
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      }
    },
    settings: {
      react: {
        version: 'detect',
      }
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    rules: {
      // 여기에 프로젝트 커스텀 룰 추가 가능
      'react/react-in-jsx-scope': 'off', // React 17+ JSX Transform에 필요 없음
    }
  };
  