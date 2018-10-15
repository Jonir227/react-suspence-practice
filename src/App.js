import React, { Component, unstable_Suspense as Suspense } from 'react';
import { List } from './components';

class App extends Component {
  render() {
    return (
      <Suspense maxDuration={100} fallback={<div>로딩중</div>}>
        <List />
      </Suspense>
    );
  }
}

export default App;
