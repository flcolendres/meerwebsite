import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import styles from "@/app/page.module.css"
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
              <Col>
                <Image src="assets/car.png" fluid/>
              </Col>
              <Col>Welcome to Meer's Driving School, where expertise meets experience on the road to safe and confident driving. I'm Meer, your dedicated driving instructor with a passion for empowering learners with the skills and knowledge needed to navigate the roads with confidence. With years of experience in the driver's seat, I am committed to providing top-notch instruction tailored to your individual needs. Join me on this journey towards mastering the art of driving and unlocking a world of possibilities behind the wheel.</Col>
            </Row>
          </Container>
        
      </main>


    </>
  );
}
