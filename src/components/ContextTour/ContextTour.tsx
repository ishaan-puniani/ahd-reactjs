import React, { useEffect, useState } from 'react';
import { Steps } from 'intro.js-react';
import ContextTourService from '../../services/contextTour/contextTourService';
import { ContextTourStyle } from './ContextTour.styled';
import Content from './Content';
import 'intro.js/introjs.css';

const ContextTour = (props: any) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const steps = [];

    const fetchContextTour = async () => {
        const res = await ContextTourService.list(null, null, null, null);
        setRows(res.rows);
        res.rows.map((item) => {
            return steps.push({
                element: item.id,
            });
        });
        console.log('STEPS :');
        console.log(steps);
        setLoading(false);
    };

    useEffect(() => {
        fetchContextTour();
    }, [rows]);

    const onExit = () => {
        console.log('onExit');
    };

    return (
        <>
            {loading ? (
                <>loading...</>
            ) : (
                <ContextTourStyle>
                    <div>
                        <Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} />

                        <div>
                            {rows.map((row, idx) => {
                                return <Content key={row.id} className={row.id} {...row} step={idx} />;
                            })}
                        </div>
                    </div>
                </ContextTourStyle>
            )}
        </>
    );
};

export default ContextTour;
