'use strict';

/**
 * kitchen-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kitchen-admin.kitchen-admin');
