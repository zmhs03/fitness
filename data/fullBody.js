const fullBody = {
  title: "Full Body Workout Routine",
  duration: "120 minutes",
  daysPerWeek: 3,
  mainGoal: "Build Muscle",
  trainingLevel: "Beginner",
  workouts: [
    {
      day: "Monday",
      type: "Full Body",
      exercises: [
        { name: "Squats", sets: 3, reps: 5 },
        {
          name: "Bench Press (Ramped)",
          sets: 3,
          reps: 5,
          notes: "Ramp: 60%, 80%, 100% weights",
        },
        {
          name: "Barbell Row (Ramped)",
          sets: 3,
          reps: 5,
          notes: "Ramp: 60%, 80%, 100% weights",
        },
        { name: "Upright Row", sets: 3, reps: 10 },
        { name: "Skullcrushers", sets: 3, reps: 10 },
        { name: "Dumbbell Curls", sets: 3, reps: 10 },
        { name: "Legs Curl", sets: 3, reps: 15 },
        { name: "Ab Wheel Roll Out", sets: 3, reps: 15 },
      ],
    },
    {
      day: "Wednesday",
      type: "Full Body",
      exercises: [
        {
          name: "Deadlifts (Ramped)",
          sets: 3,
          reps: 5,
          notes: "Ramp: 60%, 80%, 100% weights",
        },
        { name: "Romanian Deadlift", sets: 3, reps: 12 },
        { name: "Seated Overhead Press", sets: 3, reps: 10 },
        { name: "Pull Ups", sets: 3, reps: 15 },
        { name: "Dips", sets: 3, reps: 20 },
        { name: "Barbell Shrugs", sets: 3, reps: 10 },
        { name: "Seated Calf Raise", sets: 3, reps: 12 },
        { name: "Plank", sets: 3, reps: "1 minute" },
      ],
    },
    {
      day: "Friday",
      type: "Full Body",
      exercises: [
        {
          name: "Squat (Ramped)",
          sets: 3,
          reps: 5,
          notes: "Ramp: 60%, 80%, 100% weights",
        },
        { name: "Squats ", sets: 1, reps: 20 },
        { name: "Incline Dumbbell Bench Press ", sets: 3, reps: 10 },
        { name: "One Arm Dumbbell Row", sets: 3, reps: 15 },
        { name: "Seated Arnold Press", sets: 3, reps: 15 },
        { name: "Cable Tricep Extensions", sets: 3, reps: 10 },
        { name: "Barbell Curls", sets: 3, reps: 10 },
        { name: "Legs Curl", sets: 3, reps: 15 },
        { name: "Ab Wheel Roll Out", sets: 3, reps: 15 },
      ],
    },
  ],
};

export default fullBody;
