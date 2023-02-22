import { parseInt } from "lodash";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import data from "../Data/data.json";

function Detail() {
  const params = useParams();
  const id = parseInt(params.id);
  console.log(id);
  return (
    <Container>
      <Row className="justify-content-center">
        <img src={data[id].image} height={"150px"} className="rounded-circle" style={{ width: "180px" }} />
      </Row>
      <Row className="justify-content-center text-center">
        <h1>{data[id].username}</h1>
      </Row>
      <Row className="text-center gap-2">
        <Col className="text-end fs-3">{data[id].follower}</Col>
        <Col className="text-start fs-3">{data[id].following}</Col>
      </Row>
      <Row className="text-center gap-3">
        <Col className="text-end">
          <h2 className="fs-4">Followers</h2>
        </Col>
        <Col className="text-start">
          <h2 className="fs-4">following</h2>
        </Col>
      </Row>
      <Row>
        <NavLink to="/" style={{ textDecoration: "none", textAlign: "center" }}>
          Back
        </NavLink>
      </Row>
    </Container>
  );
}

export default Detail;
