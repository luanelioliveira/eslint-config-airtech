# eslint-config-airtech

ESLint configuration to use 

## Whats included?

This package includes 1 ESLint Config:

- config-frontend

## How it works

### Install package

```
npm i -D @luanelioliveira/eslint-config
```

You can also install a specific version of the package by appending the version tag.
For example, to install version 1.0.0

```
npm i -D @luanelioliveira/eslint-config@1.0.0
```

### Install Peer Dependencies

```
npm i -D eslint prettier typescript
```

### Make ESLint config file

Add `.eslintrc` to project root

```json
{
  "extends": "@luanelioliveira/eslint-config/config-frontend"
}
```

### Make Prettier config file

Add `.prettierrc` to project root

```json
{
  "printWidth": 120,
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
}
```

Optional: If there are any files you want to exclude from Prettier, add `.prettierignore` to project root

### Make Editor config file

Add `.editorconfig` to project root

```conf
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
max_line_length = 120
insert_final_newline = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

```

### Add Engines

Add the node engine to `package.json`

```json
{
  "engines": {
    "node": "^16.0.0"
  }
}
```

### Add Scripts

Add scripts for linting and formatting to `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,scss,md,graphql}\"",
    "format:check": "prettier --debug-check \"src/**/*.{ts,tsx,js,jsx,json,css,scss,md,graphql}\""
  }
}
```
