# joi-react-native
This project uses joi@14.1.0 internally.

### Note
Starting form v2.0.0, joi-react-native works on both iOS and Android but v1 only works on iOS.

### Install
```
npm i --save joi-react-native
```

### Documentation
- There are no API changes from node Joi. Thus you can use the same documentation from here 
```
https://github.com/hapijs/joi/blob/master/API.md
```

### Works on Typescript 
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
