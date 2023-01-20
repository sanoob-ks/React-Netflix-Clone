import React from 'react'
// import Login from './Components/Login/Login';
// import Signin from './Components/Signin/Signin';
import Banner from '../Components/Banner/Banner';
import RowPost from '../Components/RowPost/RowPost';
import {originals,action,romance,documentaries,horror,comedy} from '../url'

function Home() {
  return (
    <div>  
      <Banner/>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Romance' isSmall url={romance}/>
      <RowPost title='Documentaries' isSmall url={documentaries}/>
      <RowPost title='Horror' isSmall url={horror}/>
      <RowPost title='Comedy' isSmall url={comedy}/>
    </div>
  )
}

export default Home
