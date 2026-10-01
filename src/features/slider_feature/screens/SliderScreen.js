import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import { AppTheme } from '../../../core/theme';

export default function SliderScreen() {
  const [value, setValue] = useState(50);
  return (
    <View style={styles.container}>
      <CustomAppBar title="Slider Feature" />
      <View style={styles.content}>
        <Text style={styles.label}>Value: {value.toFixed(0)}</Text>
        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor={AppTheme.colors.primary}
          maximumTrackTintColor="#000000"
          testID="customSlider"
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
