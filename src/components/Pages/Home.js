import React from 'react'
import Tags from '../Tags/Tags'
import Pagination from '../ui/pagination'
import VideoGrid from '../VideoGrid/VideoGrid'


export default function Home() {
  return (
    <div>
      <Tags></Tags>
      <VideoGrid></VideoGrid>
      <Pagination></Pagination>
    </div>
  )
}
