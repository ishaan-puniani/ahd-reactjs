import React from 'react';
import FAQ from './FAQ';
import { Story, Meta } from '@storybook/react';
import AhdConfigProvider from '../AhdConfigProvider/AhdConfigProvider';
// import AhdConfigContext from '../AhdConfigProvider/AhdConfigContext';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: 'Components/FAQ',
    component: FAQ,
    decorators: [
        withKnobs,
        (Story) => (
            <AhdConfigProvider ahdConfig={{ tenantId: text('tenantId', '633bd6d693b46a69ab83ddff') }}>
                <Story />
            </AhdConfigProvider>
        ),
    ],
} as Meta;

const Template: Story = (args) => <FAQ {...args} />;

Template.parameters = {
    knobs: {
        // Doesn't emit events while user is typing.
        timestamps: true,

        // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
        // You can still set it to false, but it's strongly discouraged to set to true in cases when you host your storybook on some route of your main site or web app.
        escapeHTML: true,
    },
};

export const Default = Template.bind({});
Default.args = {};
