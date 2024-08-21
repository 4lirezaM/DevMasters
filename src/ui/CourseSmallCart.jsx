function CourseSmallCart() {
  return (
    <div className="m-6 w-[360px] overflow-hidden rounded-lg dark:bg-slate-900">
      <a href="#">
        <img
          className="w-full"
          src="images/courses/npm-cover.jpg"
          alt="Npm-Cover-Pic"
        />
      </a>
      <div className="p-2 pt-4">
        <h2 className="text-2xl">
          <a className="hover:text-sky-500 dark:hover:text-sky-600" href="#">
            NPM Tutorial
          </a>
        </h2>
        <div className="flex items-center justify-between py-2">
          <p>john deo</p>
          <p>5star</p>
        </div>
      </div>
    </div>
  );
}

export default CourseSmallCart;
