import React from "react";
import unlike from "../../assets/unlike.svg"
import like from "../../assets/like.svg"

export default function Description() {
  return (
    <div>
      <h1 class="text-lg font-semibold tracking-tight text-slate-800">
        Some video title
      </h1>
      <div class="pb-4 flex items-center space-between border-b">
        <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 Nov 2022
        </h2>

        {/* <!-- like/unlike --> */}
        <div class="flex gap-10 w-48">
          <div class="flex gap-1">
            <div class="shrink-0">
              <img class="w-5 block" src={like} alt="Like" />
            </div>
            <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
          </div>
          <div class="flex gap-1">
            <div class="shrink-0">
              <img class="w-5 block" src={unlike} alt="Unlike" />
            </div>
            <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
          </div>
        </div>
      </div>

      <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
}