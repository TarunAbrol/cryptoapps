import React from 'react';
import { Select, Row, Col, Avatar, Card, Typography } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/coinnewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100});
  console.log(cryptoNews);
  return (
    <div>News</div>
  )
}

export default News