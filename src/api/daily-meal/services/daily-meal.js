'use strict';

/**
 * daily-meal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-meal.daily-meal');
