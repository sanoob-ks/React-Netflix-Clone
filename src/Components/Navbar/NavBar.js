import React,{useContext} from 'react'
import './NavBar.css'
import {AuthContext} from '../../store/Context'
import { auth } from '../../firebase/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function NavBar(props) {
const {user}=useContext(AuthContext)
const navigate=useNavigate()
const handleSignout=(e)=>{
  e.preventDefault()

signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/login')
}).catch((error) => {
  // An error happened.
});
}
  return (
    <div className='navbar'>
     <a href='/'> <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo " /></a>
      {!props.value && <button className='language_button'>English</button>}
      {!props.value && (user ? <button onClick={handleSignout} className='login_button'>Sign Out</button>:<button onClick={()=>navigate('/login')} className='login_button'>Sign In</button>)}
    </div>
  )
}

export default NavBar
