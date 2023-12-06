import React, { useState, useContext, useEffect } from "react";
import {
  SearchContainer,
  InputSearchContainer,
  ScreenSearchbar,
} from "../screens/restaurants.screen.styles";
import { LocationContext } from "../../../services/location/location.context";

export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);

  useEffect(() => {
    setSearchkeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <InputSearchContainer>
        <ScreenSearchbar
          placeholder="search for a location"
          value={searchKeyword}
          onChangeText={(textI) => {
            setSearchkeyword(textI);
          }}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
        />
      </InputSearchContainer>
    </SearchContainer>
  );
}
