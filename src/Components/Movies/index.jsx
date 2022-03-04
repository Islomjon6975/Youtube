import { series } from "../../mock/buttons"
import { data } from "../../mock/movies"
import { Button, Buttons_container, Card, Cards_container, Container, Img, Movie_title, No_Video, Title_container, Title_img, NoVideo } from "./style"
import { MoviesCreateContext } from "../../Context/moviesContext"
import { useContext, useState } from "react"


const Movies = () => {
    const [movie, setMovie] = useContext(MoviesCreateContext);
    
    const onClick = (title) => {
        const newarr = data.filter((item)=> item.category.toLowerCase() === title.toLowerCase())
        setMovie(newarr)
    }


    return(
        <Container>
            <Buttons_container>
                {
                    series.map((item)=>(
                        <Button  onClick={()=>onClick(item.title)} key={item.id}>{item.title}</Button>
                    ))
                }
            </Buttons_container>
            {
                movie.length ? (
                    <Cards_container>
                { 
                    movie.map((item)=>(
                        <Card key={item.id}>
                            {/* <Img src={item.img} /> */}
                            {/* <video src='https://youtu.be/CT7YhRBOweA' poster={item.img} width="100%" height="240" controls  /> */}
                            <video width="100%" height="240" controls autoPlay poster={item.img} >
                                <source src={item.img}  type="video/mp4"/>
                            </video>
                            <Title_container>
                                <Title_img src={item.img} />
                                <Movie_title>{item.name}</Movie_title>
                            </Title_container>
                        </Card>
                    ))  
                }
            </Cards_container>
                ):(
                    <NoVideo>No such videos</NoVideo>
                )
            }
            
        </Container>
    )
}

export default Movies