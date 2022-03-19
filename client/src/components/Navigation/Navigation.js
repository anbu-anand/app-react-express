import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { NavBar } from './NavBar';
import {
    Home,
    Contact,
    Passion,
    Experiences,
    Skills,
    Projects,
    Educations,
} from '../Layout';

export const Navigation = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Passion" element={<Passion />} />
                <Route path="Experiences" element={<Experiences />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Educations" element={<Educations />} />
            </Routes>
        </>
    );
};
