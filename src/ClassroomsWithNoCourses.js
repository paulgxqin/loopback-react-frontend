import React, { useEffect, useState } from 'react';

function ClassroomsWithNoCourses() {
    const [classrooms, setClassrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/Classrooms/empty') // Ensure this URL matches your API endpoint
            .then(response => {
                if (!response.ok) { // Check if response is not ok then throw error
                    throw new Error('Failed to fetch classrooms');
                }
                return response.json();
            })
            .then(data => {
                setClassrooms(data);
                setLoading(false); // Set loading to false after data is received
            })
            .catch(error => {
                console.error('Error fetching classrooms:', error);
                setError(error.message); // Set error message
                setLoading(false); // Ensure loading is set to false on error
            });
    }, []);

    if (loading) {
        return <div>Loading classrooms...</div>; // Display a loading message
    }

    if (error) {
        return <div>Error fetching classrooms: {error}</div>; // Display error message if error occurs
    }

    return (
        <div>
            <h1>Classrooms with No Courses</h1>
            {classrooms.length > 0 ? (
                <ul>
                    {classrooms.map((classroom, index) => (
                        <li key={index}>{classroom.name}</li>
                    ))}
                </ul>
            ) : (
                <div>No classrooms with empty courses found.</div> // Display when no classrooms are found
            )}
        </div>
    );
}

export default ClassroomsWithNoCourses;

