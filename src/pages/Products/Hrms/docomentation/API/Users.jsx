import HrmsDocumentationLayout from "../../../../../Layout/HrmsDocumentationLayout";
import Asaide from "../Asaide";
import CodeFormat from "../components/Code-format";
import { User } from "./Data";

const Sidenavs = [
  {
    id: 1,
    title: "Create User",
    path: "create-user",
  },
  {
    id: 2,
    title: "Sign in",
    path: "sign-in",
  },
  {
    id: 3,
    title: "User Profile",
    path: "user-profile",
  },
  {
    id: 4,
    title: "User Update",
    path: "user-update",
  },
  {
    id: 5,
    title: "User Detail",
    path: "user-detail",
  },
  {
    id: 6,
    title: "User Meneger",
    path: "user-manager",
  },
  {
    id: 7,
    title: "User Delivery",
    path: "user-delivery",
  },
  {
    id: 8,
    title: "User Delivery with ID",
    path: "user-delivery-id",
  },
  {
    id: 9,
    title: "User Delivery Update",
    path: "user-delivery-update",
  },
];

const Users = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="d-flex hrms-doc bg-light  ">
        <div className="doc-content bg-light pt-5">
          <div className="row px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary mt-4">Users</h1>
              <p className="py-4">
                Users are the principal model implemented here. It is needed to
                perform any other task in this <br /> API.
              </p>
            </div>
          </div>
          {/* Creat User */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="create-user">
                Create User
              </h2>
              <p>
                Userlarni yaratish uchun <code>POST</code> so&apos;rovidan
                foydalaniladi. Bir xil <pre className="d-inline">username </pre>
                lardan foydalanib bo&apos;lmaydi
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    username :<code>string</code>
                  </p>
                  <p className="m-0">
                    first_name :<code>string</code>
                  </p>
                  <p className="m-0">
                    last_name :<code>string</code>
                  </p>
                  <p className="m-0">
                    email :<code>string</code>
                  </p>
                  <p className="m-0">
                    password :<code>string</code>
                  </p>
                  <p className="m-0">
                    confirm_password :<code>string</code>
                  </p>
                  <p className="m-0">
                    role :<code>string</code>
                  </p>
                </li>
                <li className="content mt-3">
                  <p className="m-0">
                    / Takror <code>username</code> lardan foydalanib
                    bo&apos;lmaydi
                  </p>
                  <p className="m-0">
                    / <code>password</code> 8 ta belgidan ko&apos;p
                    bo&apos;lishi kerak
                  </p>
                </li>
              </ul>

              <h5>Response Status</h5>
              <hr />
              <ul className="doc-list p-0">
                <h6>
                  Success:{" "}
                  <pre className="text-success d-inline">201 Created</pre>
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
                        <code className="bg-success text-light">POST</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>SignUp
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/auth/register
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
                    <CodeFormat JsonData={User.CreateUserSucces} />
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
                    <CodeFormat JsonData={User.CreateUserError} />
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />

          {/* Get User */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="sign-in">
                  Sign in
                </h2>
                <p>
                  Foydalanuvchilar tizimga kirishi{" "}
                  <pre className="d-inline">username</pre> va{" "}
                  <pre className="d-inline">password</pre> yordamida amalga
                  oshiriladi <code>POST</code> so&apos;rovi yordamida amalga
                  oshiriladi.
                </p>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      username :<code>string</code>
                    </p>
                    <p className="m-0">
                      password :<code>string</code>
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
                    <pre className="text-danger d-inline">400 Bad Request</pre>
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
                      <span className="text-secondary mx-2">1</span>LOGIN /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/auth/login
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

                    <pre className="chroma">
                      <span className="text-secondary mx-2"> 1</span>
                      <span className="p">{"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 2</span>
                      {"  "}
                      <span className="p">&quot;token&quot;{" {"}</span> {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"    "}
                      <span className="nt">&quot;refresh&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"    "}
                      <span className="nt">&quot;access&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"  "}
                      <span className="p">{"}"}</span>
                      <span className="p">,</span>
                      {"\n"} <span className="text-secondary mx-2">5</span>
                      <span className="p">{"}"}</span>
                      {"\n"}
                    </pre>
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
                    <CodeFormat JsonData={User.GetUserError} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* User Profile */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-profile">
                  User Profile
                </h2>
                <p>
                  Foydalanuvchilarga tegishli ma&apos;lumootlarni olish uchun{" "}
                  <code>GET</code> so&apos;rovi yordamida amalga oshiriladi
                </p>
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
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/user
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
                  <CodeFormat JsonData={User.ProfileUserSucces} />
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
          {/* Update User */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-update">
                  User Update
                </h2>
                <p>
                  Foydalanuvchilarni ma&apos;lumootlarni tahrirlash uchun{" "}
                  <code>PUT</code> so&apos;rovi yordamida amalga oshiriladi
                </p>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      username :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      first_name :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      last_name :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      email :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      avatar :<code>file</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      phone :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      country :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      city :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      bio :<code>string</code>
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
                      <span>
                        <code className="bg-warning text-dark">PUT</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Update
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/user
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
                  <h6 className="ms-2 m-0 h6 text-success text-center">
                    Success
                  </h6>
                  <CodeFormat JsonData={User.UpdateUserSuccess} />
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
          {/* User Detail */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-detail">
                  User Detail
                </h2>
                <p>
                  Har qaysi foydalanuvchini <pre className="d-inline">ID</pre>{" "}
                  ma&apos;lumootlarni olish uchun <code>GET</code> so&apos;rovi
                  yordamida amalga oshiriladi
                </p>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0 fw-semibold">
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
                        <code className="bg-primary text-white">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Detail
                      /user
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/user/
                      {"{id}"}
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
                  <h6 className="ms-2 m-0 h6 text-success text-center">
                    Success
                  </h6>
                  <CodeFormat JsonData={User.UserDetailSuccess} />
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                    <pre className="ms-2 m-0 ">
                      Status:
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <pre className="chroma py-3">
                    <span className="mx-2">*Not found</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* User Manager */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-manager">
                  HR Manager
                </h2>
                <p>
                  Har qaysi company hrlarini ma&apos;lumootlarni olish
                  uchun <code>GET</code> so&apos;rovi yordamida amalga
                  oshiriladi
                </p>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
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
                        <code className="bg-primary text-white">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Manager
                      /hrs
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/hrms/hrs
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
                  <h6 className="ms-2 m-0 h6 text-success text-center">
                    Success
                  </h6>
                  <CodeFormat JsonData={User.Hrlist} />
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
          {/* Delevery User */}
          {/* <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-delivery">
                  Delivery User
                </h2>
                <p>
                  Har qaysi oshxona deliverylarini ma&apos;lumootlarni olish
                  uchun <code>GET</code> so&apos;rovi yordamida amalga
                  oshiriladi
                </p>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0 fw-semibold">
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
                        <code className="bg-primary text-white">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Manager
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/delivery_user
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
                  <h6 className="ms-2 m-0 h6 text-success text-center">
                    Success
                  </h6>
                  <pre className="chroma">
                    <span className="text-secondary mx-2">1</span>
                    <span className="p">{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2">2</span>
                    {"  "}
                    <span className="nt">&quot;id&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="num">number</span>
                    <span className="p">,</span>
                    {"\n"}
                    <span className="text-secondary mx-2">3</span>
                    {"  "}
                    <span className="nt">&quot;username&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    <span className="p">,</span>
                    {"\n"}
                    <span className="text-secondary mx-2">4</span>
                    {"  "}
                    <span className="nt">&quot;first_name&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">5</span>
                    {"  "}
                    <span className="nt">&quot;last_name&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">6</span>
                    {"  "}
                    <span className="nt">&quot;avatar&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">7</span>
                    {"  "}
                    <span className="nt">&quot;email&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">8</span>
                    {"  "}
                    <span className="nt">&quot;phone&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">9</span>
                    {"  "}
                    <span className="nt">&quot;user_id&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="num">number</span>
                    {"\n"}
                    <span className="text-secondary mx-2">10</span>
                    {"  "}
                    <span className="nt">&quot;groups&quot;</span>
                    <span className="p">:</span> <span className="">{"["}</span>{" "}
                    {"\n"}
                    <span className="text-secondary mx-2">11</span>
                    {"    "}
                    <span className="">{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2">12</span>
                    {"    "}
                    <span className=" mx-2">&quot;id&quot;</span>
                    <span>:</span>{" "}
                    <span className="">
                      <span className="s2">&quot;string&quot;</span>
                    </span>
                    <span>,</span> {"\n"}
                    <span className="text-secondary mx-2">13</span>
                    {"     "}
                    <span>&quot;name&quot;</span>
                    <span>:</span>{" "}
                    <span className="s2">&quot;string&quot;</span> {"\n"}
                    <span className="text-secondary mx-2">14</span>
                    {"     "}
                    <span>{"}"}</span>
                    {"\n"}
                    <span className="text-secondary mx-2">15</span>
                    {"   "}
                    <span>{"]"}</span>
                    {"\n"}
                    <span className="text-secondary mx-2">16</span>
                    {"  "}
                    <span className="nt">&quot;active_profile&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="bool">boolean</span>
                    {"\n"}
                    <span className="text-secondary mx-2">17</span>
                    <span className="p">{"}"}</span>
                    {"\n"}
                  </pre>
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
          {/* Delevery User  with Id*/}
          {/* <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-delivery-id">
                  HR User with ID
                </h2>
                <p>
                  Har qaysi company uchun aynan biror hr
                  ma&apos;lumootlarni olish uchun <code>ID</code> orqali{" "}
                  <code>GET</code> so&apos;rovi yordamida amalga oshiriladi
                </p>
                <h5>Attributes</h5>
                <hr />
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0 fw-semibold">
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
                        <code className="bg-primary text-white">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Manager
                      /hrs
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/delivery_user_crud/
                      {"{id}"}
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
                  <h6 className="ms-2 m-0 h6 text-success text-center">
                    Success
                  </h6>
                  <pre className="chroma">
                    <span className="text-secondary mx-2">1</span>
                    <span className="p">{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2">2</span>
                    {"  "}
                    <span className="nt">&quot;id&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="num">number</span>
                    <span className="p">,</span>
                    {"\n"}
                    <span className="text-secondary mx-2">3</span>
                    {"  "}
                    <span className="nt">&quot;username&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    <span className="p">,</span>
                    {"\n"}
                    <span className="text-secondary mx-2">4</span>
                    {"  "}
                    <span className="nt">&quot;first_name&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">5</span>
                    {"  "}
                    <span className="nt">&quot;last_name&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">6</span>
                    {"  "}
                    <span className="nt">&quot;avatar&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">7</span>
                    {"  "}
                    <span className="nt">&quot;email&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">8</span>
                    {"  "}
                    <span className="nt">&quot;phone&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">9</span>
                    {"  "}
                    <span className="nt">&quot;user_id&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="num">number</span>
                    {"\n"}
                    <span className="text-secondary mx-2">10</span>
                    {"  "}
                    <span className="nt">&quot;groups&quot;</span>
                    <span className="p">:</span> <span className="">{"["}</span>{" "}
                    {"\n"}
                    <span className="text-secondary mx-2">11</span>
                    {"    "}
                    <span className="">{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2">12</span>
                    {"    "}
                    <span className=" mx-2">&quot;id&quot;</span>
                    <span>:</span>{" "}
                    <span className="">
                      <span className="s2">&quot;string&quot;</span>
                    </span>
                    <span>,</span> {"\n"}
                    <span className="text-secondary mx-2">13</span>
                    {"     "}
                    <span>&quot;name&quot;</span>
                    <span>:</span>{" "}
                    <span className="s2">&quot;string&quot;</span> {"\n"}
                    <span className="text-secondary mx-2">14</span>
                    {"     "}
                    <span>{"}"}</span>
                    {"\n"}
                    <span className="text-secondary mx-2">15</span>
                    {"   "}
                    <span>{"]"}</span>
                    {"\n"}
                    <span className="text-secondary mx-2">16</span>
                    {"  "}
                    <span className="nt">&quot;active_profile&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="bool">boolean</span>
                    {"\n"}
                    <span className="text-secondary mx-2">17</span>
                    <span className="p">{"}"}</span>
                    {"\n"}
                  </pre>
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
          </div> */}
          {/* Delevery User  Update*/}


          {/* Tasks section */}
        </div>
        <Asaide Sidenavs={Sidenavs} />
      </div>
    </HrmsDocumentationLayout>
  );
};

export default Users;
