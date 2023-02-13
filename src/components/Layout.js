import React from "react";
import styled from "styled-components";

//Layout:전체적인 Layout으로 전체를 감싸주는 공간
//props를 받고 props.childeren을 넣어준다.
function Layout(props) {
  return <StLayout>{props.children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 600px;
  margin: 60px auto;
  border-radius: 10px;
  background-color: rgb(252, 249, 190);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
