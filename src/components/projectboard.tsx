import Data from "../assets/json/resume.json";
import "../assets/css/jobboard.css";

import Popup from "../components/popup";
import { useState } from "react";

function ProjectBoard() {
  const [ModalOpen, SetModalOpen] = useState(false);

  const handleButtonClick = () => {
    SetModalOpen(false);
    console.log(Data.work);
  };

  return (
    <>
      {ModalOpen && <Popup onClose={handleButtonClick}></Popup>}
      <div className="section">
        <div className="row justify-content-center">
          {Data.projects.map((job) => (
            <div
              key={job.title}
              className="col-3 logo animate__animated animate__fadeIn animate__delay-2s"
            >
              <div onClick={() => SetModalOpen(true)} className="text-center">
                <img src={job.title} width="50" />
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-center company">{job.skills}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectBoard;
