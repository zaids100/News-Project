// Components/Entertainment/Entertainment.jsx
import React from 'react';
import Card from '../Card/Card';
import { useNews } from '../../Context/NewsContext';

function Entertainment() {
    const { newsData } = useNews();
    const data = newsData.entertainment || [];

    return (
        <div className="cards-list grid grid-cols-4 gap-4">
            {data.map((obj, id) => (
                <Card key={id} obj={obj} />
            ))}
        </div>
    );
}

export default Entertainment;
