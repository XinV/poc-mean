'use strict';

// Articles routes use articles controller
var twitter = require('../controllers/twitter');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.article.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {
    app.post('/twitter/search/:text', twitter.search);
    //app.param('text', twitter.text);
};