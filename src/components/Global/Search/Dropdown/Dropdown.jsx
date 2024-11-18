import { useEffect } from "react"
import { DropdownContainer, DropdrownOption, DropdrownOptionDefault } from "./styles"

export const Dropdown = ({ refSearch, setShowDropdown, list, handleNavigate, value, handleNavigateSearch }) => {
  const handleClickDropdown = (e) => {
    if(refSearch.current && !refSearch.current.contains(e.target)){
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickDropdown)

    return () => {
      document.removeEventListener('click', handleClickDropdown)
    }
  });

  return (<DropdownContainer>
      <ul>
        {list.map((option) => <DropdrownOption key={option.id} onClick={() => handleNavigate(option.id)}>{option.name} {option.lastName}</DropdrownOption>)}
        <DropdrownOptionDefault onClick={() => handleNavigateSearch(value)}><i class="bi bi-search"></i> Search {value}</DropdrownOptionDefault>
      </ul>
    </DropdownContainer>)
}