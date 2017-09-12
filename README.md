#
# Basic Setup

First let's create a directory, initialize npm, and [install webpack locally](/guides/installation#local-installation):

```bash
mkdir vue-sequence-demo && cd vue-sequence-demo
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-dev-server
npm install --save vue-sequence
```

Now we'll create the following directory structure and contents:

__project__

```diff
vue-sequence-demo
|- package.json
|- webpack.config.js
|- index.html
|- index.js
```

__index.js__

```javascript
import Vue from 'vue'
import 'vue-sequence/dist/main.css'
import VueSequence from 'vue-sequence'

Vue.component('seq-diagram', VueSequence.SeqDiagram)
window.Vue = Vue
```

__index.html__

```html
<html>
  <head>
    <title>Vue Sequence Demo</title>
  </head>
  <body>
    <div id="diagram">
      <seq-diagram :code="code"></seq-diagram>
    </div>
    <script src="./dist/bundle.js"></script>
    <script>
      var app = new Vue({
        el: '#diagram',
        data: { code: 'C1.methodA()' }
      })
    </script>
  </body>
</html>

```
__webpack.config.js__

```javascript
const path = require('path');

module.exports = {
  entry: './index.js',
  node: { fs: 'empty' },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: '.',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }

};
```
__package.json__

```json
{
  "name": "vue-sequence-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --open",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^0.28.7",
    "style-loader": "^0.18.2",
    "webpack": "^3.5.6",
    "webpack-dev-server": "^2.7.1"
  },
  "dependencies": {
    "vue-sequence": "^0.3.4"
  }
}

```



Now, let's run the application:

```bash
npm run start
```


