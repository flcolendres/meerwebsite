import Head from "next/head";
import styles from "../styles/page.module.css"
import { Col, Container, Nav, Navbar, Row, Image } from "react-bootstrap";

export default function Home() {
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
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <main className={`${styles.main}`}>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image className={`${styles.image}`} src="/assets/car.png" alt="Car image" fluid/>
              </Col>
              <Col>
                Hello! My name is Meer, your dedicated driving instructor with a passion for empowering learners with the skills and knowledge needed to navigate the roads with confidence. 
                With years of experience in the driver's seat, I am committed to providing top-notch instruction tailored to your individual needs. 
                Join me on this journey towards mastering the art of driving and unlocking a world of possibilities behind the wheel.
              </Col>
            </Row>
          </Container>
        
      </main>


    </>
  );
}
