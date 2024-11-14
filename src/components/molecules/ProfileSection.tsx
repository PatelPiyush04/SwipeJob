import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';
import { ProfileField } from '../atoms/ProfileField';

interface ProfileSectionProps {
  title: string;
  fields: Array<{ label: string; value: string }>;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ title, fields }) => {
  return (
    <View style={styles.container}>
      <Text variant="subheader" style={styles.title}>{title}</Text>
      {fields.map((field, index) => (
        <ProfileField 
          key={`${title}-${index}`}
          label={field.label}
          value={field.value}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    marginBottom: 16,
  },
}); 