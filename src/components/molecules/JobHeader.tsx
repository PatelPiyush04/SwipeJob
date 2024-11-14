import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../atoms/Text';

interface JobHeaderProps {
  title: string;
  company: string;
  imageUrl?: string;
}

export const JobHeader: React.FC<JobHeaderProps> = ({ title, company, imageUrl }) => {
  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.textContainer}>
        <Text variant="header">{title}</Text>
        <Text variant="subheader">{company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    gap: 8,
  },
}); 