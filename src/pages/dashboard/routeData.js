import AboutCourseJava from "./contents/java/about-course";
import AssessmentJava from "./contents/java/assessment";
import IndependentJava from "./contents/java/independent";
import InternetJava from "./contents/java/internet";
import LectureJava from "./contents/java/lecture";
import LiteratureJava from "./contents/java/literature";
import StructureJava from "./contents/java/stucture";
import TestJava from "./contents/java/test";
import VideoJava from "./contents/java/video";
import AboutCourseOperation from "./contents/operation/about-course";
import AssessmentOperation from "./contents/operation/assessment";
import IndependentOperation from "./contents/operation/independent";
import InternetOperation from "./contents/operation/internet";
import LectureOperation from "./contents/operation/lecture";
import LiteratureOperation from "./contents/operation/literature";
import StructureOperation from "./contents/operation/stucture";
import TestOperation from "./contents/operation/test";
import VideoOperation from "./contents/operation/video";


export const routeData = [
  { content: < AboutCourseJava />, path: "about-course-java" },
  { content: < StructureJava />, path: "structure-java" },
  { content: < AssessmentJava />, path: "baxolash-java" },
  { content: < TestJava />, path: "test-java" },
  { content: < IndependentJava/>, path: "mustaqil-ish-java" },
  { content: < InternetJava />, path: "internet-resusrlar-java" },
  { content: < LiteratureJava />, path: "adabiyotlar-java" },
  { content: < VideoJava />, path: "video-java" },
  { content: < LectureJava />, path: "maruza-java" },
  
  { content: < AboutCourseOperation />, path: "about-course-operatsion" },
  { content: < StructureOperation />, path: "structure-operatsion" },
  { content: < AssessmentOperation />, path: "baxolash-operatsion" },
  { content: < TestOperation />, path: "test-operatsion" },
  { content: < IndependentOperation/>, path: "mustaqil-ish-operatsion" },
  { content: < InternetOperation />, path: "internet-resusrlar-operatsion" },
  { content: < LiteratureOperation />, path: "adabiyotlar-operatsion" },
  { content: < VideoOperation />, path: "video-operatsion" },
  { content: < LectureOperation />, path: "maruza-operatsion" },
];
