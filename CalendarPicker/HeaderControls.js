import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
    const {
        styles,
        currentMonth,
        currentYear,
        onPressNext,
        onPressPrevious,
        months,
        previousTitle,
        nextTitle,
        textStyle,
        PrevComponent,
        NextComponent
    } = props;
    const MONTHS = months? months : Utils.MONTHS; // English Month Array
    // getMonth() call below will return the month number, we will use it as the
    // index for month array in english
    const previous = previousTitle ? previousTitle : 'Previous';
    const next = nextTitle ? nextTitle : 'Next';
    const month = MONTHS[currentMonth];
    const year = currentYear;

    return (
        <View style={styles.headerWrapper}>
            <View style={{flex: 1}}>
                <Text style={[styles.monthLabel, textStyle]}>
                    { month } { year }
                </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20, paddingBottom: 5}}>
                {
                    PrevComponent? (
                        <View style={{borderRadius: 50, backgroundColor: '#E6F1FF', marginRight: 10}}>
                            <PrevComponent type="MaterialCommunityIcons" name={'chevron-left'} size={22} color={'#545DFF'} onPress={onPressPrevious} />
                        </View>
                    ) : (
                        <Controls
                            label={previous}
                            onPressControl={onPressPrevious}
                            styles={[styles.monthSelector, styles.prev]}
                            textStyles={textStyle}
                        />
                    )
                }
                {
                    NextComponent? (
                        <View style={{borderRadius: 50, backgroundColor: '#E6F1FF'}}>
                            <NextComponent type="MaterialCommunityIcons" name={'chevron-right'} size={22} color={'#545DFF'} onPress={onPressNext} />
                        </View>
                    ) : (
                        <Controls
                            label={next}
                            onPressControl={onPressNext}
                            styles={[styles.monthSelector, styles.next]}
                            textStyles={textStyle}
                        />
                    )
                }
            </View>
        </View>
    );
}

HeaderControls.propTypes = {
    currentMonth: PropTypes.number,
    currentYear: PropTypes.number,
    onPressNext: PropTypes.func,
    onPressPrevious: PropTypes.func,
};
