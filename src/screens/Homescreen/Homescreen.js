import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import './_homescreen.scss';
const Homescreen = () => {
  return (
    <div>
        <Container>
            <Categories/>
      <Row>
        {[...new Array(20)].map(() =>(
          <Col Lg={3} md={4}>
            <Video/>
          </Col>
        ))}
        </Row>
        </Container>
    </div>
  )
}

export default Homescreen
