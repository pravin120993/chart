const express = require('express'),
  router = express.Router();

// get user lists
router.get('/', function(req, res) {
  let sql = 'SELECT PLC__INV_TOTAL_ENERGY, LocalCol FROM test order by LocalCol ASC; select PLC__INV_TODAY_ENERGY, PLC__INV_EFFICIENCY, PLC__INV_DC_POWER, PLC__INV_DC_CURRENT, PLC__INV_AC_POWER_PERCENT, PLC__INV_AC_POWER FROM test order by LocalCol DESC limit 1';
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      result: {
        chartData: data[0],
        cardData: data[1][0],
      },
    })
  })
});

module.exports = router;