const cardio = {
  title: "Cardio",
  duration: "60 minutes",
  daysPerWeek: 3,
  mainGoal: "Build Functional Strength and Endurance",
  trainingLevel: "Intermediate",
  workouts: [
    {
      day: "Tuesday",
      type: "Full Body",
      exercises: [
        { name: "Rowing Machine", sets: 1, time: "10 minutes" },
        { name: "Treadmill", sets: 1, time: "20 minutes" },
        { name: "Crosstrainer", sets: 1, time: "10 minutes" },
        { name: "Leg Raises", sets: 3, reps: 15 },
        { name: "Toe Touches", sets: 3, reps: 12 },
        { name: "In & Outs", sets: 3, reps: 10 },
      ],
    },

    {
      day: "Thursday",
      type: "HIIT",
      exercises: [
        { name: "Low Skaters", sets: 3, reps: 20 },
        { name: "Jumping Jacks", sets: 3, reps: 15 },
        { name: "Alt Lunge to Knee Ups", sets: 3, reps: 20 },
        { name: "High Knees", sets: 3, reps: 30 },
      ],
    },
  ],
};

export default cardio;
