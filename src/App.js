import React from "react";
import "./App.css";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Header,
  Button,
  Words,
  Footer,
  List,
  Image,
  Blockquote,
  Row,
  Col,
  SoundsProvider,
  createSounds,
  Table,
  Frame,
} from "arwes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const myTheme = {
  margin: "0 auto",
  fontFamily: "Agency FB",
};

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: ["click.mp3"] }, // The settings to pass to Howler
    },
    typing: {
      sound: { src: ["typing.mp3"] },
      settings: { oneAtATime: true }, // The custom app settings
    },
    deploy: {
      sound: { src: ["/sound/deploy.mp3"] }, //WOULD HAVE TO BUY THESE?
      settings: { oneAtATime: true },
    },
  },
};

const App = () => (
  <ThemeProvider theme={createTheme(myTheme)}>
    <SoundsProvider sounds={createSounds(mySounds)}>
      <Arwes animate>
        <Router>
          <div
            style={{
              padding: 50,
              fontFamily: "Agency FB",
              textAlign: "center",
            }}
          >
            <Header animate style={{ fontSize: 80 }}>
              <div style={{ textAlign: "center" }}>
                Carleton Cyber Security Club
                <img src="https://i.imgur.com/klJEnTf.png" />
              </div>
              <nav>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <Link animate style={{ padding: 20 }} to="/ccsc">
                    <Words animate style={{ color: "#26dafd" }}>
                      Home
                    </Words>
                  </Link>
                  <Link animate style={{ padding: 20 }} to="/events">
                    <Words animate style={{ color: "#26dafd" }}>
                      Events
                    </Words>
                  </Link>
                  <Link animate style={{ padding: 20 }} to="/hackers">
                    <Words animate style={{ color: "#26dafd" }}>
                      Hackers
                    </Words>
                  </Link>
                  <Link animate style={{ padding: 20 }} to="/contract">
                    <Words animate style={{ color: "#26dafd" }}>
                      Contract
                    </Words>
                  </Link>
                  <Link animate style={{ padding: 20 }} to="/join">
                    <Words animate style={{ color: "#26dafd" }}>
                      Join
                    </Words>
                  </Link>
                </div>
              </nav>
            </Header>
          </div>
          <div
            style={{ padding: 0, fontFamily: "Agency FB", textAlign: "center" }}
          >
            <Switch>
              <Route path="/ccsc">
                <Home />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
              <Route exact path="/hackers">
                <Hackers />
              </Route>
              <Route exact path="/contract">
                <Contract />
              </Route>
              <Route exact path="/join">
                <Join />
              </Route>
            </Switch>
          </div>
          <div
            style={{
              padding: 50,
              fontFamily: "Agency FB",
              textAlign: "center",
            }}
          >
            <Footer animate style={{ fontSize: 14, textAlign: "center" }}>
              <br></br>© Carleton Cyber Security Club, 2020
            </Footer>
          </div>
        </Router>
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
);

export default App;

function Home() {
  return (
    <div
      style={{ margin: "0 auto", maxWidth: 1000, background: "transparent" }}
    >
      <Words animate style={{ fontSize: 44, padding: 30 }}>
        Welcome to the official site of the Carleton University Cyber Security
        Club!
      </Words>
      <Row>
        <Col s={7}>
          <Image
            animate
            resources="https://i.imgur.com/LAtJ2Of.jpg"
            style={{ padding: 20 }}
          >
            Defcon China 2019
          </Image>
        </Col>
        <Col s={5}>
          <br></br>
          <p>
            Here you can find information about club events, current membership,
            how to join, and much more!
          </p>
          <br></br>
          <Frame animate level={1} corners={3} style={{ padding: 20 }}>
            <List animate node="ul">
              <li>
                "Arguing that you don’t care about the right to privacy because
                you have nothing to hide is no different than saying you don’t
                care about free speech because you have nothing to say."
              </li>
            </List>
          </Frame>
        </Col>
      </Row>
    </div>
  );
}

