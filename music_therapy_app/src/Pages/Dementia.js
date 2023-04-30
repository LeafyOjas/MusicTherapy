import React from "react";
import { Navbar } from "../components/Navbar2";
export const Dementia = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="my-5">
          Music therapy improves well-being in people with dementia and
          caregivers
        </h1>
        <p>
          Dementia is a broad category of disorders that impact a person’s
          ability to remember, reason, and communicate with others. The Centers
          for Disease Control and Prevention (CDC)Trusted Source describes
          dementia as an umbrella term for several disorders that impact memory,
          thinking, and decision-making.
        </p>
        <p>
          Dementia is often progressive, and it can become harder for people
          with dementia to communicate and interact with those around them.
        </p>
        <p>
          Some areas of difficulty for people with dementia include social
          engagement and communication. This can put a certain level of strain
          on their relationships with their caregivers.
        </p>

        <h2 className="my-4">
          DEMENTIA PLAYLIST – MUSIC TO PROVIDE “AWAKENINGS”!
        </h2>
        <p>
          <ul>
            <li> What a Wonderful World” by Louis Armstrong </li>
            <li>“Singing in the Rain” performed by Gene Kelly </li>
            <li>“Rhapsody in Blue” by George Gershwin </li>
            <li>“Walkin’ After Midnight” by Patsy Cline</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
