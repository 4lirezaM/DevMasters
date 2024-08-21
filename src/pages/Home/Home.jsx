import Landing from "../../features/Landing/Landing";
import CourseSmallCart from "../../ui/CourseSmallCart";

function Home() {
  return (
    <>
      <Landing />

      <div>
        <CourseSmallCart />
      </div>
      <div className="h-96">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni soluta
        blanditiis ratione voluptates minus debitis aspernatur nihil nobis
        mollitia earum ducimus, enim neque corrupti? Amet impedit beatae ducimus
        architecto quod!
      </div>

      <div className="h-96">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni soluta
        blanditiis ratione voluptates minus debitis aspernatur nihil nobis
        mollitia earum ducimus, enim neque corrupti? Amet impedit beatae ducimus
        architecto quod!
      </div>
    </>
  );
}

export default Home;
