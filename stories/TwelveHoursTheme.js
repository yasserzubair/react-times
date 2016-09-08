import React from 'react';
import {storiesOf} from '@kadira/storybook';
import TimePickerWrapper from '../examples/TimePickerWrapper';

storiesOf('TwelveHoursTheme', module)
  .add('with default time', () => (
    <TimePickerWrapper
      theme="twelveHours"
      defaultTime="3:15"
    />
  ))
  .add('basical', () => (
    <TimePickerWrapper
      theme="twelveHours"
    />
  ))
  .add('focused at setup', () => (
    <TimePickerWrapper
      theme="twelveHours"
      focused={true}
    />
  ))
  .add('focused at setup', () => (
    <TimePickerWrapper
      theme="twelveHours"
      withoutIcon={true}
      focused={true}
    />
  ));
