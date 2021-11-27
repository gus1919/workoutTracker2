// dependencies
const express = require('express');
const { route } = require('./html-routes');
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

// get chart data past 7 days weight and duration
router.get("/workout/range", (req, res) => {
    Workout.find({})
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
    .sort( { "day": -1, "_id": -1 })
    .limit(7)
    .then(dbWorkout => {
        dbWorkout.reverse();
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;