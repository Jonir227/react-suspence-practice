import React, { unstable_Suspense as Suspense } from "react";
import { createResource } from "react-cache";
import styled from "styled-components";
import axios from "axios";

import { cache } from "../cache";
import key from "../key";

const albumSearchResult = createResource(albumName =>
  axios.get("http://ws.audioscrobbler.com/2.0/", {
    params: {
      method: "album.search",
      api_key: key.api_key,
      album: albumName,
      format: "json"
    }
  })
);

const albumImg = createResource(
  imgSrc =>
    new Promise(resolve => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => resolve(imgSrc);
    })
);

const ListItemWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 170px;
  padding: 10px;
  border: solid 1px #bbbbbb;
  margin-bottom: 6px;
  margin-left: 10%;
  color: white;
`;

const ListItemName = styled.button`
  font-size: 40px;
  display: block;
  text-decoration: none;
  color: white;
  border: none;
  background-color: transparent;
`;

const ListItemArtist = styled.div`
  font-size: 15px;
  text-align: right;
`;

const Loader = styled(ListItemWrapper)`
  justify-content: center;
  align-items: center;
`;

const ListItem = ({ name, artist, image, onClickList }) => {
  const img = albumImg.read(cache, image[2]["#text"]);
  return (
    <ListItemWrapper onClick={onClickList}>
      <img src={img} alt="albumImage" />
      <div style={{ width: "100%" }}>
        <ListItemName>{name}</ListItemName>
        <ListItemArtist>{artist}</ListItemArtist>
      </div>
    </ListItemWrapper>
  );
};

const List = ({ albumName, onClickList }) => {
  const {
    data: {
      results: {
        albummatches: { album }
      }
    }
  } = albumSearchResult.read(cache, albumName);
  return album.map(({ name, artist, image }) => (
    <Suspense
      key={name + artist}
      maxDuration={100}
      fallback={<Loader>앨범을 로딩중입니다.</Loader>}
    >
      <ListItem
        name={name}
        artist={artist}
        image={image}
        onClickList={onClickList(name)}
      />
    </Suspense>
  ));
};

export default List;
