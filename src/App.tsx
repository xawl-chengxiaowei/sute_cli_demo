import React from "react";
import XWAppHeader from "./components/app-header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import XWAppFooter from "./components/app-footer"
import XWDiscover from "./pages/discover";
import XWMySong from "./pages/mysong";
import XWMine from "./pages/mine";
import './assets/css/global.scss'

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="globalContent">
                    <XWAppHeader />
                    {/* 这里是路由的相关配置 */}
                    <div className="wrapperContent">
                        <Routes>
                            <Route path="/" element={<XWDiscover />} />
                            <Route path="/discover" element={<XWDiscover />} />
                            <Route path="/mine" element={<XWMine />} />
                            <Route path="/mysong" element={<XWMySong />} />
                        </Routes>
                    </div>
                    <XWAppFooter />
                </div>
            </HashRouter>
        </Provider>
    );
}

export default App;
