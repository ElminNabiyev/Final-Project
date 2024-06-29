import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import LangProvider from './context/LangProvider';
function App() {
    return (
        <>
            <LangProvider>
                <HelmetProvider>
                    <Helmet>
                        <title>Legendary Games Store | Download & Play PC Games, Mods, & More</title>
                    </Helmet>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MainLayout />}>
                                <Route index element={<Home />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </HelmetProvider>
            </LangProvider>
        </>
    )
}

export default App
