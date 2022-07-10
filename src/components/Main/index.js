import React from "react";
import { Routes, Route } from 'react-router-dom';
import Series from "../../containers/Series";
import SingleSeries from '../../containers/SingleSeries';

const Main = props => (
    <Routes>
        <Route exact path="/" element={<Series/>} />
        <Route exact path="/series/:id" element={<SingleSeries/>} id='123' />
    </Routes>
)

export default Main;