import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LangProvider from './context/LangProvider';
import AdminLayout from './layout/AdminLayout';
import MainLayout from './layout/MainLayout';
import Admin from "./pages/Admin";
import Detail from './pages/Detail';
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import Update from './pages/Update';
import BasketProvider from './context/BasketProvider';
import WishlistProvider from './context/WishlistProvider';
function App() {
    return (
        <>
            <BasketProvider>
                <WishlistProvider>
                    <LangProvider>
                        <HelmetProvider>
                            <Helmet>
                                <title>Legendary Games Store | Download & Play PC Games, Mods, & More</title>
                            </Helmet>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<MainLayout />}>
                                        <Route index element={<Home />} />
                                        <Route path="/:id" element={<Detail />} />
                                        <Route path="/basket" element={<Basket />} />
                                        <Route path="/wishlist" element={<Wishlist />} />
                                    </Route>
                                    <Route path="/adminpanel" element={<AdminLayout />}>
                                        <Route index element={<Admin />} />
                                        <Route path="/adminpanel/update/:id" element={<Update />} />
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </HelmetProvider>
                    </LangProvider>
                </WishlistProvider>
            </BasketProvider>
        </>
    )
}

export default App
