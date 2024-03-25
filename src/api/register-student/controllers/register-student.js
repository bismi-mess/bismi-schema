"use strict";

/**
 * A set of functions called "actions" for `registerStudent`
 */

module.exports = {
  getArticles: async (ctx, next) => {
    try {
      const { licenseKey } = ctx.request.body;

       ctx.body = {
        data:licenseKey
       };
    } catch (err) {
      ctx.badRequest("Get articles controller error", { moreDetails: err });
    }
  }
};
