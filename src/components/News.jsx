import React from 'react';
import { Select, Row, Col, Avatar, Card, Typography } from 'antd';
import moment from 'moment';


import { useGetCryptoNewsQuery } from '../services/coinNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
   const counter = simplified?10:100;
   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', counter: simplified ? 6 : 12});

   console.log(cryptoNews);

   if(!cryptoNews?.value) return 'Loading...';


  return (
    <Row gutter={[ 24, 24 ]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable classname="News-Card"> 
          <a href={news.url} target=" blank " rel="noreferrer">
            <div className="news-image-cont">
              <Title className="news-title" level={4}>
                {news.name}

              </Title>

            </div>

          </a>

          </Card>
        </Col>

      ))}
      
       

    </Row>
  )
}

export default News