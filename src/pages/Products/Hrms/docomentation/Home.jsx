import HrmsDocumentationLayout from "../../../../Layout/HrmsDocumentationLayout";
import Asaide from "./Asaide";

const DocumentationHome = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="d-flex hrms-doc bg-light  bg-white ">
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
          {/*  */}
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
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>SignUp
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/user_signup
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
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>LOGIN /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/user_sigin
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
              </div>
            </div>
          </div>
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
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Profile
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/user_profiles
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
              </div>
            </div>
          </div>

          {/* Update User */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-update">
                  User Udate
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
                      avatar :<code>string</code>
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0 fw-semibold">
                      phone :<code>string</code>
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
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Update
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/user_update
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
                    <span className="text-secondary mx-2">7</span>
                    {"  "}
                    <span className="nt">&quot;email&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">6</span>
                    {"  "}
                    <span className="nt">&quot;avatar&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">8</span>
                    {"  "}
                    <span className="nt">&quot;phone&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="s2">&quot;string&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2">8</span>
                    {"  "}
                    <span className="nt">&quot;active_profile&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="bool">boolean</span>
                    {"\n"}
                    <span className="text-secondary mx-2">9</span>
                    <span className="p">{"}"}</span>
                    {"\n"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
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
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Detail
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/user_details/
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
                    <span className="nt">&quot;property1&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="num">string</span>
                    <span className="p">,</span>
                    {"\n"}
                    <span className="text-secondary mx-2">2</span>
                    {"  "}
                    <span className="nt">&quot;property2&quot;</span>
                    <span className="p">:</span>{" "}
                    <span className="num">string</span>
                    <span className="p">,</span>
                    {"\n"}
                    <span className="text-secondary mx-2">9</span>
                    <span className="p">{"}"}</span>
                    {"\n"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          {/* User Manager */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-manager">
                  User Manager
                </h2>
                <p>
                  Har qaysi oshxona deleverylarini ma&apos;lumootlarni olish
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
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Manager
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/manager_user
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
              </div>
            </div>
          </div>
          {/* Delevery User */}
          <div className="row  pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="user-manager">
                  Delevery User
                </h2>
                <p>
                  Har qaysi oshxona deleverylarini ma&apos;lumootlarni olish
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
                  </div>
                  <div className="pre-code-block">
                    <pre className="chroma p-2">
                      <span className="text-secondary mx-2">1</span>Manager
                      /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/auth/manager_user
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
              </div>
            </div>
          </div>
          <hr className="my-md-5" />

          {/* Tasks section */}
          <div className="row pt-3 pt-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary">Tasks</h1>
            </div>
          </div>
          <div className="row pb-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3 my-4 text-primary" id="creat-task">
                  Create Task
                </h2>
                <p>
                  In order to create a Task, one must know the User ID to whom
                  the task will belong to. Knowing that information, issue a
                  <code>POST</code> request to <code>/users/:id/tasks</code>,
                  <code>:id</code>
                  being replaced with the user’s ID.
                </p>
                <h5 className="text-primary">Attributes</h5>
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      title <code>string</code>
                    </p>
                  </li>
                  <li className="content">
                    <p>
                      A descriptive name for the task. For example,
                      <code>But milk</code>.
                    </p>
                  </li>
                </ul>
                <p>
                  The value returned will represent te internal Task object used
                  by the API, which will contain two extra fields besides
                  <code>title</code>:
                </p>
                <h5>Attributes</h5>
                <ul className="doc-list p-0">
                  <li className="title">
                    <p className="m-0">
                      id <code>string</code>
                    </p>
                  </li>
                  <li className="content">
                    <p>
                      A unique value to identify this task among all other tasks
                    </p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      title <code>string</code>
                    </p>
                  </li>
                  <li className="content">
                    <p>The Task’s title</p>
                  </li>
                  <li className="title">
                    <p className="m-0">
                      done <code>bool</code>
                    </p>
                  </li>
                  <li className="content">
                    <p>
                      Value indicating whether the task has been completed (
                      <code>true</code>) or not (<code>false</code>)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>POST /users
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>
                      {"\n"}
                      <span className="text-secondary mx-2">3</span>name=Fefo
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Response</p>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-success text-center">
                      Success
                    </h6>
                    <pre className="chroma ">
                      <span className="text-secondary mx-2">1</span>
                      <span className="">{"{"}</span> {"\n"}
                      <span className="text-secondary mx-2">2</span>{" "}
                      <span className="text-secondary mx-2">
                        &quot;id&quot;
                      </span>
                      <span>:</span>{" "}
                      <span className="">
                        &quot;FA3901CC-F667-4AA0-8CFE-B6B1C5058DFA&quot;
                      </span>
                      <span>,</span> {"\n"}
                      <span className="text-secondary mx-2">3</span>
                      {"  "}
                      <span>&quot;name&quot;</span>
                      <span>:</span>{" "}
                      <span className="s2">&quot;Fefo&quot;</span> {"\n"}
                      <span className="text-secondary mx-2">4</span>
                      <span>{"}"}</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/*  */}
          <div className="row py-3 py-md-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="fs-3  my-md-4 text-primary" id="making">
                  Marking as Complete
                </h2>
                <p>
                  Marking a task as completed consists in issuing a
                  <code>PATCH</code> request to{" "}
                  <code>/users/:uid/tasks/:id</code>, which will mark a task
                  with id <code>:id</code> belonging to User <code>:uid</code>{" "}
                  as done.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box">
                  <div className="title  px-3 py-2">
                    <p className="m-0">Request</p>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>PATCH
                      /users/8CD63BEE-CEF3-4CEC-83FD-6E3C2C2A0B47/tasks/B0FA0790-9CB0-473F-8E0B-7BD36D6CE867
                      {"\n"}
                    </pre>
                  </div>
                </div>
                <div className="box">
                  <div className="title  px-3 py-2">
                    <p className="m-0">Response</p>
                  </div>
                  <div className="pre-code-block p-1">
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
                      <span className="s2">
                        &quot;B0FA0790-9CB0-473F-8E0B-7BD36D6CE867&quot;
                      </span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2">3</span>
                      {"  "}
                      <span className="nt">&quot;title&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">&quot;Buy Milk&quot;</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2">4</span>
                      {"  "}
                      <span className="nt">&quot;done&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="kc">true</span>
                      {"\n"}
                      <span className="text-secondary mx-2">5</span>
                      <span className="p">{"}"}</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/*  */}
          <div className="row pb-5 px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <div className="content">
                <h2
                  className="fs-3 mb-3 mt-2 mt-md-5 text-primary"
                  id="listing-task"
                >
                  Listing Tasks
                </h2>
                <p>
                  The endpoint <code>/users/:id/tasks</code> is responsible for
                  listing all tasks for a given user. It also accepts an
                  optional
                  <code>status</code> querystring parameter, used to filter
                  which kind of tasks to list.
                </p>
                <h5>QueryString</h5>
                <ul className="doc-list p-0">
                  <li className="title">
                    <p>
                      <span className="fw-semibold">status</span>{" "}
                      <code>optional string</code>
                    </p>
                  </li>
                  <li className="content">
                    <p>
                      Optional parameter to only show tasks in a specific
                      condition.
                    </p>
                    <h5 className="py-3 ps-2">Enum values</h5>
                    <ul className="doc-list p-0">
                      <li className="title px-2">
                        <p className="mb-0 mt-2 fw-semibold">all</p>
                      </li>
                      <li className="content px-2">
                        <p>Shows all tasks, independent of their status.</p>
                      </li>
                      <hr />
                      <li className="title px-2">
                        <p className="m-0 fw-semibold">pending</p>
                      </li>
                      <li className="content px-2">
                        <p>Shows only tasks not marked as completed.</p>
                      </li>
                      <hr />
                      <li className="title px-2">
                        <p className="m-0 fw-semibold">done</p>
                      </li>
                      <li className="content px-2">
                        <p>Shows only completed tasks.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sidenote">
                <div className="box mt-5">
                  <div className="title">
                    <p className="m-0 py-2 px-3">Response</p>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2"> 1</span>
                      <span className="p">[</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 2</span>
                      {"  "}
                      <span className="p">{"{"}</span> {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"    "}
                      <span className="nt">&quot;id&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">
                        &quot;B0FA0790-9CB0-473F-8E0B-7BD36D6CE867&quot;
                      </span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"    "}
                      <span className="nt">&quot;title&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">&quot;Buy Milk&quot;</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"    "}
                      <span className="nt">&quot;done&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="kc">true</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"  "}
                      <span className="p">{"}"}</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"  "}
                      <span className="p">{"{"}</span> {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"    "}
                      <span className="nt">&quot;id&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">
                        &quot;97FF0CC1-BC1C-4415-ABEA-39666F759EAD&quot;
                      </span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"    "}
                      <span className="nt">&quot;title&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="s2">&quot;Check for mail&quot;</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2">10</span>
                      {"    "}
                      <span className="nt">&quot;done&quot;</span>
                      <span className="p">:</span>{" "}
                      <span className="kc">false</span>
                      {"\n"}
                      <span className="text-secondary mx-2">11</span>
                      {"  "}
                      <span className="p">{"}"}</span>
                      <span className="p">,</span>
                      {"\n"}
                      <span className="text-secondary mx-2">12</span>
                      <span className="p">]</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Asaide />
      </div>
    </HrmsDocumentationLayout>
  );
};

export default DocumentationHome;
