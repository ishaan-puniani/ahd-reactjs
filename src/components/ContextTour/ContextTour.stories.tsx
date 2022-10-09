import React from 'react';
import ContextTour from './ContextTour';
import { Story, Meta } from '@storybook/react';
const mockPage = (
    <div>
        <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive">It Hint!</h1>
    </div>
);

export default {
    title: 'Components/ContextTour',
    component: ContextTour,
} as Meta;

const Template: Story = (args) => (
    <>
        <ContextTour {...args} />
        {mockPage}
    </>
);

export const Default = Template.bind({});
Default.args = {};
