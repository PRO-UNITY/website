import { Link } from "react-router-dom";
import HrmsDocumentationLayout from "../../../../Layout/HrmsDocumentationLayout";

const DocumentationHome = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="doc-content home p-5">
        <h1 className="h1 text-primary  text-center">Documentation</h1>
        <div className="body p-5 border">
          <div className="">
            <h5 className="h5  text-primary">Authentification</h5>
            <ol>
              <li className="mt-3 fs-">
                <h6 className=" text-primary">User</h6>
                <div className="list-child ">
                  <Link
                    className="text-dark fw-semibold d-block text-decoration-none"
                    to={"/"}
                  >
                    - Register
                  </Link>
                  <Link
                    className="text-dark  fw-semibold d-block text-decoration-none"
                    to={"/"}
                  >
                    - Login
                  </Link>
                  <Link
                    className="text-dark d-block fw-semibold  text-decoration-none"
                    to={"/"}
                  >
                    - Logout
                  </Link>
                </div>
              </li>
              <li className="mt-3">
                <h6 className="text-primary">Hr</h6>
                <div className="list-child ">
                  <Link
                    className="text-dark fw-semibold d-block text-decoration-none"
                    to={"/"}
                  >
                    - Register
                  </Link>
                  <Link
                    className="text-dark fw-semibold d-block text-decoration-none"
                    to={"/"}
                  >
                    - Login
                  </Link>
                  <Link
                    className="text-dark d-block  fw-semibold text-decoration-none"
                    to={"/"}
                  >
                    - Logout
                  </Link>
                </div>
              </li>
              <li className="mt-3">
                <h6 className="text-primary">Hr</h6>
                <div className="list-child ">
                  <Link
                    className="text-dark fw-semibold d-block text-decoration-none"
                    to={"/"}
                  >
                    - Login
                  </Link>

                  <Link
                    className="text-dark d-block  fw-semibold text-decoration-none"
                    to={"/"}
                  >
                    - Logout
                  </Link>
                </div>
              </li>
            </ol>
            <h5 className="h5  text-primary">Company</h5>
            <ol>
              <li>
                {" "}
                <h6 className=" text-primary">Hr</h6>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </HrmsDocumentationLayout>
  );
};

export default DocumentationHome;
