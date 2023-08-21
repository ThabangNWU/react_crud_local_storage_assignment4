import React, {useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Link, } from 'react-router-dom';


function Update() {
    const{id} = useParams();
    
    const user = JSON.parse(localStorage.getItem(id)); 
    const [values, setValues]=useState(user.name) ; 
    const [value, setValue]=useState(user.title);  
    const [file, setFile] = useState(user.file);   
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const dataUrl = e.target.result;
          setFile(dataUrl);
        };
  
        reader.readAsDataURL(file);
      }
    };
   
    const navigate= useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();    
    localStorage.setItem(
      id,
      JSON.stringify({
        file:file,
        name:  values,
        title: value
      })
      
  
    )
  navigate('/');
  }
  
    return(
  
 
  <> 
    <div className='update_member'>
      <Link to="/"><i class="fa fa-arrow-left arrow_left_light" aria-hidden="true"></i></Link>
      <div className='update_container'>
      <form onSubmit={handleUpdate} >
        <div className='update_member_image'>
          <img src={file} />
          <label> 
            <input className='fileStream' accept="image/jpeg,image/png,image/jpg " type="file" onChange={handleFileChange} ></input>  <i class="fa fa-plus EditImage" aria-hidden="true"> </i> 
          </label>         
        </div>
        <div className='update_member_tool'>
          <input type='text' className='textbox' onChange={e=>setValues( e.target.value )} placeholder='Full Names'/>        
          <input type='text' className='textbox' onChange={e=>setValue(e.target.value)} placeholder='Job Title'/>
          <button className='button_edit' >Edit Member</button>
        </div>
       
       
      </form>
      </div>   
    </div>
    
  </>
   
  
  
    )
    
  }
  export default Update;