import React from "react";
import { Link } from "react-router-dom";
import { ApiKey } from "./apiKey";
import CreateNote from "./CreateNote";
import UseGetFetch from "./useGetFetch";

const Home = () => {

    const{data: notes, isPending}= UseGetFetch(`${ApiKey}/api/note/`);

    return (
        <div className="home">
             {isPending && <div>Loading.....</div>}
            {notes && <div>{  
                notes.map((note)=>(
                    <Link to={`/view/${note.id}`} key={note.id}>
                        <div>{note.blog_title}</div>
                    </Link>
                ))
            }</div>}
        </div>
    );
}
 
export default Home;