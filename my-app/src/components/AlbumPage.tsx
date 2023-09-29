import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import artists from '../db'

export interface Album {
  albums? : any;
}


const AlbumPage = ({albums}: Album) => {
 
let {albumId} = useParams()
let {id} = useParams()



const [filtered, setfiltered] = useState(artists);
const [album, setalbums] = useState(filtered.map(alb => alb.albums.find(el => el.albumId === albumId)));



useEffect(() => {
  setfiltered(artists.filter((artist) => artist.id.toString() === id));
}, [id]);

useEffect(()=> {
  let found = album.filter(el=> el?.albumId === albumId)

  if(found){
    setalbums(found)
  }

}, [albumId])





  return (
    <div className="container-fluid">
      <div className='row justify-content-center bga'>
      {
        album.map(album => (
          <div className="col-9 my-4" key={album?.albumId}>
        <div className=' mb-3'>
        <img className='img-fluid' src={`/images/albums/${album?.cover}.jpg`} alt="" />
        </div>
        <p className='mb-0'><span className='mb-0 fw-bold'>Title: </span>{album?.title}</p>
        <p className='mb-0'> <span className='mb-0 fw-bold'>Year: </span>{album?.year}</p>
        <p className='mb-0'> <span className='mb-0 fw-bold'>Price: </span>{album?.price+" $"}</p>
      </div>
        ))
      }
    </div>
    </div>
  )
}

export default AlbumPage