import React, { Component, unstable_Suspense as Suspense } from 'react';
import { connect } from 'react-redux';
import { List } from './components';
import { selectListType } from './rootReducer';
import { listType as LIST_TYPE } from './constants';

class App extends Component {
  onClickListType = type => () => {
    this.props.selectListType(type);
  };

  render() {
    const { onClickListType } = this;
    const { listType } = this.props;
    return (
      <>
        {Object.entries(LIST_TYPE).map(([k, v]) => (
          <button onClick={onClickListType(v)}>{v}</button>
        ))}
        <div style={{ color: 'red' }}>{listType}</div>
        <Suspense maxDuration={1500} fallback={<div>로딩중</div>}>
          <List listType={listType} />
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state.AppState,
});

export default connect(
  mapStateToProps,
  { selectListType },
)(App);
