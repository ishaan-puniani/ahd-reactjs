import React, { useEffect, useState } from 'react';
import { ContextHelpDialogStyle } from './ContextHelpDialogStyle.styled';
import { useAhdConfig } from '../AhdConfigProvider/AhdConfigProvider';
import { IAhdConfig } from '../AhdConfigProvider/AhdConfigContext';
import ContextHelpDialogService from '../../services/contextHelp/contextHelpDialogService';
import { ReactDialogBox } from 'react-js-dialog-box';
import 'react-js-dialog-box/dist/index.css';
import ContextHelpDialogContent from './ContextHelpDialogContent';

interface IContextHelpDialogProps {
    config?: IAhdConfig; // either explicitly set IAhdConfigor use Context Provider
    slug?: string;
    name?: string;
    topic?: string;

    visible?: boolean;
}

const ContextHelpDialog: React.FC<IContextHelpDialogProps> = (props: IContextHelpDialogProps) => {
    const [visible, setVisible] = useState(props.visible);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState<any>({});
    let { ahdConfig } = useAhdConfig();
    ahdConfig = props.config || ahdConfig;

    const fetchContextHints = async () => {
        setLoading(true);
        const res = await ContextHelpDialogService.list(ahdConfig, props, undefined, 1, 0);
        if (res.rows && res.rows.length === 1) {
            setContent(res.rows[0]);
            // const fetchedHints =
            //     res.rows?.map((item: any) => {
            //         return {
            //             element: item.selector,
            //             hint: item.name,
            //             hintPosition: item.position || 'middle-right',
            //         };
            //     }) || [];
            // sethints(fetchedHints);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchContextHints();
    }, [props.slug, props.topic]);

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible]);

    return (
        <>
            {!loading && visible && (
                <ContextHelpDialogStyle>
                    <ReactDialogBox
                        closeBox={() => {
                            setVisible(false);
                        }}
                        modalWidth="60%"
                        headerBackgroundColor="white"
                        headerTextColor="black"
                        headerHeight="65"
                        closeButtonColor="black"
                        bodyBackgroundColor="white"
                        bodyTextColor="black"
                        bodyHeight="200px"
                        headerText={content.name}
                    >
                        <ContextHelpDialogContent {...content} />
                    </ReactDialogBox>
                </ContextHelpDialogStyle>
            )}
        </>
    );
};

export default ContextHelpDialog;
