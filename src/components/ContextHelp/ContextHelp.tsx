import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ContextHelpService from '../../services/contextHelp/contextHelpService';
import Content from './Content';
import { ContextHelpStyle } from './ContextHelp.styled';
import Tabs from './Tabs';

const ContextHelp = (props: any) => {
    const [rows, setRows] = useState([]);

    const fetchContextHelp = async () => {
        const res = await ContextHelpService.list(null, null, null, null);
        setRows(res.rows);
    };

    useEffect(() => {
        fetchContextHelp();
    }, [rows]);

    return (
        <ContextHelpStyle>
            <MemoryRouter>
                <Tabs rows={rows} />
                <Routes>
                    {rows.map((item: any) => (
                        <Route key={item.id} path={`/${item.id}`} element={<Content {...item} />} />
                    ))}
                </Routes>
            </MemoryRouter>
        </ContextHelpStyle>
    );
};

export default ContextHelp;
