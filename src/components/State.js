import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/modules/todos";
import { doneTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { Link } from "react-router-dom";

//State: 사용자가 추가한 내용이 보이며, 완료-진행중 상태 변경, 리스트 삭제가 가능한 공간
//useSelector로 리듀서함수 todos안의 todos를 가져온다.
//didspatch로 action을 가져온다.
//onDelete, onDoneChange모두 id값을 잡고, dispatch로 action을 가져온다.
function State() {
  const todos = useSelector((state) => state.todos.todos); //리듀서함수 todos안의 todos를 가져온다.
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onDoneChange = (id) => {
    dispatch(doneTodo(id));
  };

  return (
    <StWrap>
      <div>
        <h3>Working 🔥</h3>
        {todos.map((item) => {
          if (!item.isDone) {
            return (
              <div key={item.id}>
                <StList>
                  <Link to={`/${item.id}`} key={item.id}>
                    <StBtn>상세보기</StBtn>
                  </Link>
                  <div>
                    {item.title} - {item.comment}
                  </div>
                  <div>
                    <StBtn onClick={() => onDoneChange(item.id)}>
                      {item.isDone ? "취소" : "완료"}
                    </StBtn>
                    <StBtn onClick={() => onDelete(item.id)}>삭제</StBtn>
                  </div>
                </StList>
              </div>
            );
          }
        })}
        <div>
          <h3>Done 🎉</h3>
          {todos.map((item) => {
            if (item.isDone) {
              return (
                <div key={item.id}>
                  <StList>
                    <Link to={`/${item.id}`} key={item.id}>
                      <StBtn>상세보기</StBtn>
                    </Link>
                    <div>
                      {item.title} - {item.comment}
                    </div>
                    <div>
                      <StBtn onClick={() => onDoneChange(item.id)}>
                        {item.isDone ? "취소" : "완료"}
                      </StBtn>
                      <StBtn onClick={() => onDelete(item.id)}>삭제</StBtn>
                    </div>
                  </StList>
                </div>
              );
            }
          })}
        </div>
      </div>
    </StWrap>
  );
}

export default State;

const StWrap = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StList = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  width: 600px;
`;

const StBtn = styled.button`
  border: transparent;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: rgb(232, 243, 214);
`;
