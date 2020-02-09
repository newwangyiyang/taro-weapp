/* eslint-disable */
const path = require('path');
const config = {
  projectName: 'taro-weapp',
  date: '2020-1-21',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  // js压缩
  uglify: {
    enable: true
  },
  // css压缩
  csso: {
    enable: true
  },
  // scss 全局引入scss文件
  sass: {
    resource: [
      // 以list形式映入可引入多个scss文件
      'src/assets/scss/scss-variable.scss',
      'src/assets/scss/scss-mixins.scss'
    ],
    projectDirectory: path.resolve(__dirname, '..')
  },
  // 配置项目别名
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
  },
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      [
        'transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  defineConstants: {},
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
        }
      },
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      compile: {
        include: ['taro-f2']
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui', 'taro-f2'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
