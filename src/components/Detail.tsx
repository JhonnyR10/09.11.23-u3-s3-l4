import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
type IdArticleParams = {
    id: string
}

const Detail = () => {
    const params = useParams<IdArticleParams>()
    return (
        <Container>
            
        </Container>
    )
}
export default Detail