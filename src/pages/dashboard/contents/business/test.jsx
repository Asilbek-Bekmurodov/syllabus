import cls from "./styles.module.scss";

function TestBusiness() {
  return (
    <div>
        <div className={cls.courseTitle}>
            <h2 className={cls.title}>Test section  </h2>
        </div>
      <p className={cls.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam
             test section
      </p>
    </div>
  );
}
export default TestBusiness;
