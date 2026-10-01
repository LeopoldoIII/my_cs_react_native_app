import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import { AppTheme } from '../../../core/theme';

export default function ProgressIndicatorScreen() {
  return (
    <View style={styles.container}>
      <CustomAppBar title="Progress Indicator" />
      <View style={styles.content}>
        <ActivityIndicator size="large" color={AppTheme.colors.primary} testID="customProgress" />
        <Text style={styles.label}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppTheme.colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 18, marginTop: 16 }
});
