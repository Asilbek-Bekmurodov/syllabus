import AboutCourseBusiness from "./contents/business/about-course";
import AssessmentBusiness from "./contents/business/assessment";
import IndependentBusiness from "./contents/business/independent";
import InternetBusiness from "./contents/business/internet";
import LectureBusiness from "./contents/business/lecture";
import LiteratureBusiness from "./contents/business/literature";
import StructureBusiness from "./contents/business/stucture";
import TestBusiness from "./contents/business/test";
import VideoBusiness from "./contents/business/video";
import AboutCourseGovernment from "./contents/government/about-course";
import AssessmentGovernment from "./contents/government/assessment";
import IndependentGovernment from "./contents/government/independent";
import InternetGovernment from "./contents/government/internet";
import LectureGovernment from "./contents/government/lecture";
import LiteratureGovernment from "./contents/government/literature";
import StructureGovernment from "./contents/government/stucture";
import TestGovernment from "./contents/government/test";
import VideoGovernment from "./contents/government/video";
import AboutCourseJava from "./contents/java/about-course";
import AssessmentJava from "./contents/java/assessment";
import IndependentJava from "./contents/java/independent";
import InternetJava from "./contents/java/internet";
import LectureJava from "./contents/java/lecture";
import LiteratureJava from "./contents/java/literature";
import StructureJava from "./contents/java/stucture";
import TestJava from "./contents/java/test-java";
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
  { content: <AboutCourseJava />, path: "about-java" },
  { content: <StructureJava />, path: "structure-java" },
  { content: <AssessmentJava />, path: "baxolash-java" },
  { content: <TestJava />, path: "test-java" },
  { content: <IndependentJava />, path: "mustaqil-ish-java" },
  { content: <InternetJava />, path: "internet-resusrlar-java" },
  { content: <LiteratureJava />, path: "adabiyotlar-java" },
  { content: <VideoJava />, path: "video-java" },
  { content: <LectureJava />, path: "maruza-java" },

  { content: <AboutCourseOperation />, path: "about-operation" },
  { content: <StructureOperation />, path: "structure-operatsion" },
  { content: <AssessmentOperation />, path: "baxolash-operatsion" },
  { content: <TestOperation />, path: "test-operatsion" },
  { content: <IndependentOperation />, path: "mustaqil-ish-operatsion" },
  { content: <InternetOperation />, path: "internet-resusrlar-operatsion" },
  { content: <LiteratureOperation />, path: "adabiyotlar-operatsion" },
  { content: <VideoOperation />, path: "video-operatsion" },
  { content: <LectureOperation />, path: "maruza-operatsion" },

  { content: <AboutCourseGovernment />, path: "about-government" },
  { content: <StructureGovernment />, path: "structure-government" },
  { content: <AssessmentGovernment />, path: "baxolash-government" },
  { content: <TestGovernment />, path: "test-government" },
  { content: <IndependentGovernment />, path: "mustaqil-ish-government" },
  { content: <InternetGovernment />, path: "internet-resusrlar-government" },
  { content: <LiteratureGovernment />, path: "adabiyotlar-government" },
  { content: <VideoGovernment />, path: "video-government" },
  { content: <LectureGovernment />, path: "maruza-government" },

  { content: <AboutCourseBusiness />, path: "about-social" },
  { content: <StructureBusiness />, path: "structure-social" },
  { content: <AssessmentBusiness />, path: "baxolash-social" },
  { content: <TestBusiness />, path: "test-social" },
  { content: <IndependentBusiness />, path: "mustaqil-ish-social" },
  { content: <InternetBusiness />, path: "internet-resusrlar-social" },
  { content: <LiteratureBusiness />, path: "adabiyotlar-social" },
  { content: <VideoBusiness />, path: "video-social" },
  { content: <LectureBusiness />, path: "maruza-social" },
];
