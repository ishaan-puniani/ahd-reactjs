import React from 'react';
import FAQ from './FAQ';
import { Story, Meta } from '@storybook/react';
import AhdConfigProvider from '../AhdConfigProvider/AhdConfigProvider';
// import AhdConfigContext from '../AhdConfigProvider/AhdConfigContext';

export default {
    title: 'Components/FAQ',
    component: FAQ,
    decorators: [
        (Story) => (
            <AhdConfigProvider ahdConfig={{ tenantId: '633bd6d693b46a69ab83ddff' }}>
                <Story />
            </AhdConfigProvider>
        ),
    ],
} as Meta;

const Template: Story = (args) => <FAQ {...args} />;

export const Default = Template.bind({});
Default.args = {};
