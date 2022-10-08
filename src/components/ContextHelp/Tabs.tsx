import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route, Routes, Link } from 'react-router-dom';

export interface ITabsProps {
    rows: Array<any>;
}

const Tabs: React.FC<ITabsProps> = ({ rows }: ITabsProps) => {
    return (
        <nav className="tabs">
            {rows?.map((item) => (
                <Link to={`/${item.id}`} key={item.id} className="tab">
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

export default Tabs;
