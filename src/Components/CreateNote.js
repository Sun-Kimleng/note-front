import '../Assets/CreateNote.css'
import axios from 'axios';
import {useState, useEffect} from 'react';
import{motion, AnimatePresence} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import parse from'html-react-parser';
import App from '../App';


const CreateNote = () => {
    
const [blog_title, setBlogTitle]= useState('');
const [blog_body, setBlogBody]= useState('');
const [blog_author, setBlogAuthor]= useState('');
const [error, setError]= useState([]);

const [success, setSuccess]= useState(false);

    useEffect(()=>{
      setTimeout(() => {
          setSuccess(false);
      }, 2000);
  }, [success]);

const formVariant ={
    show: {
        scale: 1,
        transaction: {
            type: 'tween',
            duration: 1,
        }
    },

    hide: {
        scale: 0, 
        transaction:{
            type: 'spring', duration: 1
        }
    },

    exit: {
        scale: 0,
        transaction: {
            type: 'tween',
            duration: 2,
        }
    }
}

const progressBarVariant={
    show:{
        width: '100%',
        transition: {
            type: 'spring',
            duration: 4,
        }
    },

    hide:{
        width: '0%',
    }
}

const navigate = useNavigate();

const handleSumbit=async (e)=>{
    e.preventDefault();

    const note = {blog_title, blog_author, blog_body}

    

    const headers = 
    {
        'content-type':'application/json',
        'method':'POST',

    }

    await axios.post('http://127.0.0.1:8000/api/note/create', note, {headers})
        .then(response=>{
            console.log(response.data.msg);
            setError([]);
            setBlogAuthor('');
            setBlogBody("<p>Write something in your note</p>");
            setBlogTitle('');
            setSuccess(true);

            // navigate('/');

        }).catch(error=>{

            setError(error.response.data.errors);
            console.log(error.response.data);
            //console.clear()


            }
        );

}



    return (  
        
        
        <motion.div className="create-note"
            variants={formVariant}
            animate="show"
            initial="hide"
        >

            <form onSubmit={handleSumbit} className="container">   
                <div className='header'>
                <div className="label">Title</div><br />
                <input type="text" placeholder="please enter"className={`blog-title ${error.blog_title && 'invalid'}`} value={blog_title} onChange={(e)=>{setBlogTitle(e.target.value)}} name="blog_title"/><br /><br />
                {error.blog_title && <motion.div className="trigger-error"
                     variants={formVariant}
                     animate="show"
                     initial="hide"
                >{error.blog_title}</motion.div>} <br />

                <div className="label">Author</div><br />
                <input type="text" className={`blog-author ${error.blog_author && 'invalid'}`} value={blog_author} onChange={(e)=>{setBlogAuthor(e.target.value)}} name="blog_author"/><br />
                {error.blog_author && <motion.div className="trigger-error"
                     variants={formVariant}
                     animate="show"
                     initial="hide"
                >{error.blog_author}</motion.div>} <br /> <br />
                </div><br />


                <div className="label" style={{color:'white'}}>Description</div><br />
                
                {parse(blog_body)}
                <Editor className="editor"
        
        initialValue="<p>Write something in your note</p>"
        value={blog_body}

        init={{
            
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' + 'image'+
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }'
        }}

        onEditorChange={(newText) =>setBlogBody(newText)}
      /><br />
                

                <button type="submit">Create</button><br />
                
                
            </form>
                   
        <AnimatePresence>
                {success && <motion.div className='success'
                 variants={formVariant}
                 animate="show"
                 exit="exit"
                 initial="hide"><div className='success-text'>YOUR NOTE HAS BEEN CREATED</div>
                 <motion.div className="progress-bar"
                    variants={progressBarVariant}
                    initial='hide'
                    animate='show'
                 ></motion.div>
                 </motion.div>}
        </AnimatePresence>
        
        </motion.div>


    );
}
 
export default CreateNote;