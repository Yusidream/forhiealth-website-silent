/* =============================================================
   PRICE LIST  /  主要项目价目表（表格）
   -------------------------------------------------------------
   每一个 { ... } 就是价目表里的一行。
   group 是分类标题；note 是该分类下的小字说明（可省略）。
   复制 { ... } 新增一行，删除一段即可移除一行。
   注意：请使用英文直引号 " "，不要用中文引号 “ ”，否则网页会出错。
   ============================================================= */

const PRICING = [
  {
    group: "Acupuncture",
    items: [
      { name: "Acupuncture", duration: "1 session", price: "$60" },
      { name: "Acupuncture & Massage", duration: "60 mins", price: "$105" },
      { name: "Acupuncture & Massage", duration: "90 mins", price: "$145" },
      { name: "Cosmetic Acupuncture", duration: "45 mins", price: "$85" },
    ],
  },
  {
    group: "Remedial Massage",
    note: ["* Health Fund Rebate Available", "* Massage Oil Included"],
    items: [
      { name: "Remedial Massage", duration: "30 mins", price: "$55" },
      { name: "Remedial Massage", duration: "45 mins", price: "$75" },
      { name: "Remedial Massage", duration: "60 mins", price: "$95" },
      { name: "Remedial Massage", duration: "90 mins", price: "$135" },
      { name: "Remedial Massage", duration: "120 mins", price: "$175" },
      { name: "Pregnancy Massage", duration: "30 mins", price: "$55" },
      { name: "Pregnancy Massage", duration: "60 mins", price: "$95" },
      { name: "Lymphatic Drainage", duration: "60 mins", price: "$95" },
    ],
  },
  {
    group: "Deep Tissue / Acupressure Massage",
    items: [
      { name: "Neck & Shoulders", duration: "20 mins", price: "$35" },
      { name: "Neck & Shoulders", duration: "30 mins", price: "$50" },
      { name: "Neck, Shoulders & Back", duration: "30 mins", price: "$50" },
      { name: "Neck, Shoulders & Back", duration: "45 mins", price: "$70" },
      { name: "Upper Body / Back & Leg", duration: "45 mins", price: "$70" },
      { name: "Whole Body", duration: "60 mins", price: "$90" },
      { name: "Whole Body", duration: "90 mins", price: "$130" },
      { name: "Whole Body", duration: "120 mins", price: "$170" },
    ],
  },
  {
    group: "Reflexology",
    items: [
      { name: "Reflexology", duration: "30 mins", price: "$50" },
      { name: "Reflexology", duration: "45 mins", price: "$70" },
      { name: "Reflexology", duration: "60 mins", price: "$90" },
      { name: "Reflexology & Back", duration: "60 mins", price: "$95" },
      { name: "Reflexology & Back", duration: "90 mins", price: "$135" },
    ],
  },
  {
    group: "Other Natural Therapies",
    items: [
      { name: "Meridian Facial Massage", duration: "30 mins", price: "$60" },
      { name: "Traditional Meridian Massage", duration: "45 mins", price: "$75" },
      { name: "Traditional Meridian Massage", duration: "60 mins", price: "$95" },
      { name: "Gua Sha Therapy", duration: "15 mins", price: "$30" },
      { name: "Cupping Therapy", duration: "1 session", price: "$30" },
      { name: "Sliding Cupping Therapy", duration: "1 session", price: "$40" },
      { name: "Cupping & Massage", duration: "45 mins", price: "$80" },
      { name: "Cupping & Massage", duration: "60 mins", price: "$100" },
      { name: "Ear Candling & Head Massage", duration: "30 mins", price: "$60" },
    ],
  },
  {
    group: "Add-ons & Extras",
    items: [
      { name: "Aroma Massage Oil", duration: "", price: "$10" },
      { name: "Herbal Massage Oil", duration: "", price: "$15" },
      { name: "Hot Stone Add-on", duration: "", price: "$15" },
    ],
  },
];

// 价目表下方的小字说明（可留空 ""）
const PRICING_NOTE =
  "Private health fund rebates available on eligible treatments. " +
  "Prices include GST.";
