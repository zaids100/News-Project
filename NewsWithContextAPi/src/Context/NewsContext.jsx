// Context/NewsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

const categories = ['world', 'business', 'entertainment', 'sports', 'technology', 'science', 'health'];

const fetchNewsData = async (category) => {
    const response = await fetch(`https://api.currentsapi.services/v1/latest-news?category=${category}&apiKey=mPn-n2zxSkYcGMSdkS5SYTcaeWuxW7fzjC4eU5oxUd4eqc4f`);
    const news = await response.json();
    return news.news.filter(item => item.image && item.image !== 'None');
};

export const NewsProvider = ({ children }) => {
    const [newsData, setNewsData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            const allData = {};
            for (let category of categories) {
                allData[category] = await fetchNewsData(category);
            }
            setNewsData(allData);
            setLoading(false);
        };
        fetchAllData();
    }, []);

    return (
        <NewsContext.Provider value={{ newsData, loading }}>
            {children}
        </NewsContext.Provider>
    );
};