function Events() {
  return (
    <div style={{ align: "center", padding: 20, fontFamily: "Agency FB" }}>
      <Words animate style={{ fontSize: 44, padding: 30 }}>
        Upcoming club events:
      </Words>
      <Frame animate level={1} corners={3}>
        <Table
          style={{
            align: "center",
            margin: 50,
            fontFamily: "Agency FB",
            fontSize: 30,
          }}
          animate
          dataset={[
            [
              <a
                href="https://www.meetup.com/Ottawa-Cyber-Security-Meetup/events/272688130/"
                style={{ color: "#26dafd" }}
              >
                {" "}
                Ottawa Cyber Security Meeting{" "}
              </a>,
              "2020/09/15",
              "Scott Wright - CEO - Click Armor & Ajay Sood - RVP Country Manager, Canada - Armis",
            ],
            ["Guest speaker", "2020/11/19", "Samy Kamkar - SQL injections"],
            ["Competition", "2021/05/31", "CyberSec2021"],
          ]}
        />
      </Frame>
    </div>
  );
}

function Hackers() {
  return (
    <div style={{ align: "center" }}>
      <Words animate style={{ fontSize: 44, padding: 30 }}>
        Our current team:
      </Words>
      <Row>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20 }}
          >
            <Header>Interim President</Header>
            <List animate node="ul">
              <li>wayne</li>
            </List>
          </Image>
        </Col>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20 }}
          >
            <Header>VP Admin & Finance</Header>
            <List animate node="ul">
              <li>maria</li>
            </List>
          </Image>
        </Col>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20 }}
          >
            <Header>VP Communications</Header>
            <List animate node="ul">
              <li>david</li>
            </List>
          </Image>
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20 }}
          >
            <Header>VP Public Relations</Header>
            <List animate node="ul">
              <li>desmond</li>
            </List>
          </Image>
        </Col>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20 }}
          >
            <Header>VP Technical Affairs</Header>
            <List animate node="ul">
              <li>zel</li>
            </List>
          </Image>
        </Col>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20 }}
          >
            <Header>VP Technical Operations</Header>
            <List animate node="ul">
              <li>carson</li>
            </List>
          </Image>
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <Image
            animate
            resources="https://i.imgur.com/tTD13E8.png"
            style={{ width: "90%", padding: 20, height: "90%" }}
          >
            <Header>VP technical training</Header>
            <List animate node="ul">
              <li>emma</li>
            </List>
          </Image>
        </Col>
      </Row>
    </div>
  );
}

function Contract() {
  return (
    <div>
      <Words animate style={{ fontSize: 44 }}>
        We can be found at the links below:
      </Words>
      <Row style={{ align: "left" }}>
        <Col s={4} style={{ padding: 50 }}>
          <a href="https://www.instagram.com/carletoncybersecurityclub/">
            <Image
              animate
              resources="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
              style={{ width: 250, height: 250, overflow: "hidden" }}
            />
          </a>
        </Col>
        <Col s={3} style={{ padding: 50 }}>
          <a href="https://discord.gg/9T7h6Jz">
            <Image
              animate
              resources="https://www.jing.fm/clipimg/full/243-2438094_discord-svg-chat-transparent-background-discord-logo-transparent.png"
              style={{
                width: 350,
                height: 350,
                overflow: "hidden",
              }}
            />
          </a>
        </Col>
        <Col s={4} style={{ padding: 50, marginLeft: 50 }}>
          <a href="https://www.cusaonline.ca/clubs/cusahub/">
            <Image
              animate
              resources="https://www.cusaonline.ca/wp-content/uploads/CUSA_logo-small.png"
              style={{ width: 400, height: 400, overflow: "hidden" }}
            />
          </a>
        </Col>
      </Row>
    </div>
  );
}

function Join() {
  return (
    <div>
      <Words animate style={{ fontSize: 44, padding: 30 }}>
        To join the CCSC, please contact wayne.
      </Words>
      <div>
        <Button animate style={{ fontSize: 40 }}>
          <a
            style={{ color: "#26dafd", fontFamily: "Agency FB", fontSize: 44 }}
            href="mailto:cyberseccarleton@gmail.com"
          >
            Email us
          </a>
        </Button>
      </div>
    </div>
  );
}
