import SideBar from "./components/SideBar";
import Feed from "./components/home/Feed";
import Widgets from "./components/Widgets"

const style = {
  wrapper:
    "flex justify-center h-screen w-screen select-none bg-[#15202b] text-white",
  content: "max-w-[1400px] w-2/3 flex justify-between",
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
