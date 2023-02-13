import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

//Form: 사용자가 input을 입력하고 그 input이 제출되면 state가 변하는 공간
function Form() {
  //id를 랜덤id로 만들어준다.
  const makeId = () => {
    return Math.random().toString(36).substring(2, 16);
  };
  const id = makeId();

  //dispatch로 action을 가져오도록 한다.
  const dispatch = useDispatch();

  //useState로 state를 관리한다.
  //초기 input값들은 비어있어야 하기 때문에 초기값을 모두 비워둔다.
  const [input, setInput] = useState({
    id: 0,
    title: "",
    comment: "",
    isDone: false,
  });

  //input을 채우면 상태가 바뀌도록 하는 handler
  const onAddHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  //제출하면 상태가 바뀌도록 하는 handler
  //event.preventDefault()로 새로고침을 방지한다. 이게 없으면 새로고침 되면서 추가된 todo가 사라짐
  //만약 title이나 comment둘 중 한 칸이라도 비어있으면 제출이 안 되도록 한다.
  //dispatch를 사용해서 addTodo action을 전달해준다. 여기에 id값을 넣어줘야 payload에 적용할 수 있다.
  //제출 후에 다시 input칸이 비워지도록 setInput을 설정한다.
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (input.title.trim === "" || input.comment.trim() === "")
      return alert("빈칸을 모두 채워주세요!");
    dispatch(addTodo({ ...input, id }));
    setInput({
      id: 0,
      title: "",
      comment: "",
      isDone: false,
    });
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <h2>MY TODO LIST</h2>
      <div>
        <StLabel>WHAT?</StLabel>
        <StInput value={input.title} onChange={onAddHandler} name="title" />
        <StLabel>WHEN?</StLabel>
        <StInput value={input.comment} onChange={onAddHandler} name="comment" />
        <StBtn>+</StBtn>
      </div>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(250, 171, 120);
`;
const StInput = styled.input`
  margin-right: 20px;
  margin-bottom: 15px;
  background-color: rgb(255, 220, 169);
  border-radius: 15px;
  border: transparent;
  padding: 10px 30px 10px 30px;
  outline: none;
`;
const StLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
const StBtn = styled.button`
  border: transparent;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: rgb(232, 243, 214);
`;
