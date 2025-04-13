import { useState } from "react";
import MyHomeCountry from "./MyHomeCountry";
import Countries from "./CountryList";
import World from "./About";
import './menu.css'

const Menu = () => {
    const [activePage, setActivePage] = useState('Home')

    let PageComponent
    switch(activePage) {
        case 'Home':
            PageComponent = Countries;
            break;
        case 'MyHomeCountry':
            PageComponent = MyHomeCountry
            break
        case 'About':
            PageComponent = World
            break
        default:
            PageComponent=Countries
    }
    return (
        <div className="menu-bar">
            <nav className="menu-nav">
                <ul>
                    <li> 
                    <button className={activePage === 'Home' ? 'active' : ''}
                    onClick={() => setActivePage('Home')}>Home</button>
                    </li>
                    <li> 
                    <button className={activePage === 'MyHomeCountry' ? 'active' : ''}
                    onClick={() => setActivePage('MyHomeCountry')}>My Home Country</button>
                    </li>   
                    <li>
                    <button className={activePage === 'About' ? 'active' : ''}
                    onClick={() => setActivePage('About')}>About</button>
                    </li>                 
                </ul>
            </nav>
            <PageComponent/>
        </div>
    )
}

export default Menu