// dependencies
const router = require('express').Router();
const Workout = require('../models/workout');

// create new workout
router.post("/workouts", (req, res) => {
  Workout.create(req.body).then(function(dbWorkout){
    res.send(dbWorkout);
    console.log(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });  
});

//get last workout
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: {
      totalDuration: {$sum: '$exercises.duration'}
    }}
  ])
  .then((dbWorkout) => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// add exercise
router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate({_id: req.params.id}, {$push:{exercises: req.body}})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// get chart data past 7 days weight and duration
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration'},
        totalWeight: {$sum: '$exercises.weight'}
      },
    },
  ])
  .then((dbWorkout) => {
    res.json(dbWorkout)
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;