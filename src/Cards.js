import React, { useEffect, useState } from "react";
import axios from "axios";
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

import PieChart from "./PieChart";
import ResponseChart from "./ResponseChart";
import PlayChart from "./PlayChart";
import DJChart from "./DJChart";
import RadioChart from "./RadioChart";
import Header from "./Header";

import "./index.css";
function Cards() {
  const [data, setData] = useState({
    download: "",
    previous: "",
    feedback: "",
    Avgrating: "",
    rating: "",
    chanceOfPlaying: "",
    tracks: [],
    percentage: [],
    trackname: [],
    rating_arr: [],
    play_data: [],
  });
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/downloads").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <Container className="smalltext" fluid={true}>
      <div>{<Header />}</div>
      <div className="">
        <Container fluid={true}>
          <Row>
            <Col xs="6" sm="4" lg="4">
              <Card className="bg-dark cw">
                <CardBody>
                  <CardTitle className="mb-2 text-muted">
                    Total Downloads
                  </CardTitle>
                  <CardText className="text-white">{data.download}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" sm="4" lg="4">
              <Card className="bg-dark cw">
                <CardBody>
                  <CardTitle className="mb-2 text-muted">
                    Total Previews
                  </CardTitle>
                  <CardText className="text-white">{data.previous}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" sm="4" lg="4">
              <Card className="bg-dark cw">
                <CardBody>
                  <CardTitle className="mb-2 text-muted">
                    Total Feedback
                  </CardTitle>
                  <CardText className="text-white">{data.feedback}</CardText>
                </CardBody>
              </Card>
            </Col>

            <Col xs="6" sm="4" lg="4">
              <Card className="bg-dark cw">
                <CardBody>
                  <CardTitle className="mb-2 text-muted">
                    Average Rating(Out of 10)
                  </CardTitle>
                  <CardText className="text-white">{data.Avgrating}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" sm="4" lg="4">
              <Card className="bg-dark cw">
                <CardBody>
                  <CardTitle className="mb-2 text-muted">
                    Average Reaction
                  </CardTitle>
                  <CardText className="text-white">{data.rating}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" sm="4" lg="4">
              <Card className="bg-dark cw">
                <CardBody>
                  <CardTitle className="mb-2 text-muted">
                    Chance of Playing
                  </CardTitle>
                  <CardText className="text-white">
                    {data.chanceOfPlaying}%
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="cd">
        <Card className="bg-dark ml-4 feed">
          <CardBody>
            {/* <CardTitle className="mb-2 text-muted">Average Rating(Out of 10)</CardTitle> */}
            <CardText className="text-white">FEEDBACKS</CardText>
            <hr />
            <Container>
              <Row className="text-white wr">
                <Col>
                  View all feedback including DJ names and text comments
                </Col>
                <Col>
                  Download all feedback including DJ names and text comments in
                  a CSV file, to use in spreadsheet softwares like Microsoft
                  Excel.
                </Col>
                <Col>Download</Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
      <div className="cd text-white">
        <Card className="bg-dark ml-4 feed">
          <CardBody>
            <Row>
              <Col lg="6">
                FAVOURITE MIX
                <hr />
                <Table dark striped>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>MIX</th>
                      <th>DOWNLOADS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tracks.map((track, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{track.track_mix}</td>
                          <td>{track.track_download_count}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col lg="6">
                MIXES DOWNLOADS
                <hr />
                {
                  <PieChart
                    percent={data.percentage}
                    mix_downloads={data.trackname}
                  />
                }
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <Container className="text-white smalltext" fluid={true}>
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <Card className="bg-dark crd1">
              <CardBody>
                <CardText>RESPONSE</CardText>
                <hr />
                {<ResponseChart rating_arr={data.rating_arr} />}
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <Card className="bg-dark crd2">
              <CardBody>
                <CardText>WILL YOU PLAY</CardText>
                <hr />
                {<PlayChart play_data={data.play_data} />}
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <Card className="bg-dark crd1">
              <CardBody>
                <CardText>DJ ACTIVITY</CardText>
                <hr />
                {<DJChart />}
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <Card className="bg-dark crd2">
              <CardBody>
                <CardText>RADIO ACTIVITY</CardText>
                <hr />
                {<RadioChart />}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Cards;
