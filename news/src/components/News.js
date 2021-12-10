import React from 'react'
import 'antd/dist/antd.css';
import NewsSection from '../NewsSection';

const News = () => {

    return (
        <div>
            <NewsSection category='general' query='country=ni' topHeading='Top News' linkText='See More Headlines' results='15' />
            <NewsSection category='sports' query='country = ni' topHeading='Trending in Nigeria' linkText='More Nigerian Trends' results='12' />
            <NewsSection category='technology' query='category=technology' topHeading='Tech Trends' linkText='More about Tech' results='12' />
        </div>
    )
}

export default News;