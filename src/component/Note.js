import { MdDelete } from "react-icons/md";
import './../index.css'

const Note = ({id , text, date , handleDeleteNote}) => {
   
    return <div className="note"    > 
        <span> {text} </span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDelete className='delete-icon' size = '16' onClick={ () => handleDeleteNote(id)}/>
        </div>
    </div>

}



// function bgColor() {
//     const colors_block = [
//         '#93B5C6',
//         '#C9CCD5',
//         '#E4D8DC',
//         '#FFE3E3'
//       ];
//      const a = colors_block[Math.floor(Math.random() * colors_block.length)]

//      document.body.backgroundColor = a;
//     }


export default Note;
