import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const { user, logout } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const initial = user ? user.charAt(0).toUpperCase() : "";

    useEffect(() => {
        const currentSearch = new URLSearchParams(location.search).get("search") || "";
        if (location.pathname === "/") {
            setQuery(currentSearch);
        }
    }, [location]);

    return (
        <header>
            <h1>📽️ CineSphere</h1>

            <nav>
                <Link to="/">Discover</Link>
                <Link to="/watchlist">Watchlist</Link>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const trimmed = query.trim();
                        if (trimmed) {
                            navigate(`/?search=${encodeURIComponent(trimmed)}`);
                        } else {
                            navigate("/");
                        }
                    }}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                    <input
                        type="text"
                        placeholder="search movies..."
                        className="nav-search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </form>

                {user ? (
                    <div style={{ position: "relative" }}>
                        <div
                            className="avatar"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            {initial}
                        </div>

                        {showMenu && (
                            <div className="dropdown">
                                <button onClick={() => { logout(); setShowMenu(false); navigate("/login"); }}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
}
