import React from 'react'
import "../sass/index.scss"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 bgi text-center d-flex align-items-center justify-content-center ">
                <h1 className='h2 text-uppercase'>music db</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar