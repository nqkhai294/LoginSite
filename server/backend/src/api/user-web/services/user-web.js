'use strict';

/**
 * user-web service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-web.user-web');
