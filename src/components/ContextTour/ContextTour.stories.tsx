import React from 'react';
import ContextTour from './ContextTour';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Components/ContextTour',
    component: ContextTour,
} as Meta;

const Template: Story = (args) => <ContextTour {...args} />;

export const Default = Template.bind({});
Default.args = {};
