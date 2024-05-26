import Login from "../pages/Login";
import Home from "../pages/Home";
import DetailMenu from "../pages/DetailMenu";
import ProtectedRoute from "../routes/ProtectedRoute";
import AddMenu from "../pages/AddMenu";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/menu/add",
    element: <AddMenu />,
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <DetailMenu />
      </ProtectedRoute>
    ),
  },
];
