import React from "react";
import { Navbar } from "../components/Navbar2";
export const Autism = () => {
  return (
    <div className="mb-5">
      <Navbar />
      <div className="container">
        <h1 className="mt-4 pb-2">What Does a Music Therapist Do for People With Autism?</h1>
        <p>
          Music therapy can help some autistic children and adults express
          themselves, communicate, interact socially, and focus. It may also
          help them magnify their unique talents. Research outcomes are mixed on
          music therapy for autism. Some clinical trials find positive results
          for achieving objectives, while others see no significant difference
          from control groups.
        </p>
        <h2 className="mt-5">Benefit for music therapy</h2>
        <p>
          Music therapy for autistic people is often improvisational. This means
          the music is spontaneous and matches the temperament of the person
          playing. Music therapists say music with a strong beat, simple
          structure, and easy lyrics do best. According to Autism Connect, songs
          that may help with autism include:
          <ul>
            <li>“Here Comes the Sun” by the Beatles</li>
            <li>“Shake It Off” by Taylor Swift</li>
            <li>“(Sittin’ On) the Dock of the Bay” by Otis Redding</li>
          </ul>
        </p>
        <h2 className="mt-4 pb-4">Music not suitable</h2>
        <p>
        Of course, there could be a few side effects with music.
        If the music makes you want to dance a jig the day after you have surgery, this may not be wise. It's probably best as well to avoid music which would remind you of a difficult stage in your life that you don't care to relive. But, in general, music appears to provide some positive comforts with little fear of side effects.</p>
        <p>
        Not all music will be helpful. Hateful music or loud heavy metal might not be the best, but it depends on your personal likes and dislikes.
        </p>
      </div>
    </div>
  );
};
