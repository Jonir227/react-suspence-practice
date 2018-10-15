import React from 'react';
import { createResource } from 'react-cache';
import axios from 'axios';
import { cache } from '../configure/cache';

const hackerNewsTopResources = createResource(listType =>
  axios.get(`https://hacker-news.firebaseio.com/v0/${listType}.json`),
);
const List = ({ listType }) => {
  const { data } = hackerNewsTopResources.read(cache, listType);
  return data.map(i => (
    <div key={i}>
      {i} - {`${i}id인 해커뉴스`}
    </div>
  ));
};

export default List;
