import { useState } from "react";
import MyHomeCountry from "./MyHomeCountry";
import About from "./About";
import './menu.css'
import Home from "../pages/Home";
import Header from "./Header";

const MainPage = () => {
    const [activePage, setActivePage] = useState('Home')

    let PageComponent
    switch(activePage) {
        case 'Home':
            PageComponent = Home;
            break;
        case 'MyHomeCountry':
            PageComponent = MyHomeCountry
            break
        case 'About':
            PageComponent = About   
            break
        default:
            PageComponent=Home
    }
    return (
        <div className="menu-bar">
            <Header activePage={activePage} setActivePage={setActivePage}/>
            <PageComponent/>
        </div>
    )
}

export default MainPage