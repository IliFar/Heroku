var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", (req, res) => { 
  // Reading Json file
  fs.readFile("land.json", (err, data) =>{
    if (err) {
        console.log(err);
        res.status(400).json({success: false})
        return
    }

    const lands = JSON.parse(data)
    lands.push(req.body)

    // Writing to Json File
    fs.writeFile("land.json", JSON.stringify(lands, null, 2), (err) => {
        if (err) {
            console.log(err);
        }
    })

    res.status(200).json({success: true})
    return;
  });
});

module.exports = router;
