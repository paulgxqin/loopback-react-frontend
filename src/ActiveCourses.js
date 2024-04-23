import React, { useEffect, useState } from 'react';

function ActiveCourses({ organizationId }) {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Initialize fetch operation
        fetch(`http://localhost:3000/api/Organizations/${organizationId}/activeCourses`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCourses(data);
                setLoading(false);  // Set loading to false when data is received
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                setError(error.message);
                setLoading(false);  // Ensure loading is set to false on error
            });
    }, [organizationId]);

    if (loading) {
        return <div>Loading courses...</div>;  // Display a loading message while data is fetching
    }

    if (error) {
        return <div>Error fetching courses: {error}</div>;  // Display error message if error occurs
    }

    return (
        <div>
            <h1>Active Courses</h1>
            {courses.length > 0 ? (
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course.name} - Status: {course.status}</li>
                    ))}
                </ul>
            ) : (
                <div>No active courses found for this organization.</div>  // Display if no courses are found
            )}
        </div>
    );
}

export default ActiveCourses;
