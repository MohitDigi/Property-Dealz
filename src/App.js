import Navbar from "./components/Navbar";
import SortItem from "./components/SortItem";
import Map from "./components/Map";
import { Col, Divider, Row } from "antd";
import CardItem from "./components/CardItem";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const App = () => {
  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Divider />
      <Row gutter={[24, 8]} >
        <Col span={12} >
          <Map location={location} zoomLevel={17} />
        </Col>
        <Col span={12}>
          <SortItem />
          <CardItem />
        </Col>
      </Row>
    </>
  );
};

export default App;
