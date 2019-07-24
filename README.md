# webpack-umd-test

I'm trying to build bundles with webpack using `libraryTarget` : `umd` or `amd` but I'm running into the following problem 

"testWithoutImport.js" returns the expected object when required

```
[object Object]
{
  "name": "testWithoutImport"
}
```

But when a random import is used on the same script, "testWithImport.js" returns an esModule when required which breaks in browsers

```
[object Module]
{}
```

## To run

`yarn install`

`yarn run webpack`

`yarn run start`

see http://127.0.0.1:8081