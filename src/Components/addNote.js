import React, {Component} from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import '../Assets/main.css';

class addNote extends Component {

    state ={
        blog_title: '',
        blog_author: '',
        blog_body: '',

        error_list: [],

    }

  

   
    handleInput= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }   
    
    addNote = async (e) =>{
        e.preventDefault();


        await axios.post('http://127.0.0.1:8000/api/note/create', this.state)
        .then(response=>{
            console.log(response.data.msg);
            
            this.setState(
                {
                    error_list: [],
                   
                }
            );

        }).catch(error=>{
            this.setState(
                {
                    error_list: error.response.data.errors,

                }
            );
        }
        );




    }

    render(){

        

        return ( 
            
            <div className="add-note">
                <form className="container" onSubmit={this.addNote}>

                    <input type="text" className="blog_title" value={this.state.blog_title} onChange={this.handleInput} name="blog_title"/><br />
                    <p>{this.state.error_list.blog_title}</p>
                    <input type="text" className="blog_body" value={this.state.blog_body} onChange={this.handleInput} name="blog_body"/><br />
                    <p>{this.state.error_list.blog_body}</p>
                    <input type="text" className="blog_author" value={this.state.blog_author} onChange={this.handleInput} name="blog_author"/><br />
                    <p>{this.state.error_list.blog_author}</p>

                    <button type="submit">Create</button><br />
                    {this.state.blog_body}
                    
                </form>

                 
            </div>
        );
    }
}
 
export default addNote;