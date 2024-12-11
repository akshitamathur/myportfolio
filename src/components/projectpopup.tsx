import Profile from "../assets/json/resume.json";
import "../assets/css/popup.css";

export const Popup = ({
  onClose,
  userId,
}: {
  onClose: any;
  userId: number;
}) => {
  const project = Profile.projects[userId];
  

  // console.log("we are in popup");

  return (
    <>
      <div className="modalContainer animate__animated animate__fadeIn">
        <div className="modalBody">
          <div className="modalHeading">
            <span onClick={() => onClose()} className="close">
              <i className="animate__animated animate__fadeIn animate__delay-1s white bi bi-x-lg"></i>
            </span>
          </div>
          <div className="modalContent">
            <div className="row">
              <div className="col-3">
                <img src={project.mainImg} width="100%" />
              </div>
              <div className="col-8">
                <h1 className="text-center">{project.title},{" "}<em><a href={project.link}>{project.github}</a></em></h1>
                <h2 className="text-center">
                  {project.date}
                </h2>
                <h4 className="text-center">{project.summary}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
