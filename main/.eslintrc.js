module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: `./tsconfig.eslint.json`
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "hooks"],
  rules: {
    "import/extensions": [
      2,
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false
      }
    ],
    "react/function-component-definition": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/naming-convention": "off",
    "hooks/sort": [
      2,
      {
        groups: [
          "useReducer",
          "useContext",
          "useState",
          "useRef",
          "useDispatch",
          "useCallback",
          "useEffect"
        ]
      }
    ]
  }
};
