# 萌宠之家 - Pet Store

基于 Eleventy (11ty) 构建的宠物用品静态电商展示站点。

## 技术栈

- **静态站点生成器**: [Eleventy (11ty)](https://www.11ty.dev/) v3.1.5
- **模板引擎**: Nunjucks (.njk)
- **样式框架**: Tailwind CSS (CDN)
- **字体**: Fredoka, Plus Jakarta Sans (Google Fonts)

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式（热重载）
npm start

# 生产构建
npm run build
```

构建产物输出到 `_site/` 目录。

## 项目结构

```
pet-store-11ty4/
├── src/
│   ├── _data/           # 全局数据
│   │   └── products.json    # 商品数据（12个商品）
│   ├── _includes/       # 可复用模板组件
│   │   └── layouts/
│   │       └── layout.njk   # 基础布局（导航+页脚）
│   ├── products/        # 商品详情页模板
│   │   └── product.njk
│   ├── js/              # 客户端 JS
│   │   └── products.js     # 商品数据（供前端筛选使用）
│   ├── index.njk        # 首页（精选推荐）
│   ├── products.njk     # 商品目录页（带分类筛选）
│   └── about.njk        # 关于我们 + 联系表单
├── eleventy.config.js   # Eleventy 配置
└── package.json
```

## 功能特性

- **首页** — 展示精选推荐商品、服务介绍、店铺信息
- **商品目录** — 12个宠物商品，支持按分类（食品/玩具/配件/健康）筛选
- **商品详情** — 独立商品页，展示详情和相关商品推荐
- **关于我们** — 品牌故事、使命、店铺信息、联系表单
- **响应式设计** — 适配桌面端和移动端
- **路径前缀** — 部署在 `/pet-store-11ty4/` 子路径下

## 商品分类

| 分类 | 商品数 |
|------|--------|
| 食品 (food) | 3 |
| 玩具 (toys) | 3 |
| 配件 (accessories) | 3 |
| 健康 (health) | 3 |

## 配置说明

`eleventy.config.js` 中的关键配置：

- `pathPrefix: "/pet-store-11ty4"` — 部署子路径前缀
- `categoryMap` — 分类中英文映射（供模板使用）
- `addPassthroughCopy` — 静态资源（images/css/js）直接拷贝

## 浏览器支持

现代浏览器（Chrome、Firefox、Safari、Edge 最新版本）
