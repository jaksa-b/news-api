import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAutocompletes } from "../../redux/actions/autocompletes";

const Autocomplete = ({ onItemSelect, ...props }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const autocompletes = useSelector((state) => state.autocompletes.data);

  const onAutocompleteChange = (e) => {
    const term = e.target.value;
    console.log(term);
    setSearchValue(term);
  };

  const onSearch = () => {
    setShowDropdown(true);
    dispatch(getAutocompletes({ term: searchValue }));
  };

  const onSelect = (id) => {
    console.log(id);
    onItemSelect(id);
    setShowDropdown(false);
  };

  return (
    <Wrapper>
      <Input value={searchValue} onChange={onAutocompleteChange} {...props} />
      <Button onClick={onSearch}>Search</Button>

      {autocompletes.length > 0 && showDropdown ? (
        <Dropdown>
          {autocompletes.map(({ id, text }, index) => (
            <DropdownItem onClick={() => onSelect(id)} key={index}>
              {text}
            </DropdownItem>
          ))}
        </Dropdown>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: 1px solid #dadada;
  padding: 16px 8px;
  width: 80%;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 2px;
`;

const Button = styled.button`
  width: 20%;
  border: 1px solid #dadada;
  padding: 16px 32px;
  background-color: #dadada;
  cursor: pointer;
`;

const Dropdown = styled.div`
  border: 1px solid #dadada;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
`;

const DropdownItem = styled.div`
  border-bottom: 0.5px solid #dadada;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #dadada;
  }
`;

export default Autocomplete;
