/* =============================================================
   HOMEPAGE POPUP DEAL  /  主页弹窗优惠
   -------------------------------------------------------------
   想在主页弹出一个“最新优惠”窗口时，填写下面的内容。
   如果当前没有优惠活动，请把整段改成：
       const ACTIVE_DEAL = null;
   这样主页就不会弹出任何窗口。
   ============================================================= */

const ACTIVE_DEAL = {
  // 弹窗大标题
  title: "Winter Wellness Treatment",

  // 优惠副标题 / 折扣亮点
  highlight: "Heated Bed",

  // 详细描述
  description:
    "Come in, warm up, and let your body relax. " +
    "Heated beds for your comfort this winter.",

  // 有效期（显示用文字，可留空 ""）
  validUntil: "",

  // 弹窗配图（本地图片放 images/ 文件夹，或填写网络图片地址）
  image:
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",

  // 按钮文字
  buttonText: "Book Now",

  // 按钮链接（电话、预约页面或外部链接均可）
  buttonLink: "contact.html",
};

/* 没有优惠时改用这一行（把上面整段删掉或注释掉）：
   const ACTIVE_DEAL = null;
*/
