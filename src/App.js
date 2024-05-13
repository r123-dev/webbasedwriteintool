import React from "react";
import { Layout } from "antd";
import BlockList from "./components/BlockList";
import GoogleLoginButton from "./components/GoogleLoginButton";
import "antd/dist/reset.css"; // Import Ant Design styles
import "./styles.css";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <GoogleLoginButton />
      </Header>
      <Content className="content">
        <BlockList />
      </Content>
    </Layout>
  );
};

export default App;
