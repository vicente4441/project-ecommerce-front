import React, { useEffect, useState } from 'react';
import { ButtonMenu, Categorie, ListCategories, MenuContainer, MenuItem, PriceContainer, SearchContainer } from './styles';
import { Input }from '../../Global/Input/Input'
import { MenuMobile } from './MenuMobile/MenuMobile';

export const Menu = ({ categories, handleCategories, handlePrice, handleSearch }) => {
  const [initialPrice, setInitialPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [search, setSearch] = useState('');
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 920px)').matches);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 920px)');

    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
  <div>
    {isMobile ? <MenuMobile categories={categories} handleCategories={handleCategories} showMobileMenu={showMobileMenu} handleShowMobileMenu={handleShowMobileMenu}/> : 
      <MenuContainer>
        <MenuItem>
          Search
          <SearchContainer>
          <Input placeholder='Search item' value={search} setValue={setSearch}/>
          <ButtonMenu onClick={() => handleSearch(search)}>Search</ButtonMenu>
          </SearchContainer>
        </MenuItem>
        <MenuItem>
          Categories
          <ListCategories>
            <Categorie onClick={() => handleCategories('')}>- All</Categorie>
            {categories?.map((categorie) => <Categorie onClick={() => handleCategories(categorie.name)}>- {categorie.name}</Categorie>)}
          </ListCategories>
        </MenuItem>
        <MenuItem>
          Price
          <PriceContainer>
            <Input placeholder='Initial price' value={initialPrice} setValue={setInitialPrice}/> - <Input placeholder='Final price' value={finalPrice} setValue={setFinalPrice}/> 
            <ButtonMenu onClick={() => handlePrice(initialPrice,finalPrice)}>Search</ButtonMenu>
          </PriceContainer>
        </MenuItem>
      </MenuContainer>
    }
  </div>)
}