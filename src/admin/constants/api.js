module.exports = {
  // api cho việc login

  // api cho việc tải và đọc file
  uploadExcel: "/api/orders/upload",

  // thao tác menu
  getDataMenu: "/api/menu",
  updateMenu: "/api/menu/update",

  // thao tác với các bài đăng hệ thống
  get_sytempost_by_id: (id) => `/api/menu/article/${id}`,
  //cập nhật dữ liệu bài viết
  update_sytempost: `/api/menu/article/update`,
};
