import React, { useState } from "react";
import "./InputContainer.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Checkbox, Typography, Button } from "antd";
import axios from "axios";

function InputContainer() {
  const { Title, Paragraph, Text, Link } = Typography;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then(function(response) {
        alert(`Welcome! your token is ${response.data.token}`);
      })
      .catch(function(error) {
        if (!email && !password) {
          alert("please enter email and password");
        } else if (error) {
          alert("email or password is incorrect");
        }
      });
  };

  return (
    <div>
      <div className="inputContainer">
        <Title
          style={{
            margin: 0,
            fontWeight: 700,
            textAlign: "center",
            color: "#023047",
          }}
        >
          Welcome Back
        </Title>
        <Paragraph
          style={{
            marginBottom: 50,
            textAlign: "center",
            color: "#8d979b",
          }}
        >
          Subtitle Text goes here
        </Paragraph>

        <Space direction="vertical" style={{ width: "350px" }}>
          <Input
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            placeholder="Email Address *"
            size={"large"}
            style={{ color: "#023047" }}
          />
          <Input.Password
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            size={"large"}
            style={{ color: "#023047" }}
            placeholder="Password *"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            onClick={handleClick}
            type="text"
            style={{ background: "#023047", color: "#ffff", width: "100%" }}
            size={"large"}
          >
            Login
          </Button>
          <Space
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox style={{ color: "#023047" }}>Remember Password</Checkbox>
            <Link style={{ color: "#023047", margin: 0 }}>
              Forgot Password?
            </Link>
          </Space>
        </Space>
      </div>
    </div>
  );
}

export default InputContainer;
