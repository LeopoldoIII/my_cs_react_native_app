import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomAppBar from '../../../shared/components/CustomAppBar';
import { AppTheme } from '../../../core/theme';

export default function DatePickerScreen() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <CustomAppBar title="Date Picker Feature" />
      <View style={styles.content}>
        <Text style={styles.label}>Selected: {date.toLocaleDateString()}</Text>
        <Button title="Pick a Date" onPress={() => setShow(true)} testID="showDatePickerBtn" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppTheme.colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 18, marginBottom: 16 }
});
