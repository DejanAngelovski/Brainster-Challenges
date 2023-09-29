import React from 'react'

export interface ArtistType {
  id?: number;
  name: string;
  cover: string;
  bio?: string;
  albums?: any;
}

const ArtistItem = ({name, cover, id}: ArtistType) => {
  return (
    <div className='col-12 position-relative mb-2'>
      <img className='img-fluid' src={`images/covers/${cover}.jpg`} alt="" />
      <span className='position-absolute'>{name}</span>
    </div>
  )
}

export default ArtistItem