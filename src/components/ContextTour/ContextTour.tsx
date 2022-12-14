import React, { useEffect, useState } from 'react';
import ContextTourService from '../../services/contextTour/contextTourService';

import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import { IAhdConfig } from '../AhdConfigProvider/AhdConfigContext';
import { useAhdConfig } from '../AhdConfigProvider/AhdConfigProvider';
import TourContent from './TourContent';

interface IContextTourProps {
    config?: IAhdConfig; // either explicitly set IAhdConfigor use Context Provider
    slug?: string;
    name?: string;
    selector?: string;
    visible?: boolean;
    initialStep?: number;
}

const ContextTour: React.FC<IContextTourProps> = (props: IContextTourProps) => {
    const [steps, setSteps] = useState([]);
    const [loading, setLoading] = useState(true);

    let { ahdConfig } = useAhdConfig();
    ahdConfig = props.config || ahdConfig;

    const fetchContextHints = async () => {
        setLoading(true);
        const res = await ContextTourService.list(ahdConfig, props, undefined, 20, 0);
        const fetchedSteps =
            res.rows?.map((item: any) => {
                return {
                    element: item.selector,
                    intro: <TourContent {...item}></TourContent>,
                };
            }) || [];
        setSteps(fetchedSteps);

        setLoading(false);
    };

    useEffect(() => {
        fetchContextHints();
    }, [props.slug, props.selector]);

    const onExit = () => {
        console.log('onExit');
    };

    return (
        <>
            {!loading && (
                <>
                    <Steps enabled={props.visible} steps={steps} initialStep={props.initialStep || 0} onExit={onExit} />
                </>
            )}
        </>
    );
};

export default ContextTour;
