import {Col } from 'react-bootstrap'
import Articles from '../interfaces/Articles'
import { Link } from 'react-router-dom';

const SingleArticle = ({ article }: { article: Articles }) => {
    return (
      <Link to={article.id.toString()}>
      <Col xs={12}>
          <img src={article.image_url} alt="" style={{width:'200px'}} />
          
          <span>
              
      {article.title} | {article.published_at}
          </span>
    </Col>
      </Link>
  )
}

export default SingleArticle