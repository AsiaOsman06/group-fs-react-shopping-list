const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route

router.get("/", (req, res) => {
  const sqlText = `
      SELECT * FROM "shoppingList"
        ORDER BY "name" ;
    `;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good servers always respond.
    });
});


// Setup a POST route 
router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = 
        `INSERT INTO "shoppingList"
                 ("name", "quantity", "unit")
                 VALUES ($1, $2, $3)`;
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
//

module.exports = router;