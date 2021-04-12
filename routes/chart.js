const express = require('express'),
  router = express.Router(),
  dbConnect = require('../dbConnect');

// get user lists
router.get('/', function (req, res) {
  console.log("comming....")
  dbConnect.request().query(`SELECT PLC__INV_TOTAL_ENERGY, LocalCol FROM dbo.REPORT where LocalCol between '2019-02-28 08:01:00.000' and '2019-02-28 18:01:00.000'`).then(result => {
    console.dir(result)
  }).catch(err => {
    // ... error checks
  });
})

module.exports = router;