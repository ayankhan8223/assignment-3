import "./App.css";
import React from "react";
import { Col, Row } from "antd";
import InputContainer from "./Components/InputContainer";
import Navbar from "./Components/Navbar";

function App() {
  // i divided things into two one is navabr and other is main body.main body further divided into two input part and image part
  return (
    <div>
      {/* Navbar start */}
      <Navbar />
      {/* navbar ends */}

      {/* main-body starts */}
      <Row style={{ height: "calc(100vh - 63px)" }} className="input">
        {/* Input part start */}
        <Col
          span={10}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputContainer />
        </Col>
        {/* Input part ends */}

        {/* image parts start */}
        <Col
          className="image"
          span={14}
          style={{
            background: " #023047",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: 600 }}
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-meeting-5105031-4267525.png"
            alt=""
            srcset=""
          />
        </Col>
        {/* image part ends */}
      </Row>
    </div>
  );
}

export default App;
