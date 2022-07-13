import TimeBox from "./TimeBox";
import WebCard_2 from "../Wrapper-Components/Wrapper-2/WebCard_2";

const SUBJECT_DATA = [{ subject: "", day: "", order: "", time: "", teacher: "" }];

const TimetableGrid = (props) => {
  return (
    <WebCard_2>
      <TimeBox subject={database.subject} id={database.key} />
      <TimeBox subject={database.subject} id={database.key} />
      <TimeBox subject={database.subject} id={database.key} />
      <TimeBox subject={database.subject} id={database.key} />
    </WebCard_2>
  );
};

export default TimetableGrid;
