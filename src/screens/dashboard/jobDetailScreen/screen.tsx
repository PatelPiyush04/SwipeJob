import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { JobCard } from "../../../components/organisms/JobCard";

export const JobDetailsScreen: React.FC = () => {
  const jobData = {
    title: "Construction General Helper",
    company: "C.D. Barnes & Associates",
    imageUrl: "https://imgs.swipejobs.com/js/job-category/construction-1.jpg",
    distance: "5.6",
    hourlyRate: 13.5,
    shiftDates: [
      "APR 7, WED 8:00 AM - 10:00PM PDT",
      "APR 7, WED 8:00 AM - 10:00PM PDT",
    ],
    location: "123 Main Street, Tacoma, WA 98409",
    requirements: ["Safety Vest", "Hard Hat"],
    reportTo: "Dave (123) 546 987",
  };

  const handleAccept = () => {
    // Handle job acceptance
    console.log("Job accepted");
  };

  const handleDecline = () => {
    // Handle job decline
    console.log("Job declined");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <JobCard
          job={jobData}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 32,
  },
});
