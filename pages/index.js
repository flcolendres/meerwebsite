import Head from "next/head";
import styles from "../styles/page.module.css"
import { Col, Container, Nav, Navbar, Row, Image, Card, Alert } from "react-bootstrap";

export default function Home() {
  function showMessage(){
    // <Alert variant="success">
    //   <Alert.Heading>You can contact me via:</Alert.Heading>
    // </Alert>
    alert("E-mail: waiselham@hotmail.ca\nPhone: 647-303-2773")
    console.log("pressed")
  }
  return (
    <>
      <Head>
        <title>Toronto Driving Lesson</title>
      </Head>
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Meer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={showMessage}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <main className={`${styles.main}`}>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image className={`${styles.image}`} src="/assets/car.png" alt="Car image"/>
              </Col>
              <Col className={`${styles.column}`}>
                Hello! My name is Meer, your dedicated driving instructor with a passion for empowering learners with the skills and knowledge needed to navigate the roads with confidence. 
                With years of experience in the driver's seat, I am committed to providing top-notch instruction tailored to your individual needs. 
                Join me on this journey towards mastering the art of driving and unlocking a world of possibilities behind the wheel.
              </Col>
            </Row>
          </Container>
          <br />
          <Container>
            <Row className={`${styles.card}`}>
              <Col xs={6} md={4}>
                <Card style={{ width: '18rem'}}>
                  <Card.Img variant="top" src="/assets/g2.png" />
                  <Card.Body>
                    <Card.Title>G2 Lesson Price</Card.Title>
                    <Card.Text>
                      $50/hr
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4}> 
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/assets/g.png" />
                  <Card.Body>
                    <Card.Title>G Lesson Price</Card.Title>
                    <Card.Text>
                      $60/hr
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          
          <Image className={`${styles.img}`}src="https://www.autos.ca/wp-content/uploads/2013/06/478204361.jpg"></Image>
      </main>


    </>
  );
}
