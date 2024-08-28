'use strict';

/**
 * user-web controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-web.user-web');
