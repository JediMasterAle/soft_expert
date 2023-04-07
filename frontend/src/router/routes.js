const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/tipo", component: () => import("pages/Type.vue") },
      { path: "/produto", component: () => import("pages/Product.vue") },
      { path: "/venda", component: () => import("pages/Sale.vue") },
      { path: "/venda/:id", component: () => import("pages/SaleProducts.vue") }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
