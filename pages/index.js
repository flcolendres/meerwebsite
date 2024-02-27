import Head from "next/head";
import styles from "../styles/page.module.css"
import { Col, Container, Nav, Navbar, Row, Image, Card } from "react-bootstrap";

export default function Home() {
  const email = "waiselham@hotmail.ca"
  const phone = "647-303-2773"
  function showMessage(){
    alert(`E-mail: ${email}\nPhone: ${phone}`)
    console.log("pressed")
  }
  return (
    <>
      <Head>
        <title>Toronto Driving Lesson</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
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
        <Container style={{position:'relative', textAlign:'center', color:'white'}}>
          <Image src="/assets/highway.jpg" style={{maxWidth:'100%', borderRadius:'50%'}}/>
          <div className={`${styles.textA}`}>Looking for a driving lesson?</div>
          <div className={`${styles.textB}`}>
            <mark>Email: {email}</mark><br /> 
            <mark>Phone: {phone} </mark> <br />
            <mark>Within North York only!</mark>
          </div>
        </Container>
        {/* <Container fluid="md">
        <h3 xs="auto" style={{maxWidth: '100%', marginTop: '10rem', textAlign:'center'}}> 
          Hello! My name is Meer, your dedicated driving instructor with a passion for empowering learners 
          with the skills and knowledge needed to navigate the roads with confidence.
          I am committed to providing top-notch instruction tailored to your individual needs. 
          Join me on this journey towards mastering the art of driving and unlocking a world of possibilities behind the wheel.
        </h3>
        </Container> */}

        <Container style={{marginTop:"1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Row>
            <Col xs="auto">
              <Card className={`${styles.cards}`}>
                <Card.Img variant="top" src="/assets/g2.png" />
                <Card.Body>
                  <Card.Text style={{fontSize:"18px"}}>$50/hr</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="auto">
              <Card className={`${styles.cards}`}>
                <Card.Img variant="top" src="/assets/g.png" />
                <Card.Body>
                  <Card.Text style={{fontSize:"18px"}}>$60/hr</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container style={{marginTop:"1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Image src="https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/cor/col/big/b24_bprbe_fl1_01k3_a.png?ck=02262024051206" width="100%"/>
        </Container>
      </main>


    </>
  );
}
