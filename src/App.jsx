import { SharedLayout } from "./components/SharedLayout";
import { Route, Routes, Navigate} from "react-router-dom";
import { lazy } from "react";
// import { lazy, useEffect } from "react";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import('./pages/Home'));

export const App= () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='*' element={<Navigate to ='/'/>}/>
        </Route>    
      </Routes>
    </>
  );
};


