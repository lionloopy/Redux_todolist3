//todos: 모듈공간. action과 reducer를 만드는 공간

//action value
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DONE_TODO = "DONE_TODO";
export const MOVE_DETAIL = "MOVE_DETAIL";

//action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload: payload,
  };
};
export const moveDetail = (payload) => {
  return {
    type: MOVE_DETAIL,
    payload: payload,
  };
};

//reducer
const initialState = {
  todos: [
    {
      id: "1",
      title: "운동하기",
      comment: "금요일까지",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    comment: "",
    isDone: false,
  },
};

//useState대신 리듀서 함수로 state를 제어한다.
//ADD_TODO: 초기상태 복사, todos는 todos와 action.payload로 받아온 값
//DELETE_TODO: 초기상태 복사, todos의 id와 action.payload로 받아온 id가 같지 않은 것들만 보여주도록 한다.(filter)
//DONE_TODO: 초기상태 복사, todos에서 만약 id와 payload로 받아온 id 값이 같으면 idDone상태를 반대로 바꿔준다.(map)
//MOVE_DETAIL: 초기상태 복사, todo에서 id와 payload로 받아온 id 값이 같은 것을 찾는다.(find)
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          } else {
            return item;
          }
        }),
      };
    case MOVE_DETAIL:
      return {
        ...state,
        todo: state.todos.find((item) => {
          return item.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
