import "./Editor.css";
import {useState} from "react";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = ()=>{
        onCreate(content);
        setContent("");
    };

    return (
    <div className="Editor">
        <input
        ref={contentRef} 
        value={content} 
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
}
export default Editor;