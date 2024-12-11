import Data from "../assets/json/resume.json";
import "../assets/css/jobboard.css";

import Popup from "./jobpopup";
import { useState } from "react";

function JobBoard({ jobId }: { jobId: number }) {
  const [ModalOpen, SetModalOpen] = useState(false);
  const profile = Data.work[jobId];

  console.log("This is working:" + profile.website);

  const handleButtonClick = () => {
    SetModalOpen(false);
    console.log(Data.work);
  };

  return (
    <>
      {ModalOpen && <Popup onClose={handleButtonClick} userId={jobId}></Popup>}
      <div className="section">
        <div className="row justify-content-center">
          <div className="logo animate__animated animate__fadeIn animate__delay-2s">
            <div onClick={() => SetModalOpen(true)} className="text-center">
              <img src={profile.logo} width="150" />
              <div className="row">
                <div className="col-12">
                  <h3 className="text-center company">{profile.company}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobBoard;
