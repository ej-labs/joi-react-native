# joi-react-native
[![npm version](https://badge.fury.io/js/joi-react-native.svg)](https://badge.fury.io/js/joi-react-native)

### Note
- joi-react-native v3 uses joi 14.3.1 internally and works on react-native >= 0.59.0.

- joi-react-native v2 uses joi 14.1.0 internally and works on react-native < 0.58.0.

### What is the difference between v3 and v2.
- Because react-native 0.59.0 has new JS Core, we don't need to use polyfills in v3 anymore. For this reason, file size in v3 is significantly smaller (50% smaller) and more performant compared to v2. 

### Install
```
npm i --save joi-react-native
```

### Documentation
- There are no API changes from node Joi. Thus you can use the same documentation from here 
```
https://github.com/hapijs/joi/blob/master/API.md
```

### Works with TypeScript 
Use babel plugin to transform all require/import from joi to joi-react-native. By doing this, you can use joi-react-native with type definitions from @types/joi.

1. Install babel-plugin-rewrite-require
    ```
    npm install --save-dev babel-plugin-rewrite-require
    ```
2. In .babelrc, add the following:
    ```
    "plugins": [
      ["rewrite-require", {
        aliases: {
          joi: 'joi-react-native',
        }
      }]
    ]
    ```
3. That's it. In any files that uses joi, you must require/import from joi (not joi-react-native). Babel will transform to joi-react-native for you
