import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/RelatedVideosSlice";
import Loading from "../ui/Loading";
import VideoList from "./VideoList";

export default function RelatedVideo({ currentId, tags }) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRelatedVideo({currentId, tags}))
  }, [dispatch, tags, currentId])

  const { relatedVideo, isLoading, isError, error } = useSelector(state => state?.relatedVideo)
  
  let content = null;
  if (isLoading) content = <Loading />
    if (!isLoading && isError)
    content = <div className="col-span-12"> {error} </div>;
  if (!isLoading && !isError && relatedVideo.length === 0)
    content = <div className="col-span-12"> {error} </div>;
  
  if (!isLoading && !isError && relatedVideo.length > 0) content = relatedVideo.map(video => <VideoList video={ video} />)
  return (
      <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
          {content}
    </div>
  );
}
