import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

interface CustomTextProps extends TextProps {
  variant?: 'header' | 'subheader' | 'body' | 'label';
}

export const Text: React.FC<CustomTextProps> = ({ variant = 'body', style, children, ...props }) => {
  return (
    <RNText style={[styles[variant], style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
}); 