import React, { useRef, useState } from 'react';
import { Search, SearchContainer, SearchDelete } from './styles';
import { Dropdown } from './Dropdown/Dropdown';

export const SearchComponent = ({ value, setValue, placeholder, list, handleNavigate, handleNavigateSearch, showDropdown, setShowDropdown }) => {
  const refSearch = useRef(null);

  return (
  <SearchContainer ref={refSearch}>
    <Search placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} onFocus={() => setShowDropdown(true)}/>
    {/* <SearchDelete><i class="bi bi-x-lg"></i></SearchDelete> */}
    {value && showDropdown && <Dropdown refSearch={refSearch} value={value} handleNavigate={handleNavigate} showDropdown={showDropdown} setShowDropdown={setShowDropdown} list={list} handleNavigateSearch={handleNavigateSearch}/>}
  </SearchContainer>)
};