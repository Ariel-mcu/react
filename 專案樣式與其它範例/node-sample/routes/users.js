var express = require('express');
var router = express.Router();

// users demo data
const users = [
  {
    id: 1,
    username: 'harry',
    name: 'Harry Potter',
    password: '12345',
    role: 'user',
    address: {
      country: {
        city: 'London',
      },
    },
  },
  {
    id: 2,
    username: 'eddy',
    name:'Eddy',
    password: '33333',
    role: 'admin',
    address: {
      country: {
        city: 'New Taipei City',
      },
    },
  },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(users)
  res.json(users);
});

router.get('/:userid', function (req, res, next) {
  const user = users.find((user) => String(user.id) === req.params.userid)

  if(user)
    res.json(user)
  else
    res.json({message:"no user"})
})

/* POST users listing. */
router.post('/', function (req, res, next) {
  const user = req.body
  users.push(user)

  console.log(users)

  res.json(req.body)
});

/* PUT users listing. */
router.put('/:userId', function (req, res, next) {
  const user = req.body

  const index = users.findIndex((v) => v.id == req.params.userId)
  
  users[index] = user

  console.log(users)
  
  res.json(req.body)
});

module.exports = router;
