const powerPlan = {
  title: "Sculpt & Strength: 12-Week Power Plan",
  duration: "90 minutes",
  daysPerWeek: 6,
  mainGoal: "Build Muscle and Strength",
  trainingLevel: "Intermediate",
  workouts: [
    {
      day: "Monday",
      type: "Push",
      exercises: [
        { name: "Dumbbell Shoulder Press", sets: 3, reps: 8 },
        { name: "Shoulder Machine Press", sets: 3, reps: 8 },
        { name: "Dumbbell Bench Press", sets: 3, reps: 8 },
        { name: "Incline Bench Press Machine", sets: 3, reps: 8 },
        { name: "Eccentric Only Dips", sets: 3, reps: 8 },
      ],
    },
    {
      day: "Tuesday",
      type: "Pull",
      exercises: [
        { name: "Bent Over Dumbbell Row", sets: 3, reps: 8 },
        { name: "Seated Cable Row", sets: 3, reps: 8 },
        { name: "Lat Pull Down", sets: 3, reps: 8 },
        { name: "Underhand Lat Pull Down", sets: 3, reps: 8 },
        { name: "Dumbbell Curl", sets: 3, reps: 8 },
        { name: "Ab Crunch", sets: 3, reps: 20 },
        { name: "Ab Bicycle", sets: 3, reps: 20, eachSide: true },
      ],
    },
    {
      day: "Wednesday",
      type: "Legs",
      exercises: [
        { name: "Squat", sets: 3, reps: 8 },
        { name: "Romanian Deadlift", sets: 3, reps: 8 },
        { name: "Hip Thrust", sets: 3, reps: 8 },
        { name: "One Leg Leg Press", sets: 3, reps: 8 },
        { name: "Leg Press Calf Raise", sets: 3, reps: 12 },
        { name: "Seated Calf Raise", sets: 3, reps: 12 },
      ],
    },

    {
      day: "Friday",
      type: "Push",
      exercises: [
        { name: "Lateral Raise", sets: 3, reps: 15 },
        { name: "Weight Plate Front Raise", sets: 3, reps: 15 },
        { name: "Incline Dumbbell Press", sets: 3, reps: 15 },
        { name: "Pec Deck", sets: 3, reps: 15 },
        { name: "Rope Press Down", sets: 3, reps: 15 },
        { name: "Skullcrusher", sets: 3, reps: 15 },
        { name: "Hanging Leg Raise", sets: 3, reps: 12 },
        { name: "Plank", sets: 3, reps: "1 minute" },
      ],
    },

    {
      day: "Saturday",
      type: "Pull",
      exercises: [
        { name: "Machine Row", sets: 3, reps: 15 },
        { name: "One Arm Dumbbell Row", sets: 3, reps: 15, eachSide: true },
        { name: "Cable Face Pull", sets: 3, reps: 15 },
        { name: "V-Bar Pull Down", sets: 3, reps: 15 },
        { name: "Shotgun Row", sets: 3, reps: 15 },
        { name: "Cable Curl", sets: 3, reps: 15 },
        { name: "Preacher Curl", sets: 3, reps: 15 },
      ],
    },

    {
      day: "Sunday",
      type: "Legs",
      exercises: [
        { name: "Leg Press", sets: 3, reps: 15 },
        { name: "Goblet Squat", sets: 3, reps: 15 },
        { name: "Dumbbell Stiff Legged Deadlift", sets: 3, reps: 15 },
        { name: "Leg Curl", sets: 3, reps: 15 },
        { name: "Hypertextension", sets: 3, reps: 15 },
        { name: "Bodyweight Glute Bridge", sets: 3, reps: 15 },
        { name: "Standing Calf Raise", sets: 3, reps: 20 },
      ],
    },
  ],
};

export default powerPlan;
