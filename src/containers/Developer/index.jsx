import React, { useState, useEffect } from 'react';
import DevelopersApi from '@/api/Developers';

const Developer = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [developers, setDevelopers] = useState([]);

    const loadDevelopers = async () => {
        const developers = await DevelopersApi.getDevelopers();
        setIsLoaded(true);
        if (!developers || !Array.isArray(developers)) {
            console.log('Failed to load developers from GraphQL API', developers);
            return;
        }

        setDevelopers(developers);
        console.log(developers);
    };

    useEffect(() => {
        loadDevelopers();
    }, []);

    if (!isLoaded) return <span>loading</span>;

    return (
        <ul>
            {developers && developers.map(developer => ((
                <li>
                    <pre>{ JSON.stringify(developer) }</pre>
                </li>
            )))}
        </ul>
    )
};

export default Developer;
