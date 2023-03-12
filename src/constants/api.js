module.exports = {
  // api cho việc login
  login: "/api/auth/login",
  // api cho việc register
  register: "/api/auth/register",

  // xem các list đơn hàng
  get_list_orders: "/api/orders",
  // tìm kiếm đơn hàng
  search_list_orders: "/api/orders/search",
  //get từng oerder bằng id
  get_order_by_id: (id) => `/api/orders/search/${id}`,

  //Lấy ra dữ liệu data user
  get_user_by_id: (id) => `/api/users/${id}`,
  //cập nhật dữ liệu data user
  update_user_by_id: `/api/users/update`,

  // lấy dữ liệu bài viết
  get_sytempost_by_id: (id) => `/api/products/${id}`,
  //cập nhật dữ liệu bài viết
  update_sytempost_by_id: `/api/products/update`,

  // dùng chung
  // api cho việc get menu
  get_navbar: "/api/menu",
  // api cho việc get layout trang home
  get_home: "/api/menu",
};
