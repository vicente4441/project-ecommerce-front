import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavbarButton, NavbarButtonOptions, NavbarCenter, NavbarLeft, NavbarLogo, NavbarRight } from './styles';
import { SearchComponent } from '../Search/Search';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersSummary } from '../../../services/user';
import { PublicationOption } from './Options/PublicationOption/PublicationOption';
import { ProfileOption } from './Options/ProfileOption/ProfileOption';
import { setUser } from '../../../redux/slices/auth';
import Cookies from 'js-cookie';
import { ConfigurationOption } from './Options/ConfigurationOption/ConfigurationOption';
import { setLang, setTheme } from '../../../redux/slices/configuration';
import { NavbarMobile } from './NavbarMobile/NavbarMobile';

export const NavbarComponent = () => {
  const [search, setSearch] = useState('');
  const [listUsers, setListUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [showPublicationOption, setShowPublicationOption] = useState(false);
  const [showProfileOption, setShowProfileOption] = useState(false);
  const [showConfigurationOption, setShowConfigurationOption] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1024px)').matches);
  const { auth: { user }, configuration: { theme, lang } } = useSelector(state => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const refPublicationOption = useRef(null);
  const refProfileOption = useRef(null);
  const refConfigurationOption= useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitSearch = async (search) => {
    setSearch(search);

    const results = await getUsersSummary(search);

    setListUsers(results.data)
  };

  const handleNavigateSearch = async (search) => {
    setShowDropdown(false);
    navigate('/users');
    setSearchParams({search});
  };

  const handleNavigate = async (id) => {
    setSearch('');
    setListUsers([]);
    navigate(`/profile/${id}`);
  };

  const handleLogOut = () => {
    Cookies.remove('token');
    localStorage.removeItem('persist:auth');
    dispatch(setUser(''));
    handleShowProfileOption();
    navigate('/')
  };

  const handleTheme = () => {
    if(theme === 'Light') dispatch(setTheme('Dark'));
    if(theme === 'Dark') dispatch(setTheme('Light'));
  };

  const handleLang = () => {
    if(lang === 'Es') dispatch(setLang('En'));
    if(lang === 'En') dispatch(setLang('Es'));
  };

  const handleShowPublicationOption = () => setShowPublicationOption(!showPublicationOption);
  const handleShowProfileOption = () => setShowProfileOption(!showProfileOption);
  const handleShowConfigurationOption = () => setShowConfigurationOption(!showConfigurationOption);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
  <div>
    {isMobile ? <NavbarMobile id={user?.id} name={user?.name} search={search} handleSubmitSearch={handleSubmitSearch} listUsers={listUsers} handleNavigate={handleNavigate} handleNavigateSearch={handleNavigateSearch} showDropdown={showDropdown} setShowDropdown={setShowDropdown} refConfigurationOption={refConfigurationOption} refPublicationOption={refPublicationOption} showConfigurationOption={showConfigurationOption} showPublicationOption={showPublicationOption} handleShowConfigurationOption={handleShowConfigurationOption} handleShowPublicationOption={handleShowPublicationOption} handleLang={handleLang} handleTheme={handleTheme} isMobile={isMobile} handleLogOut={handleLogOut} user={user}/> : <Navbar>
      <NavbarRight>
        <NavbarLogo>
          <Link to='/'><img src='../../../Infinity.png'></img></Link>
        </NavbarLogo>
        <NavbarButton>
          <Link to='/'>Home</Link>
        </NavbarButton>
        {user && <NavbarButton><Link to='/create'>Create publication</Link></NavbarButton>}
        {user && <NavbarButton><Link to='/offers'>Offers</Link></NavbarButton>}
      </NavbarRight>
      <NavbarCenter>
        <SearchComponent placeholder='Search users' value={search} setValue={handleSubmitSearch} list={listUsers} handleNavigate={handleNavigate} handleNavigateSearch={handleNavigateSearch} showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>
      </NavbarCenter>
      {user ? <NavbarLeft>
        <NavbarButton>Chat</NavbarButton>
        <div style={{position: 'relative'}} ref={refPublicationOption}>
          <NavbarButton onClick={handleShowPublicationOption}>Publications</NavbarButton>
          {showPublicationOption && <PublicationOption refOption={refPublicationOption} handleShow={handleShowPublicationOption}/>}
        </div>
        <div style={{position: 'relative'}} ref={refProfileOption}>
          <NavbarButton onClick={handleShowProfileOption}>{user.name}</NavbarButton>
          {showProfileOption && <ProfileOption refOption={refProfileOption} handleShow={handleShowProfileOption}  handleLogOut={handleLogOut} id={user?.id}/>}
        </div>
        <div style={{position: 'relative'}} ref={refConfigurationOption}>
          <NavbarButtonOptions onClick={handleShowConfigurationOption}>
            <i class="bi bi-three-dots-vertical"></i>
          </NavbarButtonOptions>
          {showConfigurationOption && <ConfigurationOption refOption={refConfigurationOption} handleShow={handleShowConfigurationOption} handleLang={handleLang} handleTheme={handleTheme}/>}    
        </div>
      </NavbarLeft> : 
      <NavbarLeft>
        <NavbarButton>
          <Link to='login'>Log In</Link>
        </NavbarButton>
        <NavbarButton>
          <Link to='signup'>Sign Up</Link>
        </NavbarButton>
        <div style={{position: 'relative'}} ref={refConfigurationOption}>
          <NavbarButtonOptions onClick={handleShowConfigurationOption}>
            <i class="bi bi-three-dots-vertical"></i>
          </NavbarButtonOptions>
          {showConfigurationOption && <ConfigurationOption refOption={refConfigurationOption} handleShow={handleShowConfigurationOption} handleLang={handleLang} handleTheme={handleTheme}/>}    
        </div>     
      </NavbarLeft>
      }
    </Navbar>}
  </div>
  );
};