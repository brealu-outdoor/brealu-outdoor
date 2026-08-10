# Brealu Outdoor — 新闻/案例内容模板规范与发布指南

> 用途：支撑每周新闻板块、项目案例与产品更新的 SEO 内容生产。
> 目标市场：加拿大（雪载/重载）、法国（地中海海岸/盐雾）、美国（飓风区）。

---

## 一、页面结构规范（新建 news/project 页面必须遵守）

### 1. `<head>` 元数据（必填）
```html
<title>主关键词 | Brealu Outdoor</title>
<meta name="description" content="（≤160字符，包含1个主关键词+1个Geo词，含行动召唤）">
<link rel="canonical" href="https://www.brealuoutdoor.com/你的文件名.html" />
```
- **规则**：`title` ≤ 60 字符；每页唯一；不得与产品页重复。
- **规则**：文件名必须包含主关键词（连字符分隔，全小写），例如 `heavy-snow-load-pergola-engineering-testing-report.html`。

### 2. H1 / H2 层级（必填）
- 每页**只有一个 H1**（主关键词 + 地域词，如 "Arctic-Spec Pergola Engineering for Quebec Winters"）。
- H2 用于分节（Challenge / Solution / Technical Data / FAQ）；H3 用于技术细节。
- 正文 ≥ 600 词；至少 2 张真实图片（含 Alt 关键词）。

### 3. Geo 关键词埋点（必填）
- **加拿大市场**：snow load, Quebec, Ontario, Arctic Spec, -40°C, 90cm+ snowfall
- **法国市场**：French Riviera, Côte d'Azur, Provence, salt spray, RAL 1015, Mistral wind
- **美国市场**：hurricane, Miami-Dade, wind load 220km/h, Florida
- 每篇文章至少出现 2 个地域词，且必须自然融入正文（禁止堆砌）。

### 4. 内链要求（必填）
- 每篇新闻/案例**必须**内链到 1-2 个相关产品页：
  - BRE-R230 → `motorized-retractable-pergola-r230-collection.html`
  - BRE-220 → `heavy-duty-aluminum-pergola-220-collection.html`
  - BRE-175U → `bioclimatic-louvered-pergola-175u-collection.html`
  - BRE-140U → `aluminum-pergola-kit-140u-collection.html`
- 锚文本使用关键词（如 "heavy-duty snow-load pergola"），不要用 "click here"。
- 同时回链到案例页 `outdoor-pergola-projects-gallery.html` 与对比页 `pergola-model-comparison-guide.html`。

### 5. 编码与部署（必填）
- 所有文件保存为 **UTF-8 with BOM**。
- 新页面文件名必须加入 `sitemap.xml`，并在首页/新闻列表页添加入口链接。
- 部署：`git add . && git commit && git push origin main`（触发 Cloudflare Pages 自动构建）。

---

## 二、发布检查清单（每次发布前逐项核对）

- [ ] Title ≤ 60 字符，含主关键词
- [ ] Meta description ≤ 160 字符，含 Geo 词
- [ ] Canonical 指向自身 URL（带 www）
- [ ] 只有一个 H1，正文 ≥ 600 词
- [ ] 至少 2 张图片且 Alt 含关键词
- [ ] 至少 2 个内链指向产品页/案例页/对比页
- [ ] 文件名含主关键词、UTF-8 with BOM
- [ ] sitemap.xml 已加入新 URL
- [ ] 本地无死链（目标文件存在）
- [ ] OKKI 追踪代码在 `</body>` 前（复制自 index.html）

---

## 三、高价值长尾关键词主题建议（首期 5 篇）

| # | 主题方向 | 目标关键词 | 目标地域 | 对应产品内链 |
|---|---------|-----------|---------|-------------|
| 1 | 加拿大冬季凉亭维护指南 | "pergola snow removal guide" / "winterize aluminum pergola" | 加拿大（魁北克/安大略） | BRE-220 |
| 2 | 沿海盐雾环境选材对比 | "salt resistant pergola coating" / "coastal pergola corrosion" | 法国蔚蓝海岸 | BRE-R230 |
| 3 | 飓风区凉亭安装标准 | "hurricane rated pergola" / "wind load pergola installation" | 美国佛罗里达 | BRE-220 |
| 4 | RAL 定制色在法国别墅的应用 | "RAL 1015 pergola" / "custom color aluminum pergola" | 法国（普罗旺斯） | BRE-175U |
| 5 | 模块化凉亭 DIY 安装时间表 | "DIY pergola installation time" / "modular pergola assembly" | 北美全境 | BRE-140U |

**选题原则**：优先选择"有明确购买意图 + 竞争度中等 + 与产品卖点强关联"的长尾词；每篇主题同时服务 SEO 排名与销售转化两个目标。

---

## 四、每周节奏（与用户约定）

- **周一**：用户提供素材（项目照片/背景关键词/技术变更点）
- **周三**：完成内容撰写 + SEO 埋点 + 本地预览
- **周五**：用户确认 → 部署上线 → GSC 手动提交新 URL
