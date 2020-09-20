import React from "react";
import { useRef } from "react";
import "./App.css";
import "./index.css";
import { VectorMap } from "react-jvectormap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import RegionChart from "./RegionChart";

function Region() {
  const refContainer = useRef();
  return (
    <Container fluid={true}>
      <div className="cd smalltext ml-3">
        <Card className="bg-dark feed text-white">
          <CardBody>
            <CardTitle>STATISTICS BY REGION</CardTitle>
            <hr />
            <Row>
              <Col lg="5" md="5" xs="6" sm="5">
                <Row>
                  <Col>TOTAL DOWNLOADS</Col>
                  <Col>FEEDBACKS</Col>
                </Row>
                <Row>{<RegionChart />}</Row>
                {/* <Row>
                <Col>0</Col>
                <Col>924</Col>
              </Row> */}
                {/* <img src="semiDoughnut.png" width="300"></img> */}
              </Col>
              <Col lg="7" md="5" xs="6" sm="7">
                <div style={{ width: 400, height: 450 }}>
                  <VectorMap
                    map={"world_mill"}
                    scale="1"
                    backgroundColor="#353B39"
                    ref={refContainer}
                    containerStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                    containerClassName="map"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}

export default Region;
