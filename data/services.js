/* =============================================================
   SERVICES / TREATMENTS  /  针灸 & 按摩项目介绍（表格）
   -------------------------------------------------------------
   每一个 { ... } 就是一个项目（一行）。
   想新增项目就复制一整段 { ... }, 想删除就把那一段删掉。
   image: 可填本地图片 (例: "images/remedial.jpg") 或网络图片地址。
   ============================================================= */

const SERVICES = [
  {
    name: "Remedial Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    short: "Targeted therapy to relieve tension, pain and muscle knots.",
    description:
      "Our remedial massage targets specific problem areas — perfect for " +
      "chronic pain, sports injuries and postural issues. Each session is " +
      "tailored to your body's needs by experienced therapists.",
    benefits: [
      "Relieves muscle tension & knots",
      "Improves mobility and posture",
      "Supports injury recovery",
    ],
  },
  {
    name: "Traditional Acupuncture",
    image:
      "https://plus.unsplash.com/premium_photo-1661864014725-9d77f571f00a?auto=format&fit=crop&w=900&q=80",
    short: "Time-honoured Chinese medicine to restore natural balance.",
    description:
      "Fine, sterile needles are used to stimulate key points across the " +
      "body, encouraging natural healing and balance. A gentle, calming " +
      "treatment trusted for thousands of years.",
    benefits: [
      "Eases stress & anxiety",
      "Supports better sleep",
      "Promotes natural healing",
    ],
  },
  {
    name: "Relaxation Massage",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
    short: "Slow, flowing strokes to melt away everyday stress.",
    description:
      "A soothing full-body massage using long, flowing strokes to calm " +
      "the nervous system and leave you deeply relaxed. The perfect way to " +
      "unwind after a busy week.",
    benefits: [
      "Reduces stress & fatigue",
      "Improves circulation",
      "Calms the mind",
    ],
  },
  {
    name: "Deep Tissue Massage",
    image: "images/deep-tissue.jpg",
    short: "Firm pressure to reach the deeper layers of muscle.",
    description:
      "Using firm, focused pressure, deep tissue massage reaches the deeper " +
      "muscle layers and connective tissue — ideal for stubborn tension and " +
      "long-standing tightness.",
    benefits: [
      "Releases deep tension",
      "Breaks down adhesions",
      "Restores range of motion",
    ],
  },
  {
    name: "Cupping Therapy",
    image: "images/cupping.jpg",
    short: "Traditional suction therapy to boost circulation.",
    description:
      "Gentle suction cups are placed on the skin to increase blood flow, " +
      "relieve muscle tightness and support detoxification. Often combined " +
      "with acupuncture or massage.",
    benefits: [
      "Boosts blood flow",
      "Relieves muscle stiffness",
      "Aids recovery",
    ],
  },
  {
    name: "Reflexology",
    image:
      "https://images.unsplash.com/photo-1728497872660-cc6b16238c3a?auto=format&fit=crop&w=900&q=80",
    short: "Pressure-point foot therapy for whole-body wellbeing.",
    description:
      "By applying pressure to specific points on the feet, reflexology " +
      "encourages relaxation and balance throughout the entire body. A " +
      "wonderfully grounding treatment.",
    benefits: [
      "Deeply relaxing",
      "Eases tired feet & legs",
      "Supports overall balance",
    ],
  },
];
