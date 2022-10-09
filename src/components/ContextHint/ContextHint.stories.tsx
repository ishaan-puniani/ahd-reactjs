import React from 'react';
import { Story, Meta } from '@storybook/react';
import ContextHint from './ContextHint';
import AhdConfigProvider from '../AhdConfigProvider/AhdConfigProvider';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import configs from '../../config/config';

const mockPage = (
    <div>
        <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive" data-ahd="widget-video">
            It Hint!
        </h1>
    </div>
);

const tenantId = text('tenantId', configs.tenantId);
export default {
    title: 'Components/ContextHint',
    component: ContextHint,
    decorators: [
        withKnobs,
        (Story) => (
            <AhdConfigProvider ahdConfig={{ tenantId: tenantId }}>
                <Story />
            </AhdConfigProvider>
        ),
    ],
} as Meta;

const Template: Story = (args) => (
    <>
        <ContextHint {...args} />
        {mockPage}
    </>
);

export const Default = Template.bind({});
Default.args = {
    slug: '/story/components-contexthint',
};
