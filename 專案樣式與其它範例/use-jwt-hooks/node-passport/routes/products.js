var express = require('express')
var router = express.Router()

const passport = require('passport')

const authenticateJWT = require('../middleware/jwt')

const foods = [
  { id: 1, description: '香蕉' },
  { id: 2, description: '芒果' },
  { id: 3, description: '芭樂' },
]

// router.get('/foods', authenticateJWT, (req, res) => {
//   res.json(foods)
// })

router.get(
  '/foods',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json(foods)
  }
)

router.post(
  '/foods',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    foods.push({
      id: foods.length + 1,
      description: 'new food',
    })
    res.json({
      message: 'Food created!',
    })
  }
)

module.exports = router
