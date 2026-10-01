import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import { AppTheme } from '../../../core/theme';

export default function SwitchScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <CustomAppBar title="Switch Feature" />
      <View style={styles.content}>
        <Text style={styles.label}>Switch is {isEnabled ? 'ON' : 'OFF'}</Text>
        <Switch
          testID="customSwitch"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? AppTheme.colors.primary : '#f4f3f4'}
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppTheme.colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 18, marginBottom: 16 }
});
