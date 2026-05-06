import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Discover from "./pages/Discover";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/Watchlist";
import ProtectedRoute from "./components/ProtectedRoute";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Discover />} />
          <Route path="login" element={<Login />} />
          <Route path="movies/:id" element={<MovieDetail />} />
 
         
          <Route
            path="watchlist"
            element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
 