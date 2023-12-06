import React, { useState, useContext, useEffect } from "react";
import { InputSearchContainer, ScreenSearchbar } from "../screens/maps.screen.styles";
import { LocationContext } from "../../../services/location/location.context";

export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);

  useEffect(() => {
    setSearchkeyword(keyword);
  }, [keyword]);

  return (
    <InputSearchContainer>
      <ScreenSearchbar
        placeholder="search for a location"
        icon="map"
        value={searchKeyword}
        onChangeText={(textI) => {
          setSearchkeyword(textI);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </InputSearchContainer>
  );
}
