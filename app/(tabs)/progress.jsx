import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, Dimensions } from "react-native";
import styles from "../../styleSheetProgress";
import { icons } from "../../constants";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { LineChart, ContributionGraph } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const Progress = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [steps, setSteps] = useState(396); // Set initial values as shown in the image
  const [calories, setCalories] = useState(6);
  const [distance, setDistance] = useState(0.26); // In km
  const [water, setWater] = useState(1.8); // In liters

  const goalSteps = 10000;
  const goalCalories = 320;
  const goalDistance = 5.3; // Example goal distance in km
  const goalWater = 3; // Goal in liters

  // Past 7 days data
  const stepsData = [396, 1200, 1500, 1000, 800, 1300, 2000];
  const distanceData = [0.26, 1.2, 1.5, 1.0, 0.9, 1.3, 2.0];
  const trendsData = [
    { date: "2024-11-06", count: 2 },
    { date: "2024-11-07", count: 4 },
    { date: "2024-11-08", count: 3 },
    { date: "2024-11-09", count: 1 },
    { date: "2024-11-10", count: 5 },
    { date: "2024-11-11", count: 2 },
    { date: "2024-11-12", count: 3 },
  ];

  // Extracting the current year, month, and day
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.getDate();

  // Week array with the start of the current week
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(currentDate);
    day.setDate(currentDay - currentDate.getDay() + i);
    weekDates.push(day);
  }

  // Update date every minute if necessary
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const calculateProgress = (current, goal) => (current / goal) * 100;

  const renderActivityRing = (
    progress,
    size,
    width,
    color,
    label,
    value,
    unit
  ) => (
    <View style={styles.activityRingContainer}>
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={progress}
        tintColor={color}
        backgroundColor="rgba(255, 255, 255, 0.5)"
        rotation={0}
        lineCap="round"
      >
        {() => (
          <Text style={styles.circleText}>
            {value} {unit}
          </Text>
        )}
      </AnimatedCircularProgress>
      <Text style={styles.activityLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/profilepic.jpeg")}
          style={styles.profileImage}
        />
        <View style={styles.headerIcons}>
          <Image source={icons.search} style={styles.icon} />
          <Image source={icons.bookmark} style={styles.icon} />
          <Image source={icons.notifications} style={styles.icon} />
        </View>
      </View>

      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <Text style={styles.monthText}>
          {currentMonth} {currentYear}
        </Text>
        <View style={styles.weekDays}>
          {weekDates.map((date, index) => (
            <Text
              key={index}
              style={[
                styles.dayText,
                date.getDate() === currentDay ? styles.selectedDay : null,
              ]}
            >
              {daysOfWeek[index]}
              {"\n"}
              {date.getDate()}
            </Text>
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentContainer}>
          {/* Activity Rings */}
          <View
            style={[
              styles.rectangleContainer,
              styles.activityRingContainer,
              { backgroundColor: "#34A853" }, //Today's activities
            ]}
          >
            {renderActivityRing(
              calculateProgress(calories, goalCalories),
              150,
              18,
              "#FFFFFF",
              "Today's Workout",
              calories,
              "/320 Kcal"
            )}
          </View>

          <View style={styles.rowContainer}>
            <View
              style={[
                styles.rectangleContainer,
                styles.halfWidthContainer,
                { backgroundColor: "#5DACCE" }, //Water
              ]}
            >
              {renderActivityRing(
                calculateProgress(water, goalWater),
                102,
                14,
                "#FFFFFF",
                "Water",
                water,
                "L"
              )}
            </View>
            <View
              style={[
                styles.rectangleContainer,
                styles.halfWidthContainer,
                { backgroundColor: "#BA93DF" }, //Calories
              ]}
            >
              {renderActivityRing(
                calculateProgress(calories, goalCalories),
                102,
                14,
                "#FFFFFF",
                "Calories",
                calories,
                "/320 Kcal"
              )}
            </View>
          </View>

          {/* Steps Bezier Line Chart */}
          <Text style={styles.sectionHeader}>Steps</Text>
          <LineChart
            data={{
              labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              datasets: [{ data: stepsData }],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisLabel="" // Hides Y-axis label
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: "#D87C8E",
              backgroundGradientFrom: "#F07BA5",
              backgroundGradientTo: "#F1A7C1",
              decimalPlaces: 0,
              color: (opacity) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity) => `rgba(255, 255, 255, ${opacity})`,
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
          />

          {/* Distance Bezier Line Chart */}
          <Text style={styles.sectionHeader}>Distance</Text>
          <LineChart
            data={{
              labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              datasets: [{ data: distanceData }],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisLabel="" // Hides Y-axis label
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: "#ec9abe",
              backgroundGradientFrom: "#F4A8C9",
              backgroundGradientTo: "#F7C0D8",
              decimalPlaces: 1,
              color: (opacity) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity) => `#FFF`,
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
          />

          {/* Trends Contribution Graph */}
          <Text style={styles.sectionHeader}>Trends</Text>
          <ContributionGraph
            values={trendsData}
            endDate={new Date()}
            numDays={7}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: "#007A32",
              backgroundGradientFrom: "#00C756",
              backgroundGradientTo: "#33D66B",
              color: (opacity) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity) => `#FFF`,
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Progress;
