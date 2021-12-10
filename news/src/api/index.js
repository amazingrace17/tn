// import Title from 'antd/lib/skeleton/Title';
import axios from 'axios';

const api = 'b825f2dad23816419b700bbf07aa6a0a'
const url = 'http://api.mediastack.com/v1/news';

export const fetchSources = async () => {
    // const requestSource = `sources?apiKey=`;
    try {
        
        const { data: { title } } = await axios.get(`http://api.mediastack.com/v1/news?access_key=b825f2dad23816419b700bbf07aa6a0a&categories=general&countries=ni`);
        
  
        return title.map((titl)=> titl);
    } catch (error) {
        return error;
    }
};

export const fetchNews = async (request) => {
    try {
        const { data: { data } } = await axios.get(`${url}?${request.category}&access_key=${api}&countries=ng,us`);
        
        return data.map((dat) => (dat));
    } catch (error) {
        return error;
    }
};