import { SearchComponent } from "../../Search/Search";
import { ConfigurationOption } from "../Options/ConfigurationOption/ConfigurationOption";
import { PublicationOption } from "../Options/PublicationOption/PublicationOption";
import { NavbarMobileLink, NavbarMobileContainer, NavbarMobileBottom, NavbarMobileTop, NavbarMobileButton, NavbarMobileLogo, NavbarMobileTopButtonsContainer, NavbarMobileTopButtons, NavbarMobileTopSearchContainer } from "./styles";

export const NavbarMobile = ({ id, name, search, handleSubmitSearch, listUsers, handleNavigate, handleNavigateSearch, showDropdown, setShowDropdown, showPublicationOption, showConfigurationOption, refPublicationOption, refConfigurationOption, handleShowConfigurationOption, handleShowPublicationOption, handleLang, handleTheme, isMobile, handleLogOut, user }) => {
  return (<NavbarMobileContainer>
    <NavbarMobileTop>
      <NavbarMobileTopButtonsContainer>
        <NavbarMobileLogo>Vic.exchange</NavbarMobileLogo>
        <NavbarMobileTopButtons>
          <div style={{position: 'relative'}} ref={refPublicationOption}>
            <NavbarMobileButton  onClick={handleShowPublicationOption}>Publications</NavbarMobileButton>
            {showPublicationOption && <PublicationOption refOption={refPublicationOption} handleShow={handleShowPublicationOption}/>}
          </div>
          <div style={{position: 'relative'}} ref={refConfigurationOption}>
            <NavbarMobileButton style={{color: '#3483fa'}} onClick={handleShowConfigurationOption}><i class="bi bi-three-dots-vertical"></i></NavbarMobileButton>
            {showConfigurationOption && <ConfigurationOption refOption={refConfigurationOption} handleShow={handleShowConfigurationOption} handleLang={handleLang} handleTheme={handleTheme} isMobile={isMobile} handleLogOut={handleLogOut}/>}
          </div>
        </NavbarMobileTopButtons>
      </NavbarMobileTopButtonsContainer>
      <NavbarMobileTopSearchContainer>
        <SearchComponent placeholder='Search users' value={search} setValue={handleSubmitSearch} list={listUsers} handleNavigate={handleNavigate} handleNavigateSearch={handleNavigateSearch} showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>
      </NavbarMobileTopSearchContainer>
    </NavbarMobileTop>
    <NavbarMobileBottom>
      {user ?
      <>
        <NavbarMobileLink to='/'><i class="bi bi-house-door-fill"></i> Home</NavbarMobileLink>
        <NavbarMobileLink to='/create'><i class="bi bi-pencil-square"></i> Create</NavbarMobileLink>
        <NavbarMobileLink to='/offers'><i class="bi bi-list-check"></i> Offers</NavbarMobileLink>
        <NavbarMobileLink to={`/profile/${id}`}><i class="bi bi-person-fill"></i> {name}</NavbarMobileLink>
      </> : 
      <>
        <NavbarMobileLink to='/'><i class="bi bi-house-door-fill"></i> Home</NavbarMobileLink>
        <NavbarMobileLink to='/login'><i class="bi bi-box-arrow-in-right"></i> Log in</NavbarMobileLink>
        <NavbarMobileLink to='/signup'><i class="bi bi-person-fill-add"></i> Sign up</NavbarMobileLink>
      </> 
      }
    </NavbarMobileBottom>
  </NavbarMobileContainer>)
};