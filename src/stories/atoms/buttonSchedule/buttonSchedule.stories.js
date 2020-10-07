import React from 'react';
import { ButtonSchedule } from '.';

export default {
  title: 'Components/Button',
  component: ButtonSchedule,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonSchedule {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Schedule Appointment',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: true,
  label: 'Schedule Appointment',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Schedule Appointment',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Schedule Appointment',
};
