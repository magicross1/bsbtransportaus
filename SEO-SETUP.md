# BSB Transport Australia - SEO配置说明

## 已完成的SEO优化

### 1. 基础SEO配置
- ✅ 完善了Nuxt配置中的站点信息
- ✅ 设置了多语言支持 (英语/中文)
- ✅ 配置了图片优化
- ✅ 添加了预渲染路由

### 2. 内容优化
- ✅ 更新了主页内容，专注于集装箱运输服务
- ✅ 添加了专业的SEO标题和描述
- ✅ 包含了相关关键词

### 3. 技术SEO
- ✅ 创建了robots.txt文件
- ✅ 创建了sitemap.xml文件
- ✅ 添加了JSON-LD结构化数据
- ✅ 配置了Open Graph和Twitter卡片
- ✅ 设置了canonical链接

### 4. 性能优化
- ✅ 配置了图片优化
- ✅ 设置了Core Web Vitals目标
- ✅ 添加了预加载和延迟加载配置

## 需要手动配置的项目

### 1. Google Analytics
```bash
# 安装Google Analytics模块
pnpm add @nuxtjs/google-analytics

# 在nuxt.config.ts中取消注释googleAnalytics配置
# 并替换为实际的GA4 ID
```

### 2. Google Search Console
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站属性: `https://www.bsbtransport.com.au`
3. 验证网站所有权
4. 提交sitemap: `https://www.bsbtransport.com.au/sitemap.xml`

### 3. 社交媒体图片
需要创建以下图片文件：
- `/public/og-image.jpg` - Open Graph图片 (1200x630px)
- `/public/logo.png` - 公司Logo
- `/public/favicon.ico` - 网站图标

### 4. 联系信息
在以下文件中更新实际联系信息：
- `app/pages/index.vue` - 电话号码
- `app/config/seo.ts` - 联系信息
- `public/sitemap.xml` - 更新日期

## SEO关键词策略

### 主要关键词
- container transport australia
- trailer transport
- sideloader transport
- container storage
- freight transport
- logistics australia
- BSB transport

### 长尾关键词
- professional container transport services australia
- reliable trailer transport company
- specialized sideloader transport services
- container storage and transport solutions
- freight transport logistics australia

## 下一步建议

1. **内容页面**: 创建服务页面、关于我们页面、联系我们页面
2. **博客系统**: 添加博客功能来发布行业相关文章
3. **本地SEO**: 添加Google My Business集成
4. **页面速度**: 使用PageSpeed Insights测试和优化
5. **移动优化**: 确保所有页面在移动设备上表现良好

## 监控工具

建议使用以下工具监控SEO表现：
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- GTmetrix
- Screaming Frog SEO Spider

## 文件结构

```
├── app/
│   ├── components/
│   │   └── SEOProvider.vue          # SEO提供者组件
│   ├── config/
│   │   └── seo.ts                   # SEO配置文件
│   ├── pages/
│   │   └── index.vue                # 主页SEO配置
│   └── app.vue                      # 全局SEO设置
├── content/
│   └── index.yml                    # 内容SEO配置
├── locales/
│   ├── en-AU.json                   # 英语翻译
│   └── zh-CN.json                   # 中文翻译
├── public/
│   ├── robots.txt                   # 爬虫指令
│   └── sitemap.xml                  # 网站地图
└── nuxt.config.ts                   # Nuxt SEO配置
```
