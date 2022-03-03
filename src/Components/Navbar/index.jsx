import { useContext } from "react"

import { Container, Logo_container, Menu, Logo, Input_container, Icons_container, Search_input, Search_box, Search_icon, Live, Channels, Bell, Person } from "./style"
import { MenuCreateContext } from "../../Context/menuContext"


const Navbar = () => {
    const [menu, setMenu] = useContext(MenuCreateContext)

    return(
        <Container>
            <Logo_container>
                <Menu onClick={()=>setMenu(!menu)} />
                <Logo />
            </Logo_container>
            <Input_container>
                <Search_input placeholder="Search..." />
                <Search_box>
                    <Search_icon />
                </Search_box>
            </Input_container>
            <Icons_container>
                <Live />
                <Channels />
                <Bell />
                <Person />
            </Icons_container>
        </Container>
    )
}

export default Navbar