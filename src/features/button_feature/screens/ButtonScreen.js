import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import { AppTheme } from '../../../core/theme';

export default function ButtonScreen() {
  return (
    <View style={styles.container}>
      <CustomAppBar title="Button Feature" />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} testID="customButton">
          <Text style={styles.buttonText}>Press Me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppTheme.colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: AppTheme.colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
