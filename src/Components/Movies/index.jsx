import { series } from "../../mock/buttons"
import { movie } from "../../mock/movies"
import { Button, Buttons_container, Card, Cards_container, Container, Img, Movie_title, Title_container, Title_img } from "./style"

const Movies = () => {

    return(
        <Container>
            <Buttons_container>
                {
                    series.map((item)=>(
                        <Button key={item.id}>{item.title}</Button>
                    ))
                }
            </Buttons_container>
            <Cards_container>
                {
                    movie.map((item)=>(
                        <Card key={item.id}>
                            <Img src={item.img} />
                            <Title_container>
                                <Title_img src={item.img} />
                                <Movie_title>{item.name}</Movie_title>
                            </Title_container>
                        </Card>
                    ))
                }
                
               
                

            </Cards_container>
        </Container>
    )
}

export default Movies