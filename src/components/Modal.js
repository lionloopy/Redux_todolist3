import React from "react";
import styled from "styled-components";

//Modal: 모달창 공간
//버튼을 누르면 열리고, x를 누르면 닫히고, 외부 공간을 누르면 닫힌다.
function Modal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Stex onClick={closeModal}>
      <StModal onClick={(e) => e.stopPropagation()}>
        <StBtn onClick={closeModal}>X</StBtn>
        <p>모달창입니다.</p>
      </StModal>
    </Stex>
  );
}

export default Modal;

const Stex = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModal = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: rgb(232, 243, 214);
  text-align: center;
`;
const StBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;
