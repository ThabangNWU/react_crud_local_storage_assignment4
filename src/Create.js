import React from 'react'
import { useNavigate,Link} from 'react-router-dom'
import { useState } from 'react'
import defaultImage from "../src/image/image-gallery.png"

function Create() { 
  const navigate = useNavigate();
  const [fileUrl,setFileUrl] = useState(defaultImage);    
  const [fullName,setFullName] = useState("");    
  const [joTitle,setJobTitle] = useState("");  
    function handleImage(e){
       const file = e.target.files[0] 
       if(file)
       {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataurl = e.target.result;
          setFileUrl(dataurl)
        }
        reader.readAsDataURL(file)
       console.log(file);
       }   
        
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      let uniqueId = localStorage.length;
      let userId = uniqueId + 1;
      localStorage.setItem(

           userId,JSON.stringify({name :fullName, title: joTitle, file : fileUrl})
        )
        navigate('/');

    }
   


    return (
      <>
        <div className='update_member'>
        <Link to="/"><i class="fa fa-arrow-left arrow_left_light" aria-hidden="true"></i></Link>
        <div className='update_container'>
        <form onSubmit={handleSubmit} action="">        
          <div className='update_member_image'>
          <img src={fileUrl} />
          <label> 
            <input className='fileStream' accept="image/jpeg,image/png,image/jpg " type="file" onChange={handleImage} ></input>  <i class="fa fa-plus EditImage" aria-hidden="true"> </i> 
          </label>   

            
        </div>
        <div className='update_member_tool'>
            <input type='text' className='textbox' onChange = { e => setFullName(e.target.value)} placeholder='Full Names'/>        
            <input type='text' className='textbox' onChange = {e => setJobTitle(e.target.value)} placeholder='Job Title'/>
            <button className='button_edit' >Add Member</button>
          </div>
      </form>
        </div>
      
        </div>
      </>
      
        
    )
}

export default Create