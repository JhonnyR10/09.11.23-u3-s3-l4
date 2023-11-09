import { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import Articles from '../interfaces/Articles'
import SingleArticle from './SingleArticle'


const Home = () => {
    const [articles, setArticles] = useState<Articles[]>([])
    
    useEffect(() => {
      // faccio la fetch per riempire "reservations"
      fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error('errore brutto brutto nella fetch!')
          }
        })
        .then((data) => {
          // data è l'array di articoli
           setArticles(data.results)
        })
        .catch((err) => {
          console.log('ERRORE', err)
        })
    }, [])
    return (
         <Container>
          <h2>Articoli</h2>
      <Row className="justify-content-center">
        
        
            {articles.map((a) => {
              return <SingleArticle article={a} key={a.id} />
            })}
        
        
      </Row>
    </Container>
  );



}
export default Home