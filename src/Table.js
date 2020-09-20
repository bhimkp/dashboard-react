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

import "./App.css";
import "./index.css";

function Smile() {
  const [data, setData] = useState({
    regions: [],
    radios: [],
  });
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/regions").then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }, []);

  function getAvgReaction(rating) {
    let AvgR = "";
    if (rating <= 2) {
      AvgR = "POOR";
    } else if (rating >= 3 && rating < 5) {
      AvgR = "AVERAGE";
    } else if (rating >= 5 && rating < 7) {
      AvgR = "GOOD";
    } else if (rating >= 7 && rating < 9) {
      AvgR = "VERY GOOD";
    } else {
      AvgR = "EXCELLENT";
    }
    return AvgR;
  }

  return (
    <Container fluid={true}>
      <div className="cd smalltext ml-3">
        <Card className="bg-dark feed">
          <CardBody>
            <Table dark striped>
              <thead>
                REGIONAL SUMMARY FOR "SMILE"
                <tr>
                  <th>REGION</th>
                  <th>AVERAGE REACTION</th>
                  <th>AVERAGE RATING</th>
                  <th>TOTAL DOWNLOADS</th>
                </tr>
              </thead>
              <tbody>
                {data.regions.map((region) => {
                  return (
                    <tr>
                      <td>{region.country_name}</td>
                      <td>{getAvgReaction(region.avgRating)}</td>
                      <td>{region.avgRating}</td>
                      <td>{region.totalDownload}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
      <div className="cd smalltext ml-3">
        <Card className="bg-dark feed">
          <CardBody>
            <Table dark striped>
              <thead>
                RADIO DISTRIBUTION FOR "SMILE"
                {/* <hr /> */}
                <tr>
                  <th>STATION</th>
                  <th>SHOW</th>
                  <th>DJ</th>
                  <th>CITY</th>
                </tr>
              </thead>
              <tbody>
                {data.radios.map((radio) => {
                  return (
                    <tr>
                      <td>{radio.radio_station_name}</td>
                      <td>{radio.radio_show_name}</td>
                      <td>{radio.member_djname}</td>
                      <td>{radio.radio_station_city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
export default Smile;
