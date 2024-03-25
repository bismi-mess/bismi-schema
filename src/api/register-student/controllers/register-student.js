'use strict';

/**
 * A set of functions called "actions" for `registerStudent`
 */

module.exports = {
  getArticles: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::register-student.getArticles")
        .getArticles();
      console.log("Data", data);
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Get articles controller error", { moreDetails: err });
    }
  }
};
