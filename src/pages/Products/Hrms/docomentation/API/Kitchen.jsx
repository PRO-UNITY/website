import HrmsDocumentationLayout from "../../../../../Layout/HrmsDocumentationLayout";
import Asaide from "../Asaide";
const AsaideNavs = [
  {
    id: 3,
    title: "All Kitechen",
    path: "all-kitchen",
  },
  {
    id: 4,
    title: "Kitchen with Id",
    path: "kitchen-id",
  },
  {
    id: 5,
    title: "Creat Kitchen",
    path: "create-kitchen",
  },
  {
    id: 6,
    title: "Update Kitchen",
    path: "update-kitchen",
  },
  {
    id: 7,
    title: "Delete Kitchen",
    path: "delete-kitchen",
  },
  {
    id: 8,
    title: "Kitchen Category",
    path: "kitchen-category",
  },
  {
    id: 9,
    title: "Create Category",
    path: "create-category",
  },
  {
    id: 10,
    title: "Update Category",
    path: "update-category",
  },
  {
    id: 11,
    title: "Delete Category",
    path: "delete-category",
  },
  {
    id: 12,
    title: "Kitchet food ID",
    path: "kitchen-food-id",
  },
];
const Kitchen = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="d-flex w-100 hrms-doc bg-light  bg-white">
        <div className="doc-content w-100 bg-light pt-5">
          <div className="row px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary mt-4">Kitchen</h1>
            </div>
          </div>
          {/* All Kitchen */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="all-kitchen">
                All Kitchen
              </h2>
              <p>
                Barcha oshxonalarga malumotlarini olish uchun uchun{""}
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
                      Kitchen/ Get All
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/
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
          {/* Get Kitchen With ID */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="kitchen-id">
                Kitchen with ID
              </h2>
              <p>
                Biror oshxonalarga malumotlarini olish uchun uchun{""}
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
                      Kitchen/ Get All
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/{"{id}"}
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
                      <span className="p">&quot;kitchen:&quot;{" ["}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"      "}
                      <span className="p">{"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"       "}
                      <span className="p">
                        &quot;id&quot;: <span className="num">number,</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"       "}
                      <span className="p">
                        &quot;name&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"       "}
                      <span className="p">
                        &quot;description&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"       "}
                      <span className="p">
                        &quot;logo&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"       "}
                      <span className="p">
                        &quot;user_id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"       "}
                      <span className="p">
                        &quot;is_active&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"       "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"       "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 12</span>
                      {"      "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 13</span>
                      {"   "}
                      <span className="p">{"]"}</span>
                      <span className="p">,</span>
                      {"\n"} <span className="text-secondary mx-2">14</span>
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
          <hr className="my-md-5" />
          {/* Creat Kitchen */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="create-kitchen">
                Creat Kitchen
              </h2>
              <p>Oshxona yaratish uchun</p>
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
                    description :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    is_active :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    working_time :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    latitude :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    longitude :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    logo :<code>file</code>
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
                      <span className="text-secondary mx-2">1</span>
                      Kitchen/ Create
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/
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
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;name&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;description&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;logo&quot;:</span>{" "}
                      <span className="bool">file</span>,{"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;user_id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"   "}
                      <span className="p">&quot;is_active&quot;:</span>{" "}
                      <span className="bool">bollean</span>,{"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"   "}
                      <span className="p">&quot;working_time&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"   "}
                      <span className="p">&quot;latitude&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"   "}
                      <span className="p">&quot;longitude&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"   "}
                      <span className="p">&quot;create_at&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 12</span>
                      {"   "}
                      <span className="p">&quot;updated_at&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}{" "}
                      <span className="text-secondary mx-2">13</span>
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
                    <pre className="chroma">
                      <pre className="chroma">
                        <span className="text-secondary mx-2"> 1</span>
                        <span className="p">{"{"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 2</span>
                        {"   "}
                        <span className="p">
                          &quot;name&quot; || &quot;description&quot; ||
                          &quot;working_time&quot; || &quot;latitude&quot; ||
                          &quot;longitude&quot;:
                        </span>{" "}
                        <span>[</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 3</span>
                        {"      "}
                        <span className="s2">
                          &quot;This field is required.&quot;
                        </span>{" "}
                        {"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span>]</span>
                        {"\n"} <span className="text-secondary mx-2">5</span>
                        <span className="p">{"}"}</span>
                        {"\n"}
                      </pre>
                    </pre>
                    <pre className="chroma">
                      <pre className="chroma">
                        <span className="text-secondary mx-2"> 1</span>
                        <span className="p">{"{"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 2</span>
                        {"   "}
                        <span className="p">&quot;logo&quot;</span>{" "}
                        <span>[</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 3</span>
                        {"      "}
                        <span className="s2">
                          &quot;The submitted data was not a file. Check the
                          encoding type on the form.&quot;
                        </span>{" "}
                        {"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span>]</span>
                        {"\n"} <span className="text-secondary mx-2">5</span>
                        <span className="p">{"}"}</span>
                        {"\n"}
                      </pre>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
          {/* Update Kitchen ID*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="update-kitchen">
                Update Kitchen
              </h2>
              <p>
                Biror oshxonani tahrirlash uchun <code>PUT</code> methodi
                yordamida qilinadi
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
                    description :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    is_active :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    working_time :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    latitude :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    longitude :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    logo :<code>file</code>
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
                      <span className="text-secondary mx-2">1</span>
                      Kitchen/ Update
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/{"{id}"}
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
                      <span className="p">&quot;description&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;logo&quot;:</span>{" "}
                      <span className="bool">file</span>,{"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;user_id&quot;:</span>{" "}
                      <span className="num">number</span>,{"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;is_active&quot;:</span>{" "}
                      <span className="bool">bollean</span>,{"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"   "}
                      <span className="p">&quot;working_time&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"   "}
                      <span className="p">&quot;latitude&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"   "}
                      <span className="p">&quot;longitude&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"   "}
                      <span className="p">&quot;create_at&quot;:</span>{" "}
                      <span className="s2">&quot;string&quot;</span>,{"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"   "}
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
                      <span className="text-danger">400 Bad Request</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre className="chroma">
                      <pre className="chroma">
                        <span className="text-secondary mx-2"> 1</span>
                        <span className="p">{"{"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 2</span>
                        {"   "}
                        <span className="p">
                          &quot;name&quot; || &quot;description&quot; ||
                          &quot;working_time&quot; || &quot;latitude&quot; ||
                          &quot;longitude&quot;:
                        </span>{" "}
                        <span>[</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 3</span>
                        {"      "}
                        <span className="s2">
                          &quot;This field is required.&quot;
                        </span>{" "}
                        {"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span>]</span>
                        {"\n"} <span className="text-secondary mx-2">5</span>
                        <span className="p">{"}"}</span>
                        {"\n"}
                      </pre>
                    </pre>
                    <pre className="chroma">
                      <pre className="chroma">
                        <span className="text-secondary mx-2"> 1</span>
                        <span className="p">{"{"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 2</span>
                        {"   "}
                        <span className="p">&quot;logo&quot;</span>{" "}
                        <span>[</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 3</span>
                        {"      "}
                        <span className="s2">
                          &quot;The submitted data was not a file. Check the
                          encoding type on the form.&quot;
                        </span>{" "}
                        {"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span>]</span>
                        {"\n"} <span className="text-secondary mx-2">5</span>
                        <span className="p">{"}"}</span>
                        {"\n"}
                      </pre>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Delete Kitchen ID*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="delete-kitchen">
                Delete Kitchen
              </h2>
              <p>
                Biror oshxonani malumotarini o&apos;chirish uchun{" "}
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
                      https://api.prounity.uz/food-delivery/kitchen/{"{id}"}
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
          {/* Kitchen Category*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="kitchen-category">
                Kitchen Category
              </h2>
              <p>
                Oshxonani categoriyalarini olish uchun <code>GET</code> methodi
                yordamida qilinadi
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
                      Kitchen/ Delete
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/category
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
                      <span className="p">
                        &quot;id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">
                        &quot;name&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;kitchen:&quot;{" {"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"       "}
                      <span className="p">
                        &quot;id&quot;: <span className="num">number,</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"       "}
                      <span className="p">
                        &quot;name&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"       "}
                      <span className="p">
                        &quot;description&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"       "}
                      <span className="p">
                        &quot;logo&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"       "}
                      <span className="p">
                        &quot;user_id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"       "}
                      <span className="p">
                        &quot;is_active&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"       "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 12</span>
                      {"       "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 13</span>
                      {"   "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 14</span>
                      {"   "}
                      <span>
                        {" "}
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 15</span>
                      {"   "}
                      <span>
                        {" "}
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      <span className="p">,</span>
                      {"\n"} <span className="text-secondary mx-2">16</span>
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
                    <pre className="chroma mx-2 ">* Not Found</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Create Kitchen Category*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="create-category">
                Create Kitchen Category
              </h2>
              <p>
                Oshxonani categoriyalarini yaratish uchun <code>POST</code>{" "}
                methodi yordamida qilinadi
              </p>
              <h5>Attributes</h5>
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    name :<code>string</code>
                  </p>
                </li>
              </ul>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    name :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    kitchen :<code>id</code>
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
                      <span className="text-secondary mx-2">1</span>
                      Kitchen/ Delete
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/category
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
                      <span className="p">&quot;id&quot;: </span>
                      <span className="num">number</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;name&quot;: </span>
                      <span className="s2">string</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;kitchen_id&quot;: </span>
                      <span className="num">number</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;create_at&quot;: </span>
                      <span className="s2">string</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;updated_at&quot;: </span>
                      <span className="s2">string</span>
                      {"\n"} <span className="text-secondary mx-2">7</span>
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
                    <pre className="chroma">
                      <span className="text-secondary mx-2"> 1</span>
                      <span className="p">{"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 2</span>
                      {"   "}
                      <span className="p">&quot;name&quot;</span> <span>[</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"      "}
                      <span className="s2">
                        &quot;This field may not be blank.&quot;
                      </span>{" "}
                      ||
                      <span className="s2">
                        &quot;This field may not be null&quot;
                      </span>{" "}
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span>],</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;kitchen&quot;</span>{" "}
                      <span>[</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"      "}
                      <span className="s2">
                        &quot;`Invalid pk \&quot;`1265\&quot;` - object does not
                        exist.&quot;`&quot;
                      </span>{" "}
                      {"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"   "}
                      <span>]</span>
                      {"\n"} <span className="text-secondary mx-2">8</span>
                      <span className="p">{"}"}</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Update Kitchen Category ID*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="update-category">
                Kitchen Category Update
              </h2>
              <p>
                Biror oshxonani categoriya malumotlarini tahrirlash uchun{" "}
                <code>PUT</code> methodi yordamida qilinadi
              </p>
              <h5>Attributes</h5>
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    name :<code>string</code>
                  </p>
                </li>
              </ul>
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
                        <code className="bg-warning text-dark">PUT</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Kitchen/ Delete
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/category/
                      {"{id}"}
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
                      <span className="p">&quot;id&quot;: </span>
                      <span className="num">number</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;name&quot;: </span>
                      <span className="s2">string</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">&quot;kitchen_id&quot;: </span>
                      <span className="num">number</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">&quot;create_at&quot;: </span>
                      <span className="s2">string</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;updated_at&quot;: </span>
                      <span className="s2">string</span>
                      {"\n"} <span className="text-secondary mx-2">7</span>
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
                    <pre className="chroma">
                      <span className="text-secondary mx-2"> 1</span>
                      <span className="p">{"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 2</span>
                      {"   "}
                      <span className="p">&quot;name&quot;</span> <span>[</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"      "}
                      <span className="s2">
                        &quot;This field may not be blank.&quot;
                      </span>{" "}
                      ||
                      <span className="s2">
                        &quot;This field may not be null&quot;
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
              </div>
            </div>
          </div>
          {/* Delete Kitchen Category ID*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="delete-category">
                Delete Kitchen Category
              </h2>
              <p>
                Biror oshxonani categorylarini malumotarini o&apos;chirish uchun{" "}
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
                      https://api.prounity.uz/food-delivery/kitchen/{"{id}"}
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
                      <span className="text-danger">404 Not Found</span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <h6 className="ms-2 m-0 h6 text-danger text-center">
                      Error
                    </h6>
                    <pre className="chroma mx-2 ">* Not Found</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Kitchen Food ID*/}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="kitchen-food-id">
                Get kitchen food with ID
              </h2>
              <p>
                Biror oshxonani malumotarini olish uchun <code>GET</code>{" "}
                methodi yordamida qilinadi
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
                      Kitchen/ food
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/kitchen/foods/
                      {"{id}"}
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
                      <span className="p">
                        &quot;id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">&quot;kitchen:&quot;{" {"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"       "}
                      <span className="p">
                        &quot;id&quot;: <span className="num">number,</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"       "}
                      <span className="p">
                        &quot;name&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"       "}
                      <span className="p">
                        &quot;description&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 7</span>
                      {"       "}
                      <span className="p">
                        &quot;logo&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"       "}
                      <span className="p">
                        &quot;user_id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"       "}
                      <span className="p">
                        &quot;is_active&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 10</span>
                      {"       "}
                      <span className="p">
                        &quot;working_time&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 11</span>
                      {"       "}
                      <span className="p">
                        &quot;latitude&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 12</span>
                      {"       "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 13</span>
                      {"       "}
                      <span className="p">
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 14</span>
                      {"   "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 15</span>
                      {"    "}
                      <span>
                        &quot;name&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 16</span>
                      {"    "}
                      <span>
                        &quot;description&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 17</span>
                      {"    "}
                      <span>
                        &quot;image_food&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 18</span>
                      {"    "}
                      <span>
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 19</span>
                      {"    "}
                      <span>
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 20</span>
                      {"    "}
                      <span>
                        &quot;user&quot;: <span className="num">number</span>
                      </span>
                      <span className="p">,</span>
                      {"\n"} <span className="text-secondary mx-2">21</span>
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
                    <pre className="chroma mx-2 ">* Not Found</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-md-5" />
        </div>
        <Asaide Sidenavs={AsaideNavs} />
      </div>
    </HrmsDocumentationLayout>
  );
};

export default Kitchen;
