import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from '../atoms/Avatar';
import { Text } from '../atoms/Text';

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  firstName,
  lastName,
  email,
}) => {
  return (
    <View style={styles.container}>
      <Avatar firstName={firstName} lastName={lastName} size={100} />
      <View style={styles.info}>
        <Text variant="header" style={styles.name}>
          {`${firstName} ${lastName}`}
        </Text>
        <Text variant="body" style={styles.email}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
  },
  info: {
    alignItems: 'center',
    marginTop: 16,
  },
  name: {
    marginBottom: 4,
  },
  email: {
    color: '#666',
  },
}); 