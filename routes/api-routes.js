// dependencies
const express = require('express');
const router = express.Router();

//get all workouts
router.get("/workout", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// add new exercise
router.post("/workout", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// continue exercise
router.put("workout/:id", (req, res) => {
    Workout.updateOne({
        _id: req.params.id
    }, {
        $push: {exercises: req.body}
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// get chart data


module.exports = router;