# Serenity Wellness — 静态网站使用说明

一个纯静态的按摩 / 针灸店网站，全英文界面，澳洲健康养生风格。
**无需安装任何软件**，直接双击 `index.html` 即可在浏览器中打开。

---

## 一、如何打开网站

1. 进入文件夹 `massage website silent`
2. 双击 **`index.html`** → 用浏览器（Chrome / Safari / Edge）打开即可

> 图片默认使用了网络示例图，所以第一次打开需要联网才能看到图片。
> 换成你自己的图片后（见下文），即使离线也能显示。

---

## 二、页面一览

| 页面 | 文件 | 内容 |
|------|------|------|
| 主页 | `index.html` | 横幅、特色、简介、热门项目、弹窗优惠 |
| 项目介绍 | `services.html` | 针灸 / 按摩项目图文介绍 |
| 价格 | `pricing.html` | 主要项目价目表 |
| 产品 | `products.html` | 产品图文展示 |
| 联系我们 | `contact.html` | 地址、营业时间、电话、Google 地图 |

---

## 三、你要填写 / 完善的「表格」文件（重点）

所有内容都集中在 **`data/`** 文件夹里，用任意文本编辑器（记事本、备忘录、VS Code 都行）打开修改即可。**改完保存，刷新网页就更新。**

### 1. 店铺信息 / 地址 / 营业时间 / 地图
**文件地址：** `data/site.js`
- 店名、电话、邮箱
- **详细地址**（`address`）
- **营业时间**（`hours`，每行一条）
- **Google 地图链接**（`mapLink`）和**嵌入地图**（`mapEmbed`）

### 2. 项目介绍表格（针灸 / 按摩项目）
**文件地址：** `data/services.js`
- 每个 `{ ... }` 是一个项目（一行）
- 复制一段 `{ ... }` 即可新增，删除一段即可移除

### 3. 价目表
**文件地址：** `data/pricing.js`
- 按 `Massage / Chinese Medicine / Packages` 分组
- 每个 `{ name, duration, price }` 是价目表里的一行

### 4. 产品表格
**文件地址：** `data/products.js`
- 每个 `{ ... }` 是一个产品卡片
- `tag` 可写 "Best Seller" / "New"，留空 `""` 则不显示角标

### 5. 主页弹窗优惠（Big Deal）
**文件地址：** `data/deal.js`
- 有优惠：填好 `title` / `highlight` / `description` 等
- **没有优惠时**：把文件内容改成一行
  ```js
  const ACTIVE_DEAL = null;
  ```
  这样主页就**不会弹出**任何窗口。

---

## 四、如何换成自己的图片

1. 把你的图片放进 **`images/`** 文件夹（例如 `images/remedial.jpg`）
2. 在对应的数据文件里，把图片地址改成本地路径，例如：
   ```js
   image: "images/remedial.jpg",
   ```
3. 横幅大图（主页/各页顶部）在 `css/style.css` 里搜索 `.hero` 和 `.cta-band` 修改 `url(...)`

> 建议图片尺寸：卡片图 800×600 左右，横幅图 1600 宽。

---

## 五、Google 地图怎么填

1. 打开 Google Maps，搜索你的店铺地址
2. 点 **分享 → 嵌入地图**，复制 `<iframe src="......">` 里 **src 的链接**
   → 粘贴到 `data/site.js` 的 `mapEmbed`
3. 点 **分享 → 复制链接**
   → 粘贴到 `data/site.js` 的 `mapLink`（联系页「Get Directions」按钮用）

---

## 六、文件结构

```
massage website silent/
├── index.html         主页
├── services.html      项目介绍
├── pricing.html       价格
├── products.html      产品
├── contact.html       联系我们
├── css/style.css      样式（颜色、字体在文件最上方 :root 里）
├── js/main.js         脚本（一般不用改）
├── images/            放你自己的图片
└── data/              ← 你要填写的内容都在这里
    ├── site.js        店铺信息 / 地址 / 时间 / 地图
    ├── deal.js        主页弹窗优惠
    ├── services.js    项目表格
    ├── pricing.js     价目表
    └── products.js    产品表格
```

---

## 七、改颜色 / 字体（可选）

打开 `css/style.css`，最上方 `:root { ... }` 里可调整主色调：
- `--sage` 主绿色　`--terracotta` 强调橙色　`--cream` 背景米色

如需上线（让别人通过网址访问），把整个文件夹上传到任意静态托管即可
（如 GitHub Pages、Netlify、阿里云 OSS 等），全部是静态文件无需服务器。
