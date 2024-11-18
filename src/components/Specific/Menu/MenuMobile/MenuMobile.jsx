import { Input } from "../../../Global/Input/Input";
import { ButtonSwitch, MenuMobileButtonHidden, MenuMobileContainer, MenuMobileItem, MenuMobilePrice, MobileButtonMenu, MobileCategorie, MobileMenuList, MobileSearchContainer } from "./styles";

export const MenuMobile = ({ search, setSearch, handleSearch, categories, handleCategories, handleShowMobileMenu, showMobileMenu }) => {
  const hiddenMenu = {
    transform: 'translateX(-100%)',
    overflowX: 'visible',
    overflowY: 'visible'
  };

  const showMenu = {
    transform: 'translateX(0)',
    overflowX: 'hidden',
    overflowY: 'auto'
  };

  return (<MenuMobileContainer style={showMobileMenu ? showMenu : hiddenMenu}>
    <MenuMobileButtonHidden onClick={handleShowMobileMenu}><i class="bi bi-arrow-left"></i> Menu</MenuMobileButtonHidden>
    <MenuMobileItem>
      Search
      <MobileSearchContainer>
        <Input placeholder='Search item' value={search} setValue={setSearch}/>
        <MobileButtonMenu onClick={() => handleSearch(search)}>Search</MobileButtonMenu>
      </MobileSearchContainer>
    </MenuMobileItem>
    <MenuMobileItem>
      Categories
      <MobileMenuList>
        <MobileCategorie>All</MobileCategorie>
        {categories?.map((categorie) => <MobileCategorie onClick={() => handleCategories(categorie.name)}>{categorie.name}</MobileCategorie>)}
      </MobileMenuList>
    </MenuMobileItem>
    <MenuMobileItem>
      Price
      <MenuMobilePrice>
        <Input placeholder='Start price'/>
        <Input placeholder='Final price'/>
        <MobileButtonMenu onClick={() => handleSearch(search)}>Search</MobileButtonMenu>
      </MenuMobilePrice>
    </MenuMobileItem>
    <ButtonSwitch onClick={handleShowMobileMenu}><i class="bi bi-arrow-right"></i> Menu</ButtonSwitch>
  </MenuMobileContainer>)
};