import React from 'react'
import { View, Text, Slider } from 'react-native'

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
    return (
        <View>
            <Slider
                onValueChange={onChange}
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}

export default UdaciSlider