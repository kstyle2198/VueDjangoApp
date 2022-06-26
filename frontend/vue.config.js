const FileManagerPlugin = require('filemanager-webpack-plugin-fixed');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    index: 'home.html'    //루트 url을 home.html로 변경
  },

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static',
  pages: {
    home: {
      template: 'public/index.html',
      entry: 'src/pages/main_home.js',
      filename: 'home.html',
      title: 'VueDjangoApp/home.html',
      minify: false,
    },
    post_list: {
      template: 'public/index.html',
      entry: 'src/pages/main_post_list.js',
      filename: 'post_list.html',
      title: 'VueDjangoApp/post_list.html',
      minify: false,
    },
    post_detail: {
      template: 'public/index.html',
      entry: 'src/pages/main_post_detail.js',
      filename: 'post_detail.html',
      title: 'VueDjangoApp/post_detail.html',
      minify: false,
    }

  },
  configureWebpack: {
    plugins: [
      new FileManagerPlugin({
        onStart: {
          delete: [
            '../backend/static/**/',               //**는 recursive하게 하위의 하위 폴더까지 전부 삭제 */
            '../backend/templates/**/',
          ],
        },

        onEnd: {
          copy: [
            { source: 'dist/static', destination: '../backend/static/' },
            { source: 'dist/favicon.ico', destination: '../backend/static/img/' },
            { source: 'dist/home.html', destination: '../backend/templates/' },
            { source: 'dist/post*.html', destination: '../backend/templates/blog/' },
          ],
        }
      }),
    ]
  },
}


// 상세 설명 찾아보기 https://cli.vuejs.org/config/#publicpath