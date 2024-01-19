import React, { useState } from 'react';
import s from "./components/Site.module.css";
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { Error404 } from './components/pages/Error404';


function App() {
    return (
        <div>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.body}>
                <div className={s.nav}>
                    <div><NavLink to='page1' className={({ isActive }) => isActive ? s.activeLink : s.AppLink
                    }>Page1</NavLink></div>
                    <div><NavLink to='page2' className={({ isActive }) => isActive ? s.activeLink : s.AppLink
                    }>Page2</NavLink></div>
                    <div><NavLink to='page3' className={({ isActive }) => isActive ? s.activeLink : s.AppLink
                    }>Page3</NavLink></div>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/page1'} />} />
                        <Route path="/page1" element={<PageOne />} />
                        <Route path="/page2" element={<PageTwo />} />
                        <Route path="/page3" element={<PageThree />} />
                        <Route path="/error404" element={<Error404 />} />
                        <Route path="/*" element={<Navigate to={'/error404'} />} />
                    </Routes>
                </div>
            </div>
            <div className={s.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
