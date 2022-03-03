import { useState } from "react"
import { icons } from "../../mock/icons"
import { Container, Icon, Logo, Logo_container, Menu, Title, Wrapper } from "./style"


const Sidebar = () => {
    const [state, setState] = useState(false)

    return(
        <Container>
            <Logo_container>
                <Menu />
                <Logo />
            </Logo_container>
            {
                icons.map((value)=>(
                    <Wrapper color={state && state} onClick={()=>setState(!state)}>
                        <Icon src={value.icon} alt="" />
                        <Title>{value.title}</Title>
                    </Wrapper>
                ))
            }
            
        </Container>
    )
}

export default Sidebar