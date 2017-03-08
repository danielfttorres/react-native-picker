import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'

export default class RNPicker extends Component {

  constructor() {
    super()
    this.state = {
      selectedValue: null,
      selectedDynamicValue: null,
      options: [
        {
          label: 'First Option',
          value: 'first-option',
          key: 'first-option-key',
          dynamicValues: [
            {
              label: 'Dynamic Option 01',
              value: 'dynamic-option-01',
              key: 'dynamic-option-01-key',
            },
            {
              label: 'Dynamic Option 02',
              value: 'dynamic-option-02',
              key: 'dynamic-option-02-key',
            }
          ]
        },
        {
          label: 'Other Option',
          value: 'other-option',
          key: 'other-option-key',
          dynamicValues: [
            {
              label: 'Other Dynamic Option 01',
              value: 'other-dynamic-option-01',
              key: 'other-dynamic-option-key-01',
            },
            {
              label: 'Other Dynamic Option 02',
              value: 'other-dynamic-option-02',
              key: 'other-dynamic-option-key-02',
            }
          ]
        }
      ]
    }
  }

  render() {
    const { options, selectedValue, selectedDynamicValue } = this.state

    return (
      <View>
        <Picker selectedValue={selectedValue} onValueChange={(value) => { this.setState({ selectedValue: value }) }}>
          {options.map(option => <Picker.Item key={`${option.key}`} label={`${option.label}`} value={`${option.value}`} />)}
        </Picker>

        {selectedValue ?
          <Picker selectedValue={selectedDynamicValue} onValueChange={(value) => { this.setState({ selectedDynamicValue: value })}}>
            {options.filter(option => selectedValue === option.value)
              .map(option => option.dynamicValues.map(dynamicOption =>
                <Picker.Item key={`${dynamicOption.key}`} label={`${dynamicOption.label}`} value={`${dynamicOption.value}`} />
              ))
            }
          </Picker> :
          <View />
        }
      </View>
    )
  }
}
