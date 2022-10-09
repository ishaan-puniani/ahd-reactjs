import React from 'react';
import ContextTour from './ContextTour';
import { Story, Meta } from '@storybook/react';
import AhdConfigProvider from '../AhdConfigProvider/AhdConfigProvider';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import configs from '../../config/config';

const mockPage = (
    <div>
        <h1 className="hello" data-ahd="heading">
            Taj Mahal,
        </h1>
        <hr />
        <h2 className="world" data-ahd="sub-heading">
            From Wikipedia, the free encyclopedia
        </h2>
        <hr />
        <p className="alive" data-ahd="content">
            The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian
            city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb
            of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the
            centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in
            formal gardens bounded on three sides by a crenellated wall.
        </p>
    </div>
);

const tenantId = text('tenantId', configs.tenantId);
export default {
    title: 'Components/ContextTour',
    component: ContextTour,
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
        <ContextTour {...args} />
        {mockPage}
    </>
);

export const Default = Template.bind({});
Default.args = {
    slug: '/story/components-contexttour',
};
