const router = require('express').Router();

const fooditemsRoutes = require('./fooditems-routes');

router.use('/fooditems', itemsRoutes);

module.exports = router;