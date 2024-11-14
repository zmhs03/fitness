const homeWorkout = {
  title: "Workout at Home",
  duration: "45 minutes",
  daysPerWeek: 3,
  mainGoal: "Build Functional Strength and Endurance",
  trainingLevel: "Intermediate",
  workouts: [
    {
      day: "Monday",
      type: "Full Body",
      exercises: [
        { name: "Kettlebell Swings", sets: 3, reps: 15 },
        { name: "Box Jumps", sets: 4, reps: 12 },
        { name: "Burpees", sets: 3, reps: 10 },

        { name: "Clean & Jerks", sets: 3, reps: 15 },
        { name: "Walking Lunges", sets: 3, reps: 12 },
        { name: "Tuck Jumps", sets: 3, reps: 10 },

        { name: "Step Ups (each leg)", sets: 3, reps: 15 },
        { name: "Reverse Grip Row", sets: 3, reps: 12 },
        { name: "Push Ups", sets: 3, reps: 10 },
      ],
    },

    {
      day: "Wednesday",
      type: "Full Body",
      exercises: [
        { name: "Rowing Machine", sets: 1, time: "5 minutes" },
        { name: "Mountain Climbers", sets: 4, reps: 20 },
        { name: "Battle Ropes", sets: 4, reps: 15 },
        { name: "Medicine Ball Slams", sets: 4, reps: 15 },
        { name: "Lateral Box Jumps", sets: 4, reps: 12 },

        { name: "Dumbbell Snatches (each arm)", sets: 4, reps: 10 },
        { name: "Burpees", sets: 4, reps: 12 },
        { name: "Russian Twists (with medicine ball)", sets: 4, reps: 15 },
        { name: "Plank", sets: 4, time: "1 minute" },
      ],
    },

    {
      day: "Friday",
      type: "Total Body Circuit",
      exercises: [
        { name: "Renegade Row", sets: 5, time: 16 },
        { name: "Sumo Squat", sets: 5, reps: 12 },
        { name: "Devil Press", sets: 5, reps: 10 },
        { name: "Alt Snatches", sets: 5, reps: 16 },
        { name: "Dual Sit Ups", sets: 5, reps: 12 },
      ],
    },
  ],
};

export default homeWorkout;
