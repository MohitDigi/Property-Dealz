import Navbar from "./components/Navbar";
import { Col, Divider, Row } from "antd";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <>
    <Divider />
      <Row justify="space-around" align="middle">
        <Col span={24}>
          <Navbar />     
        </Col>
      </Row>
      <Divider />
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
