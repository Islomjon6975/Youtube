import { useContext, useState } from "react"

import { Container, Logo_container, Menu, Logo, Input_container, Icons_container, Search_input, Search_box, Search_icon, Live, Channels, Bell, Person } from "./style"
import { MenuCreateContext } from "../../Context/menuContext";
import { data } from "../../mock/movies";
import { MoviesCreateContext } from "../../Context/moviesContext";


const Navbar = () => {
    const [menu, setMenu] = useContext(MenuCreateContext);
    const [moviess, setMoviess] = useContext(MoviesCreateContext)
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        setSearch(e.target.value)
        const newArr = data.filter((item)=> item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setMoviess(newArr)
    }

    return(
        <Container>
            <Logo_container>
                <Menu onClick={()=>setMenu(!menu)} />
                <Logo />
            </Logo_container>
            <Input_container>
                <Search_input onChange={onChange} placeholder="Search..." />
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