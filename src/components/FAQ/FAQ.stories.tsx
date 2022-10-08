import React from 'react';
import FAQ from './FAQ';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Components/FAQ',
    component: FAQ,
} as Meta;

const Template: Story = (args) => <FAQ {...args} />;

export const Default = Template.bind({});
Default.args = {};
