import { useContext } from "react"
import { useState } from "react"
import { icons, icons2, icons3 } from "../../mock/icons"
import { Container, False_container, Icon, Iconsss, Iconsss_icon, Iconsss_title, Iconst_container, Icons_tolqin, Line, Logo, Logo_container, Menu, Title, Wrapper } from "./style"
import { MenuCreateContext } from "../../Context/menuContext"
import { menuIcons } from "../../mock/menu-small-icons"

const Sidebar = () => {
    const [state, setState] = useState('Home')
    const [scroll, setScroll] = useState(false)
    const [menuu, setMenu] = useContext(MenuCreateContext)
    
    return(
        <>

        {
            !menuu ? (
                <Container displayy={menuu}  scroll={scroll} onMouseEnter={()=>setScroll(!scroll)} onMouseLeave={()=>setScroll(!scroll)}>
                {
                    icons.map((value)=>(
                        <Wrapper border={value.title==='Shorts' && value.title} color={state == value.title && state} onClick={()=>setState(value.title)}>
                            <Icon src={value.icon} alt="" />
                            <Title>{value.title}</Title>
                        </Wrapper>
                    ))
                }
                {
                    icons2.map((value)=>(
                        <Wrapper border={value.title==='Daha fazla gozter' && value.title} color={state == value.title && state} onClick={()=>setState(value.title)}>
                            <Icon src={value.icon} alt="" />
                            <Title>{value.title}</Title>
                        </Wrapper>
                    ))
                }
                {
                    icons3.map((value)=>(
                        <Wrapper  border={value.title==='Daha fazla gozter' && value.title} color={state == value.title && state} onClick={()=>setState(value.title)}>
                            <Icon src={value.icon} alt="" />
                            <Title>{value.title}</Title>
                            <Icons_tolqin src={value.tolqin} sizee={value.id > 3 && '8px'} />
                        </Wrapper>
                    ))
                }  
        </Container>
            ):(
                <False_container>
                    {
                        menuIcons.map((item)=>(
                            <Iconsss onClick={()=>setState(item.title)} color={state == item.title && state}>
                                <Iconsss_icon src={item.icon} alt="icons" />
                                <Iconsss_title>{item.title}</Iconsss_title>
                            </Iconsss>
                        ))
                    }
                    
                </False_container>
            )
        }

        </>
        
    )
}

export default Sidebar