import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider, Card } from 'antd';
import { fetchNews } from './api';
import ReactHtmlParser from 'react-html-parser';
const { Meta } = Card;

const NewsSection = (request) => {
    const [newsSection, setNewsSection] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setNewsSection(await fetchNews(request));
        };
        fetchAPI();
    }, [request]);

    return (
        <div>
            <Row>
                <Col>
                    <h1 style={{ fontSize: '30px' }}>{request.topHeading}</h1>
                </Col>
            </Row>
            <Row>
                {newsSection.length > 1 ?
                    newsSection.map((data, key) =>
                        data.image === "" || data.image === null ? null :
                            <Col key={key} md={{ span: 8 }} sm={{ span: 24 }} >
                                <Card onClick={() => window.open(data.url, "_blank")} type="inner" hoverable="true"
                                    style={{ width: 380, marginBottom: 20 }}
                                    cover={data.image === "" || data.image === null ? null :
                                        <img
                                            alt={data.title}
                                            src={data.image}
                                        />
                                    }
                                    title={data.source === "" || data.source=== null ? null : "Source: " + ReactHtmlParser(data.source)}
                                    extra={data.author === "" || data.author === null ? null : "Author: " + ReactHtmlParser(data.author)}
                                >
                                    <h3>{ReactHtmlParser(data.title)}</h3>
                                    <Meta
                                        description={ReactHtmlParser(data.description)}
                                    />
                                </Card>
                            </Col>
                    )
                    : "Loading.."}
            </Row>
            {request.linkText != null ?
                <Row>
                    <Col>
                        <Divider />
                    </Col>
                </Row> : null}
        </div>
    )
}

export default NewsSection;