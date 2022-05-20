import { Link, useNavigate, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import UseGetFetch from "./useGetFetch";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { ApiKey } from "./apiKey";

const NoteDetail = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const {data:note, error, isPending } = UseGetFetch(`${ApiKey}/api/note/`+id);

    const handleDelete =()=>{
        Swal.fire({
            title: 'Do you want to Delete this note?',
            showDenyButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#c21d2d',
            denyButtonColor: 'grey',
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              axios.delete('http://127.0.0.1:8000/api/note/delete/'+id)
              .then(response=>
                {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.msg,
                      })

                        navigate('/');
                    
                })
            } else if (result.isDenied) {
              
            }
          })
    }
    
 
    return (  
        <div className="note-detail">
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>
            }
            {note && <div>
            <div>{note.blog_title}</div>
            <div>{note.blog_author}</div>
            <div>{parse(note.blog_body)}</div>
            <div>{note.created_at.substring(0, 10)}</div>
            </div>
            }   

            
            <Link to={`/update/${id}`}>Edit</Link>   
            <button onClick={handleDelete} >Delete</button>
        </div>
    );
}
 
export default NoteDetail;