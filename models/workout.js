const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create workout schema
const workoutSchema = new Schema({
  day: {type: Date, default: () => Date.now()},
  exercises: [{

    type: {String, allowNull: false},
    name: {String, allowNull: false},
    duration: {Number, allowNull: false},
    weight: {Number},
    reps: {Number},
    sets: {Number},
    distance: {Number}    
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;