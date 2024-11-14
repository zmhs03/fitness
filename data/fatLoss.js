const loseFat = {
  title: "Working to lose Fat",
  duration: "90 minutes",
  daysPerWeek: 6,
  mainGoal: "Build Muscle",
  trainingLevel: "Beginner",
  workouts: [
    {
      day: "Monday",
      type: "Upper Body",
      exercises: [
        { name: "Incline Bench Press", sets: 3, reps: 10 },
        { name: "One Arm Dumbbell Row", sets: 3, reps: 12 },
        { name: "Seated Bench Press", sets: 3, reps: 10 },
        { name: "Pull Ups", sets: 3, reps: 10 },
        { name: "Skullcrushers", sets: 3, reps: 12 },
        { name: "Dumbbell Curls", sets: 3, reps: 12 },
      ],
    },
    {
      day: "Wednesday",
      type: "Legs",
      exercises: [
        { name: "Squats", sets: 3, reps: 10 },
        { name: "Leg Curl", sets: 3, reps: 15 },
        { name: "Leg Extension", sets: 3, reps: 15 },
        { name: "Leg Press Calf Raise", sets: 3, reps: 20 },
        { name: "Plank", sets: 3, reps: "1 minute" },
        { name: "Twisting Hanging Knee Raise", sets: 3, reps: 20 },
      ],
    },
    {
      day: "Friday",
      type: "Upper Body",
      exercises: [
        { name: "Dumbbell Bench Press", sets: 3, reps: 10 },
        { name: "Barbell Row", sets: 3, reps: 10 },
        { name: "Dumbbell Lateral Raise", sets: 3, reps: 15 },
        { name: "Lat Pull Down", sets: 3, reps: 13 },
        { name: "Cable Tricep Extensions", sets: 3, reps: 12 },
        { name: "EZ Bar Preacher Curl", sets: 3, reps: 12 },
      ],
    },

    {
      day: "Sunday",
      type: "Legs",
      exercises: [
        { name: "Leg Press", sets: 3, reps: 20 },
        { name: "Stiff Legged Deadlift", sets: 3, reps: 10 },
        { name: "Walking Dumbbell Lunge", sets: 3, reps: 10 },
        { name: "Seated Calf Raise", sets: 3, reps: 20 },
        { name: "Cable Crunch", sets: 3, reps: 20 },
        { name: "Russian Twist", sets: 3, reps: 20 },
      ],
    },
  ],
};

export default loseFat;
