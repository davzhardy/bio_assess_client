module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2],
        "keyword-spacing": "error",
        "linebreak-style": "error",
        "quotes": ["error","single"],
        "semi": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "error"
    }
};
