import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../features/Videos/videoSlice";
import Loading from "../ui/Loading";
import SingleVideo from "./singleVideo";


export default function VideoGrid() {
  const dispatch = useDispatch()
  const {tags, search} = useSelector(state => state.filter)
  const { videos, isLoading, isError, error } = useSelector(state => state.videos);

  useEffect(() => {
    dispatch(fetchVideo({tags, search}))
  }, [dispatch, tags, search])
  
  let content;

  if (isLoading) content = <Loading />
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
  if (!isLoading && !isError && videos.length === 0) content = <div>No Video Found...</div>
  if (!isLoading && !isError && videos.length > 0) content = videos.map(video => <SingleVideo video={video} />)
    
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}          
        </div>
      </section>
    </section>
  );
}
