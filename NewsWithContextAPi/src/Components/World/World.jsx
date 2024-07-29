import React from 'react';
import Card from '../Card/Card';
import { useNews } from '../../Context/NewsContext';

function World() {
    const { newsData, loading } = useNews();
    const data = newsData.world || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cards-list grid grid-cols-4 gap-4">
            {data.map((obj, id) => (
                <Card key={id} obj={obj} />
            ))}
        </div>
    );
}

export default World;
