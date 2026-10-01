import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import { AppTheme } from '../../../core/theme';

export default function RadioButtonScreen() {
  const [selected, setSelected] = useState(1);
  return (
    <View style={styles.container}>
      <CustomAppBar title="Radio Button Feature" />
      <View style={styles.content}>
        {[1, 2, 3].map(val => (
          <TouchableOpacity key={val} style={styles.radioContainer} onPress={() => setSelected(val)} testID={`radio_${val}`}>
            <Ionicons name={selected === val ? 'radio-button-on' : 'radio-button-off'} size={24} color={AppTheme.colors.primary} />
            <Text style={styles.radioText}>Option {val}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppTheme.colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  radioContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  radioText: { marginLeft: 8, fontSize: 18 }
});
