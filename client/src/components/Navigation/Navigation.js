import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Page } from '../Page';
import { NavBar } from './NavBar';

export const Navigation = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="page" element={<Page />} />
            </Routes>
        </>
    );
};
