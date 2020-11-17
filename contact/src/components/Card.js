import React from 'react'
import Avatar from './Avatar'
import DetailInfo from './DetailInfo'

const Card = (props) => {
	//console.log(props)
  return (
    <div className='card'>
      <div className='top'>
        <h2 className='name'>{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <DetailInfo phone={props.phone} email={props.email} />
    </div>
  )
}

export default Card
