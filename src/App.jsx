import { useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import DetailMenu from "./pages/DetailMenu";
import { routeList } from "./routes/routeList";
function App() {
  const element = useRoutes(routeList);
  return element;
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/menu/:id" element={<DetailMenu />} />
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default App;
