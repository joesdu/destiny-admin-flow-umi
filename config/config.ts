// https://umijs.org/config/
// Umi框架级配置文件,用于配置Umi框架的一些东东.

import { defineConfig } from 'umi';
import { routerConfig } from './router';

export default defineConfig({
  hash: true,
  // Ant Design相关配置设置暗黑主题或者紧凑主题
  // antd: { dark: false },
  // Ant Design Pro Layout相关配置
  layout: {
    locale: true,
    siderWidth: 208
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true
  },
  dynamicImport: { loading: '@/components/PageLoading' },
  targets: { ie: 11 },
  // umi routes: https://umijs.org/docs/routing
  routes: routerConfig,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // 浏览器标签页图标配置,会生成HTML内容插入到页面中
  favicon: './favicon.svg',
  // 忽略 moment 全球化内容
  history: { type: 'memory' },
  // 输出目录
  outputPath: './dist',
  manifest: { basePath: '/' }
});
