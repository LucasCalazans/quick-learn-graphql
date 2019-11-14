import React, { useState, useEffect } from 'react';
import DevelopersApi from '@/api/Developers';
import JSONPretty from 'react-json-pretty';

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
            {developers &&
                developers.map((developer, index) => (
                    <li key={index}>
                        <JSONPretty id="json-pretty" data={developer} />
                        <hr />
                    </li>
                ))}
        </ul>
    );
};

export default Developer;
