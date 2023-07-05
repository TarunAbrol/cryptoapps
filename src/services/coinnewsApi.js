import { create, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const coinnewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2ca9aff45bmshcba9010457f9a95p130099jsn5274678557ac',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: coinnewsApiHeaders});



