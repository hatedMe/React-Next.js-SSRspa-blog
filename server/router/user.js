const Router = require('koa-router');
const router = new Router();
const userController = require('../controller/login');
const articleController = require('../controller/article');


router.post('/login', userController.login );

router.post('/save' , articleController.save);
router.get('/findid/:id' , articleController.findid);
router.get('/find' , articleController.find);



module.exports = router;