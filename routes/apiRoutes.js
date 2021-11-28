// dependencies
const router = require('express').Router();
const Workout = require("../models/workout");


//get last workout
router.get("/workouts", (req, res) => {
  res.send({ type: 'GET' });
   

});

// create new workout
router.post("/workouts", (req, res) => {
 res.send(

  {
      "name": "sample",
      "time": "Wed, 21 Oct 2015 18:27:50 GMT"
  })
});

// add exercise
router.put("workouts/:id", (req, res) => {
  
});

// get chart data past 7 days weight and duration
router.get("/workouts/range", (req, res) => {
  
  res.send({ type: 'GET' })
});

module.exports = router;