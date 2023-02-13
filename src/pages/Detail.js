import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { moveDetail } from "../redux/modules/todos";
import styled from "styled-components";
import Modal from "../components/Modal";

//Detail: 각 todo마다 있는 상세보기를 눌렀을 때 나오는 공간
//dispatch를 통해서 action을 받아온다.
//navigate를 사용해서 페이지를 이동할 수 있도록 한다.
//useParams를 이용해 어떤 파라미터가 들어왔는지 알 수 있다.
//useSelector로 todo값을 받아온다.
//useEffect를 이용해 action이 실행될 때, id값에 따라서만 렌더링이 진행되도록 하고,
//렌더링이 될 때 id값이 같은 것을 찾도록 한다.
function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useSelector((state) => state.todos.todo);

  //모달창 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    dispatch(moveDetail(id));
  }, [dispatch, id]);
  return (
    <StDetailBox>
      <Stp>ID:{todo.id}</Stp>
      <Sttitle>{todo.title}</Sttitle>
      <Stp>{todo.comment}</Stp>
      <Stselect>
        <option>할 수 있을 것 같다!</option>
        <option>못 할 것 같다!</option>
      </Stselect>
      <Stbtns>
        <Stbtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </Stbtn>
        <StbtnModal onClick={showModal}>Modal</StbtnModal>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </Stbtns>
    </StDetailBox>
  );
}

export default Detail;

const StDetailBox = styled.div`
  width: 400px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  background-color: rgb(252, 249, 190);
  display: flex;
  flex-direction: column;
  margin: 80px auto;
`;

const Stp = styled.p`
  text-align: center;
`;

const Sttitle = styled.h3`
  text-align: center;
  margin-top: 100px;
`;

const Stselect = styled.select`
  width: 150px;
  margin: 0 auto;
  border: none;
  background-color: rgb(232, 243, 214);
  padding: 10px;
  border-radius: 10px;
`;

const Stbtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const Stbtn = styled.button`
  width: 90px;
  border: transparent;
  margin-right: 20px;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: rgb(232, 243, 214);
`;

const StbtnModal = styled.button`
  width: 90px;
  border: transparent;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: rgb(232, 243, 214);
`;
