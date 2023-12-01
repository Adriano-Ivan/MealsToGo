import React, { useState, useContext } from "react";
import {
  SearchContainer,
  InputSearchContainer,
  RestaurantsScreenSearchbar,
} from "../screens/restaurants.screen.styles";
import { LocationContext } from "../../../services/location/location.context";

export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);

  return (
    <SearchContainer>
      <InputSearchContainer>
        <RestaurantsScreenSearchbar
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
