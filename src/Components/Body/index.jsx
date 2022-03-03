import { Container } from "./style"
import Sidebar from '../Sidebar/index'
import Movies from "../Movies/index"

const Body = () => {

    return(
        <Container>
             <Sidebar />
            <Movies /> 
        </Container>
    )
}

export default Body