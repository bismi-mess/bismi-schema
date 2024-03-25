// module.exports = {
//   routes: [
//     // {
//     //  method: 'GET',
//     //  path: '/registerStudent',
//     //  handler: 'registerStudent.exampleAction',
//     //  config: {
//     //    policies: [],
//     //    middlewares: [],
//     //  },
//     // },
//   ],
// };
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/register-student",
      handler: "register-student.getArticles",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};