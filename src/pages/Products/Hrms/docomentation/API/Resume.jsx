import { useLocation } from "react-router-dom";
import HrmsDocumentationLayout from "../../../../../Layout/HrmsDocumentationLayout";
import Asaide from "../Asaide";
import CodeFormat from "../components/Code-format";
import { Jobs, Resumes } from "./Data";
import { useEffect, useRef, useState } from "react";
const Sidenavs = [
  {
    id: 1,
    title: "Level Educataion list",
    path: "level-edu",
  },
  {
    id: 2,
    title: "Resume List",
    path: "resume-list",
  },
  {
    id: 3,
    title: "Creat Resume List",
    path: "creat-resume-list",
  },
  {
    id: 4,
    title: "Resume List Detail",
    path: "resume-list-detail",
  },
  {
    id: 5,
    title: "Update Resume List",
    path: "updata-resume-list",
  },
  {
    id: 6,
    title: "Delete Resume List",
    path: "delete-resume-list",
  },
  {
    id: 8,
    title: "User Resumes",
    path: "user-resumes",
  },
];
const Resume = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
    scrollToElement(elementId);
  }, [location]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <HrmsDocumentationLayout>
      <div className="d-flex hrms-doc bg-light  ">
        <div className="doc-content w-100 bg-light pt-5">
          <div className="row px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary mt-4">Resume</h1>
              <p className="py-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, natus!
              </p>
            </div>
          </div>
          {/* Level Educataion list */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="level-edu"
              >
                Level Educataion list
              </h2>

              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    token :<code>string</code>
                  </p>
                </li>
              </ul>

              <h5>Response Status</h5>
              <hr />
              <ul className="doc-list p-0">
                <h6>
                  Success: <pre className="text-success d-inline">200 OK</pre>
                </h6>
                <h6>
                  Error:{" "}
                  <pre className="text-danger d-inline">400 Bad Request</pre>
                </h6>
              </ul>
            </div>
            <div className="col-xl-6 ">
              <div className="sidenote p-0 pt-md-5">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span className="text-success">
                        <code className="bg-primary text-light">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>SignUp
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/level-education-list
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">201 Created</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>
                    <CodeFormat JsonData={Resumes.LevelEdu} />
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">400 Bad Request</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre>
                      <span>* Not Found</span>
                    </pre>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* Resume List */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  data-section
                  className="fs-3 my-4 text-primary"
                  id="resume-list"
                >
                  Resume List
                </h2>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      token :<code>string</code>
                    </p>
                  </li>
                </ul>
                <h5>Response Status</h5>
                <hr />
                <ul className="doc-list p-0">
                  <h6>
                    Success: <pre className="text-success d-inline">200 Ok</pre>
                  </h6>
                  <h6>
                    Error: <pre className="text-danger d-inline">404 Not</pre>
                  </h6>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span className="text-success">
                        <code className="bg-primary text-light">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span> Resume List
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/resume-list
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">200 Ok</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>

                    <CodeFormat JsonData={Resumes.ResumeList} />
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre>
                      <span>* Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* Resume Create */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  data-section
                  className="fs-3 my-4 text-primary"
                  id="creat-resume-list"
                >
                  Resume Create
                </h2>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      about :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      content :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      date_of_brith :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      job_experiences :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      job_tag :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      level_of_education :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      location :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      phone :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      place_of_study :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      position :<code>string</code>
                    </p>
                  </li>
                </ul>
                <h5>Response Status</h5>
                <hr />
                <ul className="doc-list p-0">
                  <h6>
                    Success: <pre className="text-success d-inline">200 Ok</pre>
                  </h6>
                  <h6>
                    Error: <pre className="text-danger d-inline">404 Not</pre>
                  </h6>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span className="text-success">
                        <code className="bg-success text-light">POST</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Create
                      Resume
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/resume-list
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">200 Ok</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>
                    <CodeFormat JsonData={Resumes.ResumeDetails} />
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre>
                      <span>* Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* Resume Details */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  data-section
                  className="fs-3 my-4 text-primary"
                  id="resume-list-detail"
                >
                  Resume Details
                </h2>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      token :<code>string</code>
                    </p>
                  </li>
                </ul>
                <h5>Response Status</h5>
                <hr />
                <ul className="doc-list p-0">
                  <h6>
                    Success: <pre className="text-success d-inline">200 Ok</pre>
                  </h6>
                  <h6>
                    Error:{" "}
                    <pre className="text-danger d-inline">404 Not Found</pre>
                  </h6>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span className="text-success">
                        <code className="bg-primary text-light">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Profile
                      /user
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/resume-list/{"{id}"}
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">200 Ok</span>
                    </pre>
                  </div>
                  <CodeFormat JsonData={Resumes.ResumeDetails} />
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <pre className="chroma py-3 px-2">* Not Found</pre>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* Resume Update */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  data-section
                  className="fs-3 my-4 text-primary"
                  id="updata-resume-list"
                >
                  Update Resume
                </h2>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      about :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      content :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      date_of_brith :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      job_experiences :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      job_tag :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      level_of_education :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      location :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      phone :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      place_of_study :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      position :<code>string</code>
                    </p>
                  </li>
                </ul>
                <h5>Response Status</h5>
                <hr />
                <ul className="doc-list p-0">
                  <h6>
                    Success: <pre className="text-success d-inline">200 Ok</pre>
                  </h6>
                  <h6>
                    Error: <pre className="text-danger d-inline">404 Not</pre>
                  </h6>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span className="text-success">
                        <code className="bg-warning text-dark">PUT</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Create
                      Resume
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/resume-list/{"{id}"}
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">200 Ok</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>
                    <CodeFormat JsonData={Resumes.ResumeDetails} />
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre>
                      <span>* Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* Resume Delete */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  data-section
                  className="fs-3 my-4 text-primary"
                  id="delete-resume-list"
                >
                  Delete Resume
                </h2>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      token :<code>string</code>
                    </p>
                  </li>
                </ul>
                <h5>Response Status</h5>
                <hr />
                <ul className="doc-list p-0">
                  <h6>
                    Success: <pre className="text-success d-inline">200 Ok</pre>
                  </h6>
                  <h6>
                    Error: <pre className="text-danger d-inline">404 Not</pre>
                  </h6>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span>
                        <code className="bg-danger text-light">DELETE</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>
                      Delete Resume
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/resume-list/{"{id}"}
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">200 Ok</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>
                    <CodeFormat JsonData={Jobs.Delete} />
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre>
                      <span>* Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* User Resumes */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  data-section
                  className="fs-3 my-4 text-primary"
                  id="user-resumes"
                >
                  User Resumes
                </h2>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      token :<code>string</code>
                    </p>
                  </li>
                </ul>
                <h5>Response Status</h5>
                <hr />
                <ul className="doc-list p-0">
                  <h6>
                    Success: <pre className="text-success d-inline">200 Ok</pre>
                  </h6>
                  <h6>
                    Error: <pre className="text-danger d-inline">404 Not</pre>
                  </h6>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span className="text-success">
                        <code className="bg-primary text-light">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span> Resume User
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/resume/user-resumes
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:<span className="text-success">200 Ok</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>

                    <CodeFormat JsonData={Resumes.ResumeList} />
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre>
                      <span>* Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
        </div>
        <Asaide Sidenavs={Sidenavs} scrollActive={activeSection} />
      </div>
    </HrmsDocumentationLayout>
  );
};

export default Resume;
