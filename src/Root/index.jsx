import Body from "../Components/Body"
import Sidebar from "../Components/Sidebar"
import { Container } from "./style"

const Root = () => {

    return(
        <Container>
            <Sidebar />
            <Body />
        </Container>
    )
}

export default Root