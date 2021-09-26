import './App.css';
import {useState} from 'react';


const App=()=> {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isError , setError] = useState(false);

  const getUsers=async()=>{
    setLoading(true);
  const response = await fetch('https://reqres.in/api/users?page=1')
  //console.log(response);
  if (response.ok) {
    const data = await response.json()
    //console.log(data.data);
    setUsers(data.data);
    setLoading(false);
    
  } else {
    setError(true);
    setLoading(false);
  }
  
    console.log(users);
  
  }

  return (
    <>
    <div className="navbar">
            <h3>Let's Grow More(LGM)</h3>
           <div className="getusers">
           <button onClick={()=>getUsers()}>GET USERS</button>
           </div>
    </div>
    <div className="container">
    {isLoading?(<div className="loader"></div>):null}
    {isError?(<div>Error Occured!!!</div>):null}
    {users && users.map((user)=>{
      return(
        
        <div className="user-card">
                            <img src={user.avatar} height="70" width="70" style={{borderRadius:'50%'}}/> 
                            <div>
                            <div>{user.first_name} {user.last_name}</div>
                            <div>{user.email}</div>
                            </div>
                        </div>
        )
    }
    )}
    </div>
  </>
  );
  
}

export default App;
