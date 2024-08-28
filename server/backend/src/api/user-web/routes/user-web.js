'use strict';

/**
 * user-web router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-web.user-web');
