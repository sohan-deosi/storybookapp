import React from 'react';

import { AppointmentHeader } from '.';

export default {
  title: 'Components/Header',
  component: AppointmentHeader,
};

const Template = (args) => <AppointmentHeader {...args} />;

export const Upcoming = Template.bind({});
Upcoming.args = {
  user: {},
};

export const Past = Template.bind({});
Past.args = {};
