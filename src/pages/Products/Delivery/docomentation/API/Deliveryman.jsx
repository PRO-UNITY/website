import DeliveryDocumentationLayout from "../../../../../Layout/DeliveryDocumentationLayout";
import Asaide from "../Asaide";

const AsaideNavs = [
  {
    id: 1,
    title: "All Deliveryman",
    path: "all-deliveryman",
  },
  {
    id: 2,
    title: "Create Deliveryman",
    path: "create-deliveryman",
  },
  {
    id: 3,
    title: "Update Deliveryman",
    path: "update-deliveryman",
  },
];
const Deliveryman = () => {
  return (
    <DeliveryDocumentationLayout>
      <div className="d-flex w-100 hrms-doc bg-light  bg-white">
        <div className="doc-content w-100 bg-light pt-5">
          <div className="row px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary mt-4">Deliveryman</h1>
            </div>
          </div>
          {/* All deliveryman */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="all-kitchen">
                All Deliveryman
              </h2>
              <p>
                Oshxonalarga tegishli deliverymanlarini olish uchun uchun{""}
                <code>GET</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">-</ul>

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
                      <span className="text-secondary mx-2">1</span>
                      Deliveryman/ Get All
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/deliveryman/
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
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">
                        &quot;id&quot;: <span className="num">number,</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">
                        &quot;username&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;first_name&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;last_name&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;avatar&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;email&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;phone&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;user_id&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;groups&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;active_profile&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;results&quot;: [</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"         "}
                      <span className="p">{"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"           "}
                      <span>
                        &quot;id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"           "}
                      <span>
                        &quot;name&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 24</span>
                      {"         "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 25</span>
                      {"   "}
                      <span className="p">]</span>
                      <span className="p">,</span>
                      {"\n"} <span className="text-secondary mx-2">27</span>
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
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre className="chroma">
                      <span className="mx-2"> * Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Create deliveryman */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="create-deliveryman">
                Create Deliveryman
              </h2>
              <p>
                Barcha oshxonalarga deliverymanlarini yaratish uchun uchun{""}
                <code>Post</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    username :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    first_name :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    last_name :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    password :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    confirm_password :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    active_profile :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    email :<code>string</code>
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
            <div className="col-xl-6 ">
              <div className="sidenote p-0 pt-md-5">
                <div className="box">
                  <div className="title px-3 py-2">
                    <p className="m-0">Request</p>
                    <pre className="ms-2 m-0 ">
                      Method:
                      <span>
                        <code className="bg-success text-light">POST</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Deliveryman/ Create
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/deliveryman/
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
                      {"   "}
                      <span className="p">&quot;id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 2</span>
                      {"   "}
                      <span className="p">&quot;username&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;first_name&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;last_name&quot;:</span>{" "}
                      <span className="bool">file</span>,{"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;active_profile&quot;:
                      </span>{" "}
                      <span className="bool">boolean</span>,{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}{" "}
                      <span className="text-secondary mx-2">12</span>
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
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre className="chroma">
                      <span className="mx-2"> * Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  deliveryman update */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="update-deliveryman">
                Get deliveryman ID
              </h2>
              <p>
                Oshxonalarga tegishli biror deliverymanlarini tahrirlash uchun
                uchun
                {""}
                <code>PUT</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">-</ul>

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
            <div className="col-xl-6 ">
              <div className="sidenote p-0 pt-md-5">
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
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Deliveryman/ Delete Delivaryman
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/deliveryman/{"{id}"}
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
                        {"   "}
                        <span className="p">&quot;id&quot;:</span>{" "}
                        <span className="num">number</span>,{"\n"}
                        <span className="text-secondary mx-2"> 2</span>
                        {"   "}
                        <span className="p">&quot;username&quot;:</span>{" "}
                        <span className="s2">&quot;string&quot;</span>,{"\n"}
                        <span className="text-secondary mx-2"> 3</span>
                        {"   "}
                        <span className="p">&quot;first_name&quot;:</span>{" "}
                        <span className="s2">&quot;string&quot;</span>,{"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span className="p">&quot;last_name&quot;:</span>{" "}
                        <span className="bool">file</span>,{"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;active_profile&quot;:
                        </span>{" "}
                        <span className="bool">boolean</span>,{" "}
                        <span className="s2">&quot;string&quot;</span>,{"\n"}{" "}
                        <span className="text-secondary mx-2">12</span>
                        <span className="p">{"}"}</span>
                        {"\n"}
                      </pre>
                    </div>
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
                    <pre className="chroma">
                      <span className="mx-2"> * Not Found</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Asaide Sidenavs={AsaideNavs} />
      </div>
    </DeliveryDocumentationLayout>
  );
};

export default Deliveryman;
