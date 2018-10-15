import React from 'react';
import { createResource } from 'react-cache';
import axios from 'axios';
import { cache } from '../cache';

const hackerNewsTopResources = createResource(() =>
  axios.get('https://hacker-news.firebaseio.com/v0/topstories.json'),
);
const List = () => {
  const { data } = hackerNewsTopResources.read(cache);
  return data.map(i => <div key={i}>{i}</div>);
};

export default List;
