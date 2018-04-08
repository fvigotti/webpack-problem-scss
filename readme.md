problem with sass imports in webpack 4


## how to test :
```console
git clone .... 
cd ... 
npm install
npm run build

# expected results : 
sass + css included in ./dist

# result : 
no styles included in ./dist 

```


## output:



```console
⇒  npm run build                                                                                                                                                                                                                                                                                              [Ξ][9:25:48]
> NODE_ENV=production webpack 

clean-webpack-plugin: --/webpack-problem-scss/dist has been removed.
Hash: 3d60b2342eae7054eb58
Version: webpack 4.5.0
Time: 425ms
Built at: 2018-4-8 09:26:21
      Asset       Size  Chunks             Chunk Names
  index.css   28 bytes       0  [emitted]  index
   index.js  940 bytes       0  [emitted]  index
contact.css   28 bytes       1  [emitted]  contact
 contact.js  933 bytes       1  [emitted]  contact
Entrypoint contact = contact.css contact.js
Entrypoint index = index.css index.js
   [1] ./src/css/style.css 39 bytes {0} {1} [built]
   [2] ./src/js/math.js 136 bytes {0} {1} [built]
   [3] ./src/entrypoint/index.js 258 bytes {0} [built]
   [4] multi ./src/entrypoint/index.js 28 bytes {0} [built]
   [5] ./src/entrypoint/contact.js 244 bytes {1} [built]
   [6] multi ./src/entrypoint/contact.js 28 bytes {1} [built]
   [8] ./src/scss/index.scss 39 bytes [built]
    + 2 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
Child mini-css-extract-plugin node_modules/css-loader/index.js!node_modules/postcss-loader/lib/index.js!src/css/style.css:
    Entrypoint mini-css-extract-plugin = *
       [1] ./node_modules/css-loader!./node_modules/postcss-loader/lib!./src/css/style.css 191 bytes {0} [built]
        + 1 hidden module
Child mini-css-extract-plugin node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/scss/index.scss:
    Entrypoint mini-css-extract-plugin = *
       [1] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/scss/index.scss 349 bytes {0} [built]
        + 1 hidden module


⇒  grep -rnw './src/'  -e 'IBM Plex Sans Condensed'                                                                                                                                                                                                                                                          [↑2][9:27:51]
./src/scss/layout/styleb.scss:7:  font-family: 'IBM Plex Sans Condensed', sans-serif;

⇒  grep -rnw './dist/'  -e 'IBM Plex Sans Condensed'                                                                                                                                                                                                                                                          [Ξ][9:27:54]

⇒  grep -rnw './dist/'  -e 'yellow'                                                                                                                                                                                                                                                                          [↑1][9:28:00]

⇒  grep -rnw './src/'  -e 'yellow'                                                                                                                                                                                                                                                                           [↑1][9:28:14]
./src/scss/index.scss:8:$bg-color: yellow;


```




### notes :
- css are extracted correctly by :
```
    { // this correctly extract the css
         test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    },
```
- but sass not with this :
```
      { // this doesn't extract the scss
        test: /\.scss$/, use: [MiniCssExtractPlugin.loader,
          'css-loader',  //'postcss-loader',
          'sass-loader' ,
        ]
      },
```
