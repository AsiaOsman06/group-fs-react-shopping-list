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

router.put('/:id', (req,res) => {
    // Update Single Item reset purchase status
    console.log("In PUT route"); // logging which route is called
    const sqlText =`
        UPDATE "shoppingList"
        SET "isPurchased" = TRUE;
        
    `;
   
    pool.query(sqlText)
        .then((result) => {
            console.log ("Purchased item");
            res.sendStatus(200); //return success
        })
        .catch((error)=>{
            console.log("Error updating purchase status: ", error);
            res.send(500); //return error code
        })
});
//

router.delete('/:id',(req,res) => {
    // Delete Single Item
    console.log("DELETE single item Route");
    console.log(req.params.id) //Confirm which item is to be deleted
    const sqlText = `
        DELETE FROM "shoppingList"
        WHERE ID = $1;
    `;
    let sqlValues = [req.params.id];
    pool.query(sqlText, sqlValues)
        .then ((response) => {
            console.log("deleted item");
            res.sendStatus(200); // Success!
        })
        .catch ((error)=>{
            console.log("Error deleting Item ", error);
            res.sendStatus(500);// error
        })
})


router.delete('/',(req,res) => {
    // Clear All Item
    console.log("Clear All item Route");
    console.log(req.body) 
    const sqlText = `
        DELETE FROM "shoppingList";
       
    `;

    pool.query(sqlText)
        .then ((response) => {
            console.log("Cleared item");
            res.sendStatus(200); // Success!
        })
        .catch ((error)=>{
            console.log("Error deleting Item ", error);
            res.sendStatus(500);// error
        })
})
 module.exports = router;