// Components/Health/Health.jsx
import React from 'react';
import Card from '../Card/Card';
import { useNews } from '../../Context/NewsContext';

function Health() {
    const { newsData } = useNews();
    const data = newsData.health || [];

    return (
        <div className="cards-list grid grid-cols-4 gap-4">
            {data.map((obj, id) => (
                <Card key={id} obj={obj} />
            ))}
        </div>
    );
}

export default Health;
