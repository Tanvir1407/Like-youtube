import React from "react";
import VideoList from "./VideoList";

export default function RelatedVideo() {
  return (
      <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
          <VideoList/>
    </div>
  );
}
