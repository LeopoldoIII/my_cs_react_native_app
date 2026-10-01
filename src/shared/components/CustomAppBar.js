import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppTheme } from '../../core/theme';

export default function CustomAppBar({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="navBarText">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: AppTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
