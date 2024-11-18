import { useEffect } from "react";
import { ConfigurationOptionContainer } from "./styles";
import { useSelector } from "react-redux";

export const ConfigurationOption = ({ refOption, handleShow, handleTheme, handleLang, handleLogOut, isMobile }) => {
  const { configuration: { theme, lang }, auth: { user } } = useSelector(state => state);

  const handleClickDropdown = (e) => {
    if(refOption.current && !refOption.current.contains(e.target)){
      handleShow()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickDropdown)

    return () => {
      document.removeEventListener('click', handleClickDropdown)
    }
  });

  return (<ConfigurationOptionContainer>
    <p onClick={handleTheme}>{theme === 'Light' ? <i class="bi bi-brightness-high-fill"></i> : <i class="bi bi-moon-stars-fill"></i>} Theme: {theme}</p>
    <p onClick={handleLang}><i class="bi bi-translate"></i> Lang: {lang}</p>
    {isMobile && user ? <p onClick={handleLogOut}><i class="bi bi-box-arrow-in-left"></i> Log out</p>: <></>}
  </ConfigurationOptionContainer>)
};