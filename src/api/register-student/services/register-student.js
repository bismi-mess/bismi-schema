'use strict';

/**
 * registerStudent service
 */

module.exports = {
    getArticles: async () => {
        try {
            // Fetching data
           console.log("Service");
            return {"data":"No "};
        } catch (err) {
            return err;
        }
    },
};
