import React from "react";
import { View, StyleSheet } from "react-native";
import { JobHeader } from "../molecules/JobHeader";
import { JobDetail } from "../molecules/JobDetail";
import { Button } from "../../components/button";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming using Expo

interface JobCardProps {
  job: {
    title: string;
    company: string;
    imageUrl?: string;
    distance: string;
    hourlyRate: number;
    shiftDates: string[];
    location: string;
    requirements: string[];
    reportTo: string;
  };
  onAccept: () => void;
  onDecline: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  onAccept,
  onDecline,
}) => {
  return (
    <View style={styles.container}>
      <JobHeader
        title={job.title}
        company={job.company}
        imageUrl={job.imageUrl}
      />

      <View style={styles.detailsContainer}>
        <View style={styles.rateDistance}>
          <JobDetail label="Distance" value={`${job.distance} miles`} />
          <JobDetail
            label="Hourly Rate"
            value={`$${job.hourlyRate.toFixed(2)}`}
          />
        </View>

        <JobDetail
          label="Shift Dates"
          value={job.shiftDates.join("\n")}
          icon={<MaterialIcons name="calendar-today" size={24} />}
        />

        <JobDetail
          label="Location"
          value={job.location}
          icon={<MaterialIcons name="location-on" size={24} />}
        />

        <JobDetail
          label="Requirements"
          value={job.requirements.join("\n")}
          icon={<MaterialIcons name="build" size={24} />}
        />

        <JobDetail
          label="Report To"
          value={job.reportTo}
          icon={<MaterialIcons name="person" size={24} />}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="No Thanks" variant="secondary" onPress={onDecline} />
        <Button title="I'll Take it" variant="primary" onPress={onAccept} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  detailsContainer: {
    gap: 16,
  },
  rateDistance: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e6fff9",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
  },
});
