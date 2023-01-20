import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../constants/constants'



function RowPost(props) {
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [youtubeUrl,setYoutubeUrl]=useState('')
  const [showOrHide,setShowOrHide]=useState(false)

  const watchTrailer= (moviewObj)=>{
    axios.get(`movie/${moviewObj}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length !== 0){
        setYoutubeUrl(response.data.results[0])
        setShowOrHide(!showOrHide)
      }else{
        console.log("NO Trailer Available");
      }
    })
  }

  const [moviewList,setMoviewList]=useState([])
  useEffect(()=>{
  axios.get(props.url).then((response)=>{
      setMoviewList(response.data.results)
    }).catch((err)=>{
      alert(err)
    })
  })
  return (
    <div className='row'>
      <h2 className='row_title'>{props.title}</h2>
      <div className="posters">
        {
          moviewList.map((obj)=>{
            return(
              <img onClick={()=>watchTrailer(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )
          })
        }
      </div>
       {showOrHide && youtubeUrl && <YouTube videoId={youtubeUrl.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
