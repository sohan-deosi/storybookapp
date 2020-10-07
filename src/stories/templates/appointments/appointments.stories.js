import React from 'react';

import { Appointments } from '.';
import * as HeaderStories from '../../molecules/appointmentHeader/appointmentHeader.stories';

export default {
  title: 'Appointments',
  component: Appointments,
};

const Template = (args) => <Appointments {...args} />;

export const Upcoming = Template.bind({});
Upcoming.args = {
  ...HeaderStories.Upcoming.args,
};

export const Past = Template.bind({});
Past.args = {
  ...HeaderStories.Past.args,
};
