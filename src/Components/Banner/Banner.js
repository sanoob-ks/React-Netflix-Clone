import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'
import './Banner.css'
import NavBar from '../Navbar/NavBar'

function Banner() {
    const [moview,setMoview]=useState()
    const [youtubeUrl,setYoutubeUrl]=useState('')
    const [showOrHide,setShowOrHide]=useState(false)
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    const watchTrailer= (moviewId)=>{
    axios.get(`movie/${moviewId}/videos?api_key=${API_KEY}`).then((response)=>{
        console.log(response.data)
      if(response.data.results.length !== 0){
        setYoutubeUrl(response.data.results[0].key)
        setShowOrHide(!showOrHide)
      }else{
        console.log("NO Trailer Available");
      }
    })
  }
    
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            let data = localStorage.getItem('state'); 
            console.log(data);
            //console.log(response.data.results[0])
            if(data==null){
                setMoview(response.data.results[0])
                localStorage.setItem('state',JSON.stringify(0))
            }else{
                data=parseInt(data)
            setMoview(response.data.results[data])
            if(data === response.data.results.length-1 ){
                localStorage.setItem('state',JSON.stringify(0))
                console.log('hai')
            }else{
            data=data+1    
            localStorage.setItem('state',JSON.stringify(data))
            console.log('hai2')
            }
            }
            

            //custom wroted axios not installed one. install axios in axios.js
            
        }).catch((err)=>{
            let errMessage=err.message
                alert(err)
        }) 
    },[])

    
  return (
    <div>
    <div style={{backgroundImage:`url(${moview ? imageUrl+moview.backdrop_path : "" })`}}
     className='banner'>
        <NavBar/>
        <div className='content'>
            <h1 className='title'>{moview ? moview.title ? moview.title:"Moview name not available!":""}</h1> {/*useEffect work only after rendering all component(mounting) */}
            <div className='banner_buttons'>
                <button onClick={()=>watchTrailer(moview.id)} className='button'>Play</button>
                <button className='button'>My list</button>
                
            </div>
        
            
                <h1 className='description'>{moview ? moview.overview :""}</h1>
            
            
        </div>
        <div className="fade_bottom">
               
        </div>
    </div>
    {showOrHide && youtubeUrl && <YouTube videoId={youtubeUrl} opts={opts}/>}
    </div>
  )
}

export default Banner
