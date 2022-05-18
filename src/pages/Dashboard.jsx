import Navigation from "../components/Navigation";
import AddProject from "../components/AddProject";
import Due from "../components/Due";
import InProgress from "../components/InProgress";
import Overdue from "../components/Overdue";
import Done from "../components/Done";

function Dashboard() {
  return (
    <div>
      <Navigation />
      <AddProject />
      <Overdue />
      <Due />
      <InProgress />
      <Done />
    </div>
  );
}

export default Dashboard;
