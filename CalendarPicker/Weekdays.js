import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';

export default function Weekdays(props) {
  const { styles, startFromMonday, weekdays, textStyle, makeStyleCustom } = props;
  let wd = weekdays;
  if (!wd) {
    wd = startFromMonday? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
  }
  const wcustom = makeStyleCustom.weekdays? makeStyleCustom.weekdays : {};

  return (
    <View style={styles.dayLabelsWrapper}>
      { wd.map((day, key) => {
          return (
            <Text key={key} style={[styles.dayLabels, textStyle, wcustom]}>
              {day}
            </Text>
          );
        })
      }
    </View>
  );
}

Weekdays.propTypes = {};
