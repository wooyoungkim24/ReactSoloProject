const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require("./business.js")
const reviewRouter = require("./review.js")
const cityRouter = require("./city.js")
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/business',businessRouter)
router.use('/review', reviewRouter)
router.use('/city', cityRouter)
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));


// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });
// // GET /api/require-auth

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


module.exports = router;
