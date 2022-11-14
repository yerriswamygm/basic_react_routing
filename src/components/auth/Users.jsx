import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    let val = useParams();
    console.log(val)
  return (
      <h1>
          My Name is <strong style={{ color: "red" }}>{ val.name}</strong>
    </h1>
  )
}

export default Users