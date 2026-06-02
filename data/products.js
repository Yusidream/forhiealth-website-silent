/* =============================================================
   PRODUCTS  /  产品页（表格）
   -------------------------------------------------------------
   每一个 { ... } 就是一个产品（一张卡片）。
   image: 本地图片 (例: "images/oil.jpg") 或网络图片地址。
   price: 价格文字，可留空 "" 不显示价格。
   tag:   角标文字（例如 "Best Seller" / "New"），可留空 ""。
   ============================================================= */

const PRODUCTS = [
  {
    name: "Soothing Massage Oil",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    description:
      "A blend of cold-pressed jojoba and sweet almond oils, lightly scented " +
      "with lavender to extend that post-massage calm at home.",
    price: "$32",
    tag: "Best Seller",
  },
  {
    name: "Eucalyptus Muscle Balm",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    description:
      "A warming balm with native eucalyptus and menthol — ideal for tired, " +
      "aching muscles after a long day or a tough workout.",
    price: "$28",
    tag: "",
  },
  {
    name: "Herbal Wellness Tea",
    image:
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    description:
      "A calming caffeine-free blend of chamomile, ginger and chinese herbs " +
      "to support relaxation and digestion.",
    price: "$22",
    tag: "",
  },
  {
    name: "Heat Therapy Wheat Bag",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    description:
      "Microwave-ready wheat bag scented with lavender. Perfect for soothing " +
      "the neck, shoulders and lower back at home.",
    price: "$35",
    tag: "New",
  },
  {
    name: "Cervical Traction Apparatus",
    image: "images/cervical-traction.jpg",
    description:
      "An inflatable neck traction device that gently stretches the cervical " +
      "spine to ease neck tension and pain — a convenient way to support your " +
      "recovery at home between treatments.",
    price: "$45",
    tag: "Health Care",
  },
  {
    name: "Gift Voucher",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    description:
      "The gift of relaxation. Available for any treatment or dollar value — " +
      "beautifully presented and ready to give.",
    price: "From $55",
    tag: "",
  },
];
