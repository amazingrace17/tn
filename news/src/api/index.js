// import Title from 'antd/lib/skeleton/Title';
import axios from 'axios';

// const api = 'b825f2dad23816419b700bbf07aa6a0a'
// const url = 'http://api.mediastack.com/v1/news';

export const fetchSources = async () => {
    // const requestSource = `sources?apiKey=`;
    try {
        
        const { data: { sources } } = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`);
        
  
        return sources.map((source)=> source);
    } catch (error) {
        return error;
    }
};

export const fetchNews = async (request) => {
    try {
        const { data: { articles } } = await axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`);
        console.log(articles)
        return articles.map((article) => (article));
    } catch (error) {
        return error;
    }
};