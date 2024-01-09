import { useContext } from "react";
import DeliveryDocumentationLayout from "../../../../../layout/DeliveryDocumentationLayout";
import Asaide from "../Asaide";
import { AsideScrollActive } from "../../../../../context/AsideScrollActive";

const AsaideNavs = [
  {
    id: 1,
    title: "All Foods",
    path: "all-foods",
  },
  {
    id: 2,
    title: "Create Foods",
    path: "create-foods",
  },
  {
    id: 3,
    title: "Foods with Id",
    path: "foods-id",
  },
  {
    id: 4,
    title: "Update food",
    path: "update-food",
  },
  {
    id: 5,
    title: "Delete food",
    path: "delete-food",
  },
];
const Foods = () => {
  const { activeSection } = useContext(AsideScrollActive);
  return (
    <DeliveryDocumentationLayout>
      <div className="d-flex w-100 hrms-doc ">
        <div className="doc-content  w-100  pt-5">
          <div className="row px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary mt-4">Foods</h1>
            </div>
          </div>
          {/* All Foods */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="all-foods"
              >
                All Foods
              </h2>
              <p>
                Barcha oshxonalarga foodlarini olish uchun uchun{""}
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
                        <code className="bg-section-prymary text-light">
                          GET
                        </code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Foods/ Get All
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/foods/
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
                      <span className="p">&quot;data&quot;{" {"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"       "}
                      <span className="p">
                        &quot;count&quot;: <span className="num">number,</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"       "}
                      <span className="p">
                        &quot;next&quot;:{" "}
                        <span className="num">null || number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"       "}
                      <span className="p">
                        &quot;previous&quot;:{" "}
                        <span className="num">null || number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"       "}
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
                        &quot;foods_count&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"           "}
                      <span>
                        &quot;like_count&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"           "}
                      <span>
                        &quot;name&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 12</span>
                      {"           "}
                      <span>
                        &quot;description&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 13</span>
                      {"           "}
                      <span>
                        &quot;logo&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 14</span>
                      {"           "}
                      <span>
                        &quot;is_active&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 15</span>
                      {"           "}
                      <span>
                        &quot;working_time&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 16</span>
                      {"           "}
                      <span>
                        &quot;latitude&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 17</span>
                      {"           "}
                      <span>
                        &quot;longitude&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 18</span>
                      {"           "}
                      <span>
                        &quot;create_at&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 19</span>
                      {"           "}
                      <span>
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 20</span>
                      {"           "}
                      <span>
                        &quot;user&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 21</span>
                      {"           "}
                      <span>
                        &quot;delivery&quot;: <span>[</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 22</span>
                      {"              "}
                      <span className="num">number</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 23</span>
                      {"            "}
                      <span>]</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 24</span>
                      {"         "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 25</span>
                      {"       "}
                      <span className="p">]</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 26</span>
                      {"   "}
                      <span className="p">{"}"}</span>
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
          {/* Create Foods */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="create-foods"
              >
                Create Foods
              </h2>
              <p>
                Barcha oshxonalarga foodlarini yaratish uchun uchun{""}
                <code>Post</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    name :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    food_img :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    description :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    price :<code>string</code>
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
                      Foods/ Create
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/foods/
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
                      <span className="p">&quot;name&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;food_img&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;description&quot;:</span>{" "}
                      <span className="bool">file</span>,{"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;price&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;kitchen_id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"   "}
                      <span className="p">&quot;categories_id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"  "}
                      <span className="p">&quot;create_at&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"  "}
                      <span className="p">&quot;updated_at&quot;:</span>{" "}
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
          {/*  Foods with ID */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="foods-id"
              >
                Get Foods ID
              </h2>
              <p>
                Oshxonalarga tegishli biror foodlarini olish uchun uchun{""}
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
                      Foods/ Get Id
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/foods/{"{id}"}
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
                      <span className="p">&quot;data&quot;{" {"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"       "}
                      <span className="p">
                        &quot;count&quot;: <span className="num">number,</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"       "}
                      <span className="p">
                        &quot;next&quot;:{" "}
                        <span className="num">null || number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"       "}
                      <span className="p">
                        &quot;previous&quot;:{" "}
                        <span className="num">null || number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"       "}
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
                        &quot;foods_count&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"           "}
                      <span>
                        &quot;like_count&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"           "}
                      <span>
                        &quot;name&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 12</span>
                      {"           "}
                      <span>
                        &quot;description&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 13</span>
                      {"           "}
                      <span>
                        &quot;logo&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 14</span>
                      {"           "}
                      <span>
                        &quot;is_active&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 15</span>
                      {"           "}
                      <span>
                        &quot;working_time&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 16</span>
                      {"           "}
                      <span>
                        &quot;latitude&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 17</span>
                      {"           "}
                      <span>
                        &quot;longitude&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 18</span>
                      {"           "}
                      <span>
                        &quot;create_at&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 19</span>
                      {"           "}
                      <span>
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 20</span>
                      {"           "}
                      <span>
                        &quot;user&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 21</span>
                      {"           "}
                      <span>
                        &quot;delivery&quot;: <span>[</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 22</span>
                      {"              "}
                      <span className="num">number</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 23</span>
                      {"            "}
                      <span>]</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 24</span>
                      {"         "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 25</span>
                      {"       "}
                      <span className="p">]</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 26</span>
                      {"   "}
                      <span className="p">{"}"}</span>
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
          {/* Update Foods */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="update-food"
              >
                Update Foods
              </h2>
              <p>
                Oshxonalarga tegishli foodlarini tehrirlash uchun uchun{""}
                <code>PUT</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    name :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    food_img :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    description :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    price :<code>string</code>
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
                        <code className="bg-warning text-dark">PUT</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Foods/ Update
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/foods/{"{id}"}
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
                      <span className="p">&quot;name&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;food_img&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;description&quot;:</span>{" "}
                      <span className="bool">file</span>,{"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;price&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;kitchen_id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"   "}
                      <span className="p">&quot;categories_id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"  "}
                      <span className="p">&quot;create_at&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"  "}
                      <span className="p">&quot;updated_at&quot;:</span>{" "}
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
          {/* Delete Kitchen ID*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="delete-food"
              >
                Delete Foods
              </h2>
              <p>
                Oshxonani tegishli biror foodni o&apos;chirish uchun{" "}
                <code>DELETE</code> methodi yordamida qilinadi
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
                  <pre className="text-danger d-inline">
                    500 Internal Server Error
                  </pre>
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
                        <code className="bg-danger text-light">DELETE</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Kitchen/ Delete
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/foods/{"{id}"}
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
                      <span className="p">&quot;message&quot;</span>{" "}
                      <span>[</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"      "}
                      <span className="s2">
                        &quot;Delete success&quot;
                      </span>{" "}
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span>]</span>
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
                      <span className="text-danger">
                        500 Internal Server Error
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre className="chroma mx-2 ">Internal Server Error</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Asaide Sidenavs={AsaideNavs} scrollActive={activeSection} />
      </div>
    </DeliveryDocumentationLayout>
  );
};

export default Foods;
