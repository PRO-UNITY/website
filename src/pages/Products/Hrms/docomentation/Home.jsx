import { Link } from "react-router-dom";
import HrmsDocumentationLayout from "../../../../Layout/HrmsDocumentationLayout";
const Data = [
  {
    id: 1,
    title: "Authentification",
    child: [
      {
        subtitle: "User",
        subchild: [
          {
            name: "Register",
            path: "users#create-user",
          },
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
      {
        subtitle: "	Hr",
        subchild: [
          { name: "Register", path: "users#create-user" },
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
      {
        subtitle: "Admin",
        subchild: [
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    child: [
      {
        subtitle: "Hr",
        subchild: [
          { name: "Companies List (GET)", path: "company#company-list" },
          { name: "	Company Create (POST)", path: "company#creat-company-list" },
          {
            name: "Company Details (GET/PUT) (/id[companyID]) ",
            path: "company#company-list-detail",
          },
          {
            name: "Company Vacancies (GET) ",
            path: "company#company-vacansy",
          },
        ],
      },
      {
        subtitle: "Admin",
        subchild: [
          { name: "Companies List (GET)", path: "company#company-list" },
          {
            name: "	Company Vacancies (GET)",
            path: "company#company-vacansy",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Hrs | Users",
    child: [
      {
        subtitle: "Hr",
        subchild: [
          { name: "Hrs (GET) (all hrs get)", path: "company#hrs" },
          { name: "Users (GET) (all users get)", path: "users#user-profile" },
        ],
      },
      {
        subtitle: "Admin",
        subchild: [
          { name: "Hrs (GET) (all hrs get)", path: "company#hrs" },
          { name: "Users (GET) (all users get)", path: "users#user-profile" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Job",
    child: [
      {
        subtitle: "User",
        subchild: [
          { name: "Apply job create (POST)", path: "job#apply-job" },
          { name: "Favorites (POST/GET)", path: "job#job-favourite" },
        ],
      },
      {
        subtitle: "Hr",
        subchild: [
          { name: "Analytics", path: "job#job-analytics" },
          { name: "Categories", path: "job#job-category" },
          { name: "Vacancies", path: "job#job-vacancies" },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Resumes",
    child: [
      {
        subtitle: "User",
        subchild: [
          { name: "Resumes (POST/GET)", path: "resume#resume-list" },
          {
            name: "Resume/id (GET/PUT/DELETE)",
            path: "resume#resume-list-detail",
          },
          { name: "User resumes (GET)", path: "resume#user-resumes" },
        ],
      },
      {
        subtitle: "Hr",
        subchild: [
          { name: "Job Hr resumes (GET)", path: "resume#resume-list" },
          {
            name: "Job Hr resumes read (GET)",
            path: "resume#resume-list-detail",
          },
        ],
      },
      {
        subtitle: "Admin",
        subchild: [{ name: "Resumes (GET)", path: "resume#resume-list" }],
      },
    ],
  },
];
const DocumentationHome = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="doc-content home p-5">
        <h1 className="h1 text-primary  text-center mb-4">Documentation</h1>
        <div className="body p-5 border rounded">
          <div className="mb-5">
            <h5 className="h5  text-primary">Roles</h5>
            <ul>
              <li className="fw-semibold">User</li>
              <li className="fw-semibold">Hr(Human Resource)</li>
              <li className="fw-semibold">Admin</li>
            </ul>
          </div>
          <hr />
          {Data.map((item) => (
            <div className="" key={item.id}>
              <h5 className="h5  text-primary">{item.title}</h5>
              <ol>
                {item.child.map((e, i) => (
                  <li className="mt-3 fs-" key={i}>
                    <h6 className=" text-primary">{e.subtitle}</h6>
                    <div className="list-child ">
                      {e.subchild.map((item, index) => (
                        <Link
                          key={index}
                          className=" list-link fw-semibold d-block text-decoration-none"
                          to={item.path}
                        >
                          - {item.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <hr />
          <div className="mt-5">
            <h5 className="h5  text-primary">Structure</h5>
            <ul>
              <li className="fw-semibold">Authentification </li>
              <li className="fw-semibold">Company</li>
              <li className="fw-semibold">Enrolls</li>
              <li className="fw-semibold">Resume</li>
            </ul>
          </div>
          <hr />
          <div className="mt-5">
            <h5 className="h5  text-primary">Structure</h5>
            <ul>
              <li className="fw-semibold">
                Django Rest Framework Simple JWT{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://django-rest-framework-simplejwt.readthedocs.io/en/latest"
                >
                  [https://django-rest-framework-simplejwt.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                Django Rest Framework Yasg{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drf-yasg.readthedocs.io/en/stable/"
                >
                  [https://drf-yasg.readthedocs.io/en/stable/]
                </a>
              </li>
              <li className="fw-semibold">
                Django Rest Framework Spectacular{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drf-spectacular.readthedocs.io/en/latest/"
                >
                  [https://drf-spectacular.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                Django Cors Headers{" "}
                <a target="_blank" rel="noreferrer" href="">
                  [pip install django-cors-headers]
                </a>
              </li>
              <li className="fw-semibold">
                Django Import Export
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://django-import-export.readthedocs.io/en/latest/"
                >
                  {" "}
                  [https://django-import-export.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                Django Filter
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://django-filter.readthedocs.io/en/stable/guide/usage.html"
                >
                  {" "}
                  [https://django-filter.readthedocs.io/en/stable/guide/usage.html]
                </a>
              </li>
              <li className="fw-semibold">
                Django Channels
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://channels.readthedocs.io/en/latest/"
                >
                  {" "}
                  [https://channels.readthedocs.io/en/latest/]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HrmsDocumentationLayout>
  );
};

export default DocumentationHome;
