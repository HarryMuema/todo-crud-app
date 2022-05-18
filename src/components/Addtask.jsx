import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

const Addtask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div className="holder container-fluid mx-1 my-2 p-2">
      <form className="addProject p-3" onSubmit={onSubmit}>
        <div className="form-control ">
          <BsFillPlusCircleFill />
          <label className="px-2"> Task </label>{" "}
          <input
            className=" mx-2"
            type="text"
            placeholder="add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
        </div>

        <div className="form-control ">
          <label className="px-2"> Day and Time </label>{" "}
          <input
            className=" mx-2"
            type="text"
            placeholder="add due date and time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />{" "}
        </div>

        <div className="form-control d-flex ">
          <label className="px-2"> Set reminder </label>{" "}
          <input
            className=" me-1"
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />{" "}
        </div>

        <input
        className="btn"
          type="submit"
          value="save task"
        />
      </form>{" "}
    </div>
  );
};

export default Addtask;
