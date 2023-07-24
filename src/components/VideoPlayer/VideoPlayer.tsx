import React from 'react';
import Video from './batik.mp4';

function VideoPlayer() {
  return (
    <div className="max-w-[60rem] h-full lg:aspect-video aspect-square mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
      <video className="h-full w-full rounded-lg lg:object-none object-cover" controls>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export { VideoPlayer };
