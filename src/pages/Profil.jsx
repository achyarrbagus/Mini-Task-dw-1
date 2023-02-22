import data from "../Data/data.json";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Profil() {
  return (
    <div>
      {data.map((item, index) => (
        <NavLink to={`/profil/${index}`} className="text-decoration-none text-light">
          <Container className="mt-5">
            <Row className="" style={{ backgroundColor: "navy" }}>
              <Col md={1} style={{ margin: "10px" }}>
                <img
                  src={item.image}
                  width={"50px"}
                  height={"50px"}
                  className=""
                  style={{ margin: "10px", borderRadius: "50%" }}
                />
              </Col>
              <Col className="">
                <h2 className="fs-4 text-decoration-none text-light" style={{}}>
                  {item.username}
                </h2>
                <h2 className="fs-4 t">{item.follower}</h2>
              </Col>
            </Row>
          </Container>
        </NavLink>
      ))}
    </div>
  );
}

export default Profil;
