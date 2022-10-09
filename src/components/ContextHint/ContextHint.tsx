import React, { useEffect, useState } from 'react';
import ContextTourService from '../../services/contextTour/contextTourService';
import { ContextHintStyle } from './ContextHintStyle.styled';
import 'intro.js/introjs.css';
import { Hints } from 'intro.js-react';
import { useAhdConfig } from '../AhdConfigProvider/AhdConfigProvider';
import { IAhdConfig } from '../AhdConfigProvider/AhdConfigContext';

interface IContextHintProps {
    config?: IAhdConfig; // either explicitly set IAhdConfigor use Context Provider
    slug?: string;
    name?: string;
    selector?: string;

    visible?: boolean;
}

const ContextHint: React.FC<IContextHintProps> = (props: IContextHintProps) => {
    const [hints, sethints] = useState([]);
    const [loading, setLoading] = useState(true);

    let { ahdConfig } = useAhdConfig();
    ahdConfig = props.config || ahdConfig;

    const fetchContextHints = async () => {
        setLoading(true);
        const res = await ContextTourService.list(ahdConfig, props, undefined, 20, 0);
        const fetchedHints =
            res.rows?.map((item: any) => {
                return {
                    element: item.selector,
                    hint: item.name,
                    hintPosition: item.position || 'middle-right',
                };
            }) || [];
        sethints(fetchedHints);

        setLoading(false);
    };

    useEffect(() => {
        fetchContextHints();
    }, [props.slug, props.selector]);

    return (
        <>
            {!loading && (
                <ContextHintStyle>
                    <Hints enabled={props.visible} hints={hints} />
                </ContextHintStyle>
            )}
        </>
    );
};

export default ContextHint;
