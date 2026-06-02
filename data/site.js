/* =============================================================
   SITE INFORMATION  /  店铺基本信息
   -------------------------------------------------------------
   编辑下面的内容即可更新整个网站的店名、电话、地址、营业时间和
   Google 地图链接。修改后保存文件，刷新网页即可生效。
   ============================================================= */

const SITE = {
  // 店名 / Business name（显示在 logo 主标题，第一行）
  name: "For Health",

  // 副标题（显示在 logo 旁，第二行）
  nameSuffix: "Acupuncture & Natural Therapies",

  // 法定全名（用于版权声明等，请勿留空）
  legalName: "For Health Acupuncture and Natural Therapies",

  // 一句话标语 / Tagline
  tagline: "Relax. Restore. Renew.",

  // 联系电话 / Phone
  phone: "07 3086 9500",

  // 邮箱 / Email
  email: "admin@forhealthacupuncture.com.au",

  // 详细地址 / Address
  address: "Near Woolworths, opposite Asian Grocery Store and Priceline Pharmacy, Grand Plaza Shopping Centre, 27-49 Browns Plains Rd, Browns Plains, Queensland 4118",

  // 营业时间 / Opening hours （每一行一个）
  hours: [
    { day: "Monday – Wednesday", time: "9:00 AM – 5:30 PM" },
    { day: "Thursday",           time: "9:00 AM – 9:00 PM" },
    { day: "Friday – Saturday",  time: "9:00 AM – 5:30 PM" },
    { day: "Sunday",             time: "9:30 AM – 4:30 PM" },
  ],

  // Google 地图“点击前往”链接（在 Google Maps 搜索你的店 → 分享 → 复制链接）
  mapLink: "https://www.google.com/maps/search/?api=1&query=Grand+Plaza+Shopping+Centre+27-49+Browns+Plains+Rd+Browns+Plains+QLD+4118",

  // Google 地图“嵌入”地址（在 Google Maps → 分享 → 嵌入地图 → 复制 src 里的链接）
  // 留空字符串 "" 则不显示嵌入地图，只显示文字地址 + 上面的链接按钮
  mapEmbed: "https://www.google.com/maps?q=Grand+Plaza+Shopping+Centre+27-49+Browns+Plains+Rd+Browns+Plains+QLD+4118&output=embed",

  // 社交媒体（可留空 ""，留空则不显示该图标）
  socials: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    whatsapp:  "",
  },

  // ABN / 营业执照号（可留空）
  abn: "",
};
