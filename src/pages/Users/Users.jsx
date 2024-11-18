import { useSearchParams } from "react-router-dom";
import { User, UserButton, UserButtonFilter, UserButtonsContainer, UserButtonsFilter, UserButtonsFilterContainer, UsersContainer, UsersList, UsersTitle } from "./style";
import { getUsers } from "../../services/user";
import { useEffect, useState } from "react";
import { UserCard } from "../../components/Global/UserCard/UserCard";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Global/Loading/Loading";
import { AxiosError } from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const created = searchParams.get('created') || 'desc';
  const { auth: { user: me } } = useSelector(state => state);
  
  const fetchGetUsers = async () => {
    setLoading(true);
    const results = await getUsers(search, created)

    if(results && !(results instanceof AxiosError)){
      setUsers(results.data);
    }else{
      console.log(results)
    }

    setLoading(false);
  };

  const handleFilter = (e) => {
    let obj ={};

    searchParams.forEach((value, key) => {
      obj[key] = value
    });

    setSearchParams({...obj, created: e.target.value})
  }

  useEffect(() => {
    fetchGetUsers();
  }, [search, created]);

  if(loading) return <Loading/>;

  return (<UsersContainer>
    <UsersTitle>Search results <span>{search}</span></UsersTitle>
    <UserButtonsFilterContainer>
      <UserButtonsFilter>
        <UserButtonFilter onClick={handleFilter} value='desc'><i class="bi bi-arrow-up"></i>Mas reciente</UserButtonFilter>
        <UserButtonFilter onClick={handleFilter} value='asc'><i class="bi bi-arrow-down"></i>Mas viejo</UserButtonFilter>
      </UserButtonsFilter>
      <p>Filtrado por: {created === 'desc' ? 'Mas reciente' : created === 'asc' ? 'Mas viejo': ''}</p>
    </UserButtonsFilterContainer>
    <UsersList>
      {users.map((user) => <UserCard key={user.id} id={user.id} own={user.id === me.id} name={user.name} lastName={user.lastName} country={user.country} city={user.city} state={user.state}/>)}
    </UsersList>
  </UsersContainer>)
};