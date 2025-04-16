import { Stack } from "@mui/material";
import NavButton from "./NavButton"

function Header({activePage, setActivePage}) {
    const navItems = [
        {label: "Home", value: "Home"},
        {label: "My Home Country", value: "MyHomeCountry"},
        {label: "About", value: "About"},
    ]
    return (
    <nav style={{ padding: "1rem" }}>
    <Stack 
        direction="row" 
        spacing={3}
        justifyContent="center"
        sx={{mt:3, mb: 3}}
    >
    {navItems.map((item) => (
        <NavButton 
        key={item.value} 
        onClick={()=> setActivePage(item.value)}
        active={activePage === item.value}
        >
            {item.label}
        </NavButton>
    ))}
    </Stack>
    </nav>
    )
}

export default Header