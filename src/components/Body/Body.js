import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "./Editor/Editor";
import Resume from "./Resume/Resume";

import "./Body.css";

function Body() {
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    Skill: "Skill",
    other: "Other",
  };
  const resume = useRef();

  const [resumeInfo, setResumeInfo] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.Skill]: {
      id: sections.Skill,
      sectionTitle: sections.Skill,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div className="container">
      <p className="heading">Genrate Resume 👇</p>

      <div className="main">
        <Editor
          sections={sections}
          information={resumeInfo}
          setInformation={setResumeInfo}
        />
        <Resume
          ref={resume}
          sections={sections}
          information={resumeInfo}
        />
      </div>
      <div className="toolbar">
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resume.current}
        />
      </div>
    </div>
  );
}

export default Body;
