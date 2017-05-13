const express = require('express');
const router = express.Router();
const Client = require('bitcoin-core');

const navClient = new Client({
  username: "navpi", //RPC Username
  password: "securepass", //RPC Password
  port: 44444,
  host: "127.0.0.1",
})

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/navcoin/getinfo', (req, res) => {
  navClient.getInfo().then((info) => {
    console.log(info);
    res.send(info);
  });

});

module.exports = router;
