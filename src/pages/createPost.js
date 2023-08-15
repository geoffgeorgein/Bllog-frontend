import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const CreatePost = () => {

    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');
    const [summary,setSummary]=useState('');
    const [files, setFiles] = useState('');
    const[redirect,setRedirect] = useState(false);

    
    async function newPost(ev){
        
        console.log('form-submit');

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);

        const values = [...data.entries()];
        console.log("values",values);
        console.log("files",files);
        

        console.log(data);
        
        ev.preventDefault();
        
        

        const response=await fetch('https://blog-m8ji.onrender.com/post',{
            method: 'POST',
            body:data,
            credentials:'include'
            

        })
        
        if(response.ok){
            setRedirect(true);
        }


        // console.log(await response.json());

    }

    if(redirect){
      return <Navigate to={'/'}/>
    }

  return (

    <form onSubmit={newPost}>

        <input type='title' placeholder='title' value={title} onChange={ev=>setTitle(ev.target.value)} ></input>
        <input type='summary' placeholder='summary' value={summary} onChange={ev=>setSummary(ev.target.value)}  ></input>
        <input type='file'  onChange={ev=>setFiles(ev.target.files)} ></input>

        

        <ReactQuill value={content} modules={modules} formats={formats} onChange={(newValue=>setContent(newValue))} />
        <button type='submit'> Create Post</button>
    </form>
  )
}

export default CreatePost