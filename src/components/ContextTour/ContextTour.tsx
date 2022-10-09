import React, { useEffect, useState } from 'react';
import ContextTourService from '../../services/contextTour/contextTourService';
import { ContextTourStyle } from './ContextTour.styled';
import Content from './Content';
import 'intro.js/introjs.css';
import { Steps, Hints } from 'intro.js-react';
const steps = [
    {
        element: '.hello',
        intro: 'Hello step',
    },
    {
        element: '.world',
        intro: 'World step',
    },
];
const hints = [
    {
        element: '.alive',
        hint: 'Hello hint',
        hintPosition: 'middle-right',
    },
];
const ContextTour = (props: any) => {
    // const [rows, setRows] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const steps = [];

    // const fetchContextTour = async () => {
    //     const res = await ContextTourService.list(null, null, null, null);
    //     setRows(res.rows);
    //     res.rows.map((item) => {
    //         return steps.push({
    //             element: item.id,
    //         });
    //     });
    //     console.log('STEPS :');
    //     console.log(steps);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     fetchContextTour();
    // }, [rows]);

    const onExit = () => {
        console.log('onExit');
    };

    return (
        <>
            <ContextTourStyle>
                <Steps
                    enabled={true}
                    steps={steps}
                    initialStep={0}
                    onExit={() => {
                        console.log('done');
                    }}
                />
                <Hints enabled={true} hints={hints} />
            </ContextTourStyle>
        </>
    );
};

export default ContextTour;
