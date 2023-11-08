import Home from "./Pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
// import DetailThreads from "./Feathurs/Threads/Components/DetailThreads";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
// import { RootState } from "./Store/Type/rootState";
import { useDispatch } from "react-redux";
import { API, setAuthToken } from "./libs/Api";
import { ReactNode, useEffect } from "react";
import { AUTH_CHECK, AUTH_ERROR } from "./Store/rootReducer";
import SearcUser from "./Pages/SearcUser";
import DetailProfile from "./Pages/detailProfile";
// import Main from "./LayOut/Main";

export default function App() {
  // const auth = useSelector((state: RootState) => state.auth);
  // console.log(auth);

  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const navigate = useNavigate();
  
  const dispatch = useDispatch();
  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
      console.log(response);
      
    } catch (err) {
      dispatch(AUTH_ERROR());
      console.log("auth check error", err);
      return <Navigate to="/auth/login" />;
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } 
  }, []);

  // Private Root
  function IsNotLogin({ children }: { children: ReactNode }) {
    const token = localStorage.getItem("token");
    if (!token) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }

  function IsLogin({children } : {children: ReactNode}) {
    const token = localStorage.getItem("token");
    if (token) {
      return children;
    } else {
      return <Navigate to="/auth/login" />;
    }
  }

  return (
    <>
        <Routes>
          
            <Route path="/" element={
            <IsLogin>
              <Home />
            </IsLogin>
          } />
            <Route path="/search" element={
              <IsLogin>

                <SearcUser />
              </IsLogin>
            } />
            <Route path="/detailprofile" element={
              <IsLogin>
            <DetailProfile />
            </IsLogin>
            } />
         

         
            <Route path="/auth/register" element={
              <IsNotLogin>

                <Register />
              </IsNotLogin>
            } />
            <Route path="/auth/login" element={
              <IsNotLogin>
            <Login />
            </IsNotLogin>
            } />
            
     
        </Routes>
    </>
  );
}
