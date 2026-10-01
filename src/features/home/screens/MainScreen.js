import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import CustomCardWidget from '../../../shared/components/CustomCardWidget';
import { AppTheme } from '../../../core/theme';

export default function MainScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CustomAppBar title="Automation Components" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <CustomCardWidget title="Button" icon="cube-outline" onPress={() => router.push('/button')} />
        <CustomCardWidget title="Radio Button" icon="radio-button-on" onPress={() => router.push('/radio-button')} />
        <CustomCardWidget title="Switch" icon="toggle" onPress={() => router.push('/switch')} />
        <CustomCardWidget title="Slider" icon="options" onPress={() => router.push('/slider')} />
        <CustomCardWidget title="Progress Indicator" icon="sync" onPress={() => router.push('/progress')} />
        <CustomCardWidget title="Date Picker" icon="calendar" onPress={() => router.push('/date-picker')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppTheme.colors.background },
  scroll: { paddingVertical: 16 }
});
