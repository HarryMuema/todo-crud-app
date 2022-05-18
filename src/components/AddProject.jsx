import Button from "./Button";
import { BsFillPlusCircleFill } from "react-icons/bs";

function AddProject() {
  const onClick = () => {
    console.log("click and addd");
  };
  return (
    <div className="holder container-fluid mx-1 my-2 p-2">
      <div className="addProject p-3">
        <BsFillPlusCircleFill />
        <Button className="100vw" text="add project" onClick={onClick}></Button>
      </div>
    </div>
  );
}

export default AddProject;
