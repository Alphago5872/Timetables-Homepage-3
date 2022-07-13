import Glance from "../components/Homepage-components/Glance/Glance";
import NewtonNews from "../components/Homepage-components/Newton_News/NewtonNews"
import TeachersTimetable from "../components/Homepage-components/Teachers'_Timetable/TeachersTimetable";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import TimetablePreview from "../components/Homepage-components/TimetablePreview/TimetablePreview";

const Home = (props) => {
  return (
    <WebCard>
      <Glance />
      <NewtonNews />
      <TeachersTimetable />
      <TimetablePreview />
    </WebCard>
  );
};

export default Home;
