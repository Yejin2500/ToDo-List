import "./App.css";
import { useRef, useState } from "react"
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content : "React 공부하기",
      date : new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content : "빨래하기",
      date : new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content : "노래 연습하기",
      date : new Date().getTime(),
    },
  ];


    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
      const newTodo = {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      };
    }
      const onUpdate = (targetId)=>{
        //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
      setTodos(todos.map((todo)=>todo.id !==targetId))
      }

      return (
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} />
      </div>
      );
  };
export default App;