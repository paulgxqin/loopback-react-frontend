import React from 'react';
import ClassroomsWithNoCourses from './ClassroomsWithNoCourses';
import ActiveCourses from './ActiveCourses';

function App() {
    return (
        <div className="App">
            <h1>School Dashboard</h1>
            <ClassroomsWithNoCourses />
            <ActiveCourses organizationId="6627d0ae5126a84dacf7eaff" /> {/* Replace '1' with your actual organization ID */}
        </div>
    );
}

export default App;
