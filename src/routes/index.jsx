import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { NavbarComponent } from "../components/Global/Navbar/Navbar";
import { LogIn } from "../pages/LogIn/LogIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Create } from "../pages/Create/Create";
import { Publication } from "../pages/Publication/Publication";
import { Footer } from "../components/Specific/Footer/Footer";
import { Offers } from "../pages/Offers/Offers";
import { OffersSubpage } from "../components/Specific/Subpages/Offers/OffersSubpage";
import { Profile } from "../pages/Profile/Profile";
import { PublicationsSubPage } from "../components/Specific/Subpages/Publications/PublicationsSubPage";
import { ConfigurationSubPage } from "../components/Specific/Subpages/Configuration/ConfigurationSubPage";
import { MiniListFriends } from "../components/Specific/MiniListFriends/MiniListFriends";
import { useDispatch, useSelector } from "react-redux";
import { ReviewsSubpage } from "../components/Specific/Subpages/Reviews/ReviewsSubpage";
import { LikesSubpage } from "../components/Specific/Subpages/Likes/LikesSubpage";
import { Users } from "../pages/Users/Users";
import { MyPublications } from "../pages/MyPublications/MyPublications";
import { Likes } from "../pages/Likes/Likes";
import { UserPublications } from "../pages/UserPublications/UserPublications";
import { useEffect } from "react";
import { setUser } from "../redux/slices/auth";
import Cookies from "js-cookie";

const Layout = () => {
  const { auth: { user } } = useSelector(state => state);
  const cookie = Cookies.get('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if(!cookie){
      localStorage.removeItem('persist:auth');
      dispatch(setUser(''));
    }  
  }, []);

  return (
    <div>
      <NavbarComponent/>
      <Outlet/>
      {/* {user && <MiniListFriends/>} */}
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },{
        path: '/login',
        element: <LogIn/>
      },{
        path: '/signup',
        element: <SignUp/>
      },{
        path: '/create',
        element: <Create/>
      },{
        path: '/publication/:id',
        element: <Publication/>
      },{
        path: '/offers',
        element: <Offers/>,
        children: [{ 
            index: true, 
            element: <Navigate to="received/pending" replace /> 
          },
          {
            path: 'received',
            element: <OffersSubpage action='received'/>,
            children: [{
              path: ':status',
              element: <OffersSubpage/>
            }]
          },
          {
            path: 'made',
            element: <OffersSubpage action='made'/>,
            children: [{
              path: ':status',
              element: <OffersSubpage/>
            }]
          }
        ]
      },{
        path: '/profile/:id',
        element: <Profile/>,
        children: [{ 
          index: true, 
          element: <Navigate to="publications" replace /> 
        },{
          path: 'publications',
          element: <PublicationsSubPage/>
        },{
          path: 'likes',
          element: <LikesSubpage/>
        },{
          path: 'reviews',
          element: <ReviewsSubpage/>
        },{
          path: 'configuration',
          element: <ConfigurationSubPage/>
        }]
      },{
        path: '/users',
        element: <Users/>
      },{
        path: '/myPublications',
        element: <MyPublications/>
      },{
        path: '/likes',
        element: <Likes/>
      },{
        path: '/publications/:id',
        element: <UserPublications/>
      }
    ]
  }
])

const routerPublic = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },{
        path: '/login',
        element: <LogIn/>
      },{
        path: '/signup',
        element: <SignUp/>
      },{
        path: '/publication/:id',
        element: <Publication/>
      },{
        path: '/profile/:id',
        element: <Profile/>,
        children: [{ 
          index: true, 
          element: <Navigate to="publications" replace /> 
        },{
          path: 'publications',
          element: <PublicationsSubPage/>
        },{
          path: 'reviews',
          element: <ReviewsSubpage/>
        }]
      },{
        path: '/users',
        element: <Users/>
      },{
        path: '/publications/:id',
        element: <UserPublications/>
      },{
        path: '*',
        element: <Navigate to='/' replace={true}/>
      }
    ]
  }
])

export const Routes = () => {
  const { auth: { access } } = useSelector(state => state);

  return (
    <RouterProvider router={access ? router : routerPublic}/>
  )
};

export default router;