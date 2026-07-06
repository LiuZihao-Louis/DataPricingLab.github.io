# 零售行业数据资产估值与收益分配研究

副标题：以全渠道智能补货数据服务为核心场景。

本仓库是一个可直接部署到 GitHub Pages 的静态网站。内容基于第三周正式报告与真实证据包整理，展示研究范围、数据资产与服务形成过程、公开收费/计费证据、案例研究、场景化估值原型和收益分配情景模型。

## 文件结构

```text
.
├── index.html                # 网站主页
├── styles.css                # 样式
├── app.js                    # 移动端菜单与估值计算器
├── assets/
│   └── data_value_chain.png  # 数据服务价值形成链
└── docs/
    ├── Week3_Formal_Research_Report_v1.pdf
    └── week3_evidence_pack.md
```

## 本地预览

直接双击 `index.html` 即可查看。估值计算器不依赖外部库或网络环境。

## GitHub Pages 发布

1. 新建 GitHub 仓库，例如 `retail-intelligent-replenishment`。
2. 上传本文件夹的全部文件，保持 `index.html` 位于仓库根目录。
3. 打开仓库的 `Settings` → `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`，分支选 `main`，文件夹选 `/ (root)`。
5. 保存后等待 GitHub Pages 生成公开地址。

## 使用边界

- 网站研究对象是“全渠道智能补货数据服务”，不是原始订单、会员或库存明细的一次性买卖价格。
- 页面中公开材料、谨慎解释和情景假设已尽量分开。
- 估值计算器用于展示收益法结构，不构成市场报价、投资建议或真实合同分配建议。
