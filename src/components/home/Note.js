import React from 'react'

export default function Note({ data }) {

  return (
     <div variant="outlined">{data.title} {data.rating}</div>
  )
}
