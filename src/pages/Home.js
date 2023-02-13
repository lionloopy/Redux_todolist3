import React from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import State from "../components/State";

//Home:메인페이지
//Layout으로 전체를 감싸고, Form과 State가 들어간다.
function Home() {
  return (
    <Layout>
      <Form />
      <State />
    </Layout>
  );
}

export default Home;
