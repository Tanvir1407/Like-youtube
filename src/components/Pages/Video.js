import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleVideo } from "../../features/video/videoSlice";
import Description from "../Player/Discription";
import Player from "../Player/Player";
import RelatedVideo from "../RelatedVideo.js/RelatedVideo";
import Loading from "../ui/Loading";

export default function Video() {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { link, title ,id, tags} = video || {};

  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12"> {error} </div>;
  if (!isLoading && !isError && !video.id)
    content = <div className="col-span-12"> {error} </div>;
  if (!isLoading && !isError && video.id)
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />
          <Description video={video} />
        </div>
        <RelatedVideo currentId={ id} tags={tags} />
      </div>
    );
  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content }
      </div>
    </section>
  );
}
