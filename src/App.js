import React, { Component, unstable_Suspense as Suspense } from "react";
import styled from "styled-components";
import { List, DetailPage } from "./components";

const SearchBar = styled.input`
  margin-left: 30%;
  width: 40%;
  font-size: 21px;
  color: #fff;
  background-color: #333333;
  border: none;
  padding: 8px;
`;

class App extends Component {
  state = {
    inputValue: "",
    isDetail: false
  };

  searchRef = React.createRef();

  onChangeSearch = event => {
    this.setState({ inputValue: event.target.value });
  };

  onClickList = no => () => {
    this.setState({ isDetail: true });
  };

  onClickBack = () => {
    this.setState({
      isDetail: false
    });
  };

  renderList() {
    const { searchRef, onChangeSearch } = this;
    const { inputValue } = this.state;
    return (
      <>
        <SearchBar ref={searchRef} onChange={onChangeSearch} />
        {inputValue.length !== 0 && (
          <Suspense maxDuration={3000} fallback={<div>로딩중</div>}>
            <List albumName={inputValue} onClickList={this.onClickList} />
          </Suspense>
        )}
      </>
    );
  }

  renderDetail() {
    const { onClickBack } = this;
    return (
      <>
        <button onClick={onClickBack}>back</button>
        <DetailPage />
      </>
    );
  }

  render() {
    const { isDetail } = this.state;

    if (isDetail) return this.renderDetail();

    return this.renderList();
  }
}

export default App;
