import Home from "./Pages/Home";
import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
// import DetailThreads from "./Feathurs/Threads/Components/DetailThreads";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { RootState } from "./Store/Type/rootState";
import { useDispatch, useSelector } from "react-redux";
import { API, setAuthToken } from "./libs/Api";
import { useEffect, useState } from "react";
import { AUTH_CHECK, AUTH_ERROR } from "./Store/rootReducer";
import Main from "./LayOut/Main";

export default function App() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      console.log("check auth app", response);

      dispatch(AUTH_CHECK(response.data.user));
      setIsLoading(false);
    } catch (err) {
      dispatch(AUTH_ERROR());
      console.log("auth check error", err);
      setIsLoading(false);
      navigate("/auth/login");
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  // Private Root
  function IsNotLogin() {
    if (!localStorage.token) {
      return <Navigate to="/auth/login" />;
    } else {
      return <Outlet />;
    }
  }

  function IsLogin() {
    if (localStorage.token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route path="/" element={<IsNotLogin />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/" element={<IsLogin />}>
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      )}
    </>
  );
}
