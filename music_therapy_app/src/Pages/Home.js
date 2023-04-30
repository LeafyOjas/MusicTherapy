import React from "react";
import { Blogs } from "../components/Blogs";
import { History } from "../components/History";
import { Navbar } from "../components/Navbar";
export const Home = () => {
  return (
    <div>
        <Navbar/>
    <div className="container">
      <div id="role" className="container d-flex align-items-center justify-content-between">
        <div>
          <img className="music-img" src="musicgirl.avif" />
          <div className="music-img music-circle"></div>
          <div className="music-img music-circle-2"></div>
        </div>

        <div className="music-text">
          <h1 >Music Therapy</h1>
          <p>
            There’s no denying that music has a strong psychological impact.
          </p>
          <p>
            Different types of music can significantly impact a person’s mood,
            helping them delve deeper into their consciousness to process a wide
            range of emotions.
          </p>
          <div className="lined l1"></div>
          <div className="lined l2"></div>
          <div className="lined l3"></div>
          <div className="lined l4"></div>
        </div>
      </div>

      <section id="description" className="mt-5 pb-4">
        <div>
          <h1 className="mb-5">
            What is <span style={{ color: "orangered" }}>Music Therapy?</span>
          </h1>
          <p>
            Clinical music therapy is the only profession that actively uses
            supporting evidence-based science to the creative, emotional, and
            energetic experiences of music for health and educational purposes.
            Music therapists use innovation, receptive listening, lyric
            discussion, imagery, performance, and learning through music to
            assess numerous areas of a person’s emotional well-being. They also
            participate in interdisciplinary treatment planning, ongoing
            evaluation, and follow-up.
          </p>
          <p>
            A music therapist works with people from many walks of life with
            various neurodiversities. Those with Autism Spectrum Disorder,
            dementia, and people with disabilities are all examples of people
            who can benefit from working with a music therapist. Trained
            professionals employ several diverse music therapy and mental health
            treatments for cognitive, physical, emotional, and social needs.
            Re-creating music, songwriting, improvisation, and lyric analysis
            are some of the more common treatments. Because what happens during
            a session will depend entirely on each person’s mental health, music
            therapy strategies will vary based on their specific needs
          </p>
        </div>
      </section>

        <History/>
      <Blogs/>
    </div>
    </div>
  );
};
