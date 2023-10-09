import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    // const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    // function expand() {
    //     setExpanded(true);
    // }

    return (
        <div>
            <form className="create-note">
                <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title" />
                <textarea rows="3" onChange={handleChange} value={note.content} name="content" placeholder="Content of the note"></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    );
}

export default CreateArea;