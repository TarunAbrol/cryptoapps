import React from 'react';
import { Select, Row, Col, Avatar, Card, Typography } from 'antd';
import moment from 'moment';


import { useGetCryptoNewsQuery } from '../services/coinNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
   const counter = simplified?10:100;
   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', counter: simplified ? 10 : 100});

   if(!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[ 24, 24 ]}>
      
       

    </Row>
  )
}

export default News 