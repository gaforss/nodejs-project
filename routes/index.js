var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: "Alex's Web App = Lead Generation",
    isAuthenticated: req.oidc.isAuthenticated()
  });
});


router.get('/dashboard', requiresAuth(), function (req, res, next) {
  res.render('dashboard', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Web App Dashboard'
  });
});

router.get('/integrations', requiresAuth(), function (req, res, next) {
  res.render('integrations', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Web App Integrations'
  });
});

router.get('/leads', requiresAuth(), function (req, res, next) {
  res.render('leads', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'We App Leads'
  });
});

module.exports = router;
