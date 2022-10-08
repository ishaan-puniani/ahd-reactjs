import React from 'react';
import ContextHelp from './ContextHelp';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Components/ContextHelp',
    component: ContextHelp,
} as Meta;

const Template: Story = (args) => <ContextHelp {...args} />;

export const Default = Template.bind({});
Default.args = {};
