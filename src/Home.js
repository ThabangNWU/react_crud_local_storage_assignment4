import {Link,  } from 'react-router-dom';


function Home() {
 
  const data = Object.keys(localStorage); 
  const handleDelete = (id)=>{  
  localStorage.removeItem(id)
  window.location.reload()   
 } 
 

 
 return(
  <>
  
   <div className='home'>          
   <Link to={'/create'} className='addMbtn1'><button className='member_button'><p>Add Member</p></button></Link>
        {localStorage.length !== 0 ? (
                data.map((key,i) => {
                  const user = JSON.parse(localStorage.getItem(key));
                  return (
                    <div key={i}> 
                    <div className='container'>
                    <div className='members'>
                        <div className='member__image'>
                        <img src={user.file} width={70} height={70}/>
                        </div>
                        <div className='member'>
                        <div className='member__full_name'>
                          <h1>{user.name}</h1>
                        </div>
                        <div className='member__job_title'>
                          <p>{user.title}</p>
                        </div>
                        
                      </div>
                    </div>
                    
                      <div className='member__edit_delete'>
                        <Link to={`/update/${key}`}><i class="fa fa-pencil pencil" aria-hidden="true"></i></Link>
                        <i   onClick={() => handleDelete(key)} class="fa fa-trash-o bin" aria-hidden="true"></i>
                      </div>  
                    </div>
        


        </div>
       
                    
                  );
                })
        
              ) : (
                <div className="container members__null_members">
                  <h1>No Members is the database</h1>
                </div>
              )}
            
          
        
        
        
  </div>        
</> ) 
 
 }
 export default Home;