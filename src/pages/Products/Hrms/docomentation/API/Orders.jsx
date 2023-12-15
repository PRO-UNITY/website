import HrmsDocumentationLayout from "../../../../../Layout/HrmsDocumentationLayout";
import Asaide from "../Asaide";

const AsaideNavs = [
  {
    id: 1,
    title: "All Orders",
    path: "all-orders",
  },
  {
    id: 2,
    title: "Create Orders",
    path: "create-orders",
  },
  {
    id: 3,
    title: "Get Orders with Id",
    path: "orders-id",
  },
  {
    id: 4,
    title: "Update Orders",
    path: "update-orders",
  },
];
const Orders = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="d-flex w-100 hrms-doc bg-light  bg-white">
        <div className="doc-content w-100 bg-light pt-5">
          <div className="row px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h1 className="text-primary mt-4">Orders</h1>
            </div>
          </div>
          {/* All orders */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="all-kitchen">
                All orders
              </h2>
              <p>
                Oshxonalarga tegishli orderslarini olish uchun uchun{""}
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
                      Foods/ Get All
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/orders/
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
                        &quot;id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">
                        &quot;klient&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;delivery&quot;:{" "}
                        <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;status&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;foods&quot;: {"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"     "}
                      <span>
                        &quot;additionalProp1&quot;:{" "}
                        <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"     "}
                      <span>
                        &quot;additionalProp2&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"     "}
                      <span>
                        &quot;additionalProp3&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;kitchen&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;is_delivery&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;is_active&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;address&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;latitude&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;longitude&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;total_price&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
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
          {/* Create orders */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="create-orders">
                Create Order
              </h2>
              <p>
                Barcha oshxonalarga orderslarini yaratish uchun uchun{""}
                <code>Post</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    klient :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    delivery :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    status :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    foods :<code>{"{additionalProp1: string}"}</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    kitchen :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    is_delivery :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    is_active :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    address :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    total_price :<code>number</code>
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
                      <span className="text-secondary mx-2"> 3</span>
                      {"   "}
                      <span className="p">
                        &quot;id&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 4</span>
                      {"   "}
                      <span className="p">
                        &quot;klient&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;delivery&quot;:{" "}
                        <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;status&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 6</span>
                      {"   "}
                      <span className="p">&quot;foods&quot;: {"{"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 8</span>
                      {"     "}
                      <span>
                        &quot;additionalProp1&quot;:{" "}
                        <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"     "}
                      <span>
                        &quot;additionalProp2&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 9</span>
                      {"     "}
                      <span>
                        &quot;additionalProp3&quot;:{" "}
                        <span className="s2">&quot;string&quot;</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">{"}"}</span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;kitchen&quot;: <span className="num">number</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;is_delivery&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;is_active&quot;:{" "}
                        <span className="bool">boolean</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;address&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;latitude&quot;: <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;longitude&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;total_price&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;create_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
                      {"\n"}
                      <span className="text-secondary mx-2"> 5</span>
                      {"   "}
                      <span className="p">
                        &quot;updated_at&quot;:{" "}
                        <span className="s2">string</span>
                      </span>
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
          {/*  orders with ID */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="orders-id">
                Get orders ID
              </h2>
              <p>
                Oshxonalarga tegishli biror orderslarini olish uchun uchun
                {""}
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
                      https://api.prounity.uz/food-delivery/orders/{"{id}"}
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
                        <span className="text-secondary mx-2"> 3</span>
                        {"   "}
                        <span className="p">
                          &quot;id&quot;: <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span className="p">
                          &quot;klient&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;delivery&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;status&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 6</span>
                        {"   "}
                        <span className="p">&quot;foods&quot;: {"{"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 8</span>
                        {"     "}
                        <span>
                          &quot;additionalProp1&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 9</span>
                        {"     "}
                        <span>
                          &quot;additionalProp2&quot;:{" "}
                          <span className="s2">&quot;string&quot;</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 9</span>
                        {"     "}
                        <span>
                          &quot;additionalProp3&quot;:{" "}
                          <span className="s2">&quot;string&quot;</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">{"}"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;kitchen&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;is_delivery&quot;:{" "}
                          <span className="bool">boolean</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;is_active&quot;:{" "}
                          <span className="bool">boolean</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;address&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;latitude&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;longitude&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;total_price&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;create_at&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;updated_at&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        <span className="p">,</span>
                        {"\n"} <span className="text-secondary mx-2">27</span>
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
          {/*  orders Update */}
          <div className="row pb-5 create-user px-2 px-lg-5 mx-lg-5 ">
            <div className="col-xl-6">
              <h2 className="fs-3 my-md-4 text-primary" id="update-orders">
                Get Update
              </h2>
              <p>
                Oshxonalarga tegishli biror orderslarini olish uchun uchun
                {""}
                <code>GET</code> so&apos;rovidan foydalaniladi.
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    klient :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    delivery :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    status :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    foods :<code>{"{additionalProp1: string}"}</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    kitchen :<code>number</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    is_delivery :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    is_active :<code>boolean</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    address :<code>string</code>
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    total_price :<code>number</code>
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
                      <span className="text-success">
                        <code className="bg-primary text-light">GET</code>
                      </span>
                    </pre>
                  </div>
                  <div className="pre-code-block p-1">
                    <pre className="chroma">
                      <span className="text-secondary mx-2">1</span>
                      Foods/ Get All
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/orders/{"{id}"}
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
                        <span className="text-secondary mx-2"> 3</span>
                        {"   "}
                        <span className="p">
                          &quot;id&quot;: <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 4</span>
                        {"   "}
                        <span className="p">
                          &quot;klient&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;delivery&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;status&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 6</span>
                        {"   "}
                        <span className="p">&quot;foods&quot;: {"{"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 8</span>
                        {"     "}
                        <span>
                          &quot;additionalProp1&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 9</span>
                        {"     "}
                        <span>
                          &quot;additionalProp2&quot;:{" "}
                          <span className="s2">&quot;string&quot;</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 9</span>
                        {"     "}
                        <span>
                          &quot;additionalProp3&quot;:{" "}
                          <span className="s2">&quot;string&quot;</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">{"}"}</span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;kitchen&quot;:{" "}
                          <span className="num">number</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;is_delivery&quot;:{" "}
                          <span className="bool">boolean</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;is_active&quot;:{" "}
                          <span className="bool">boolean</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;address&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;latitude&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;longitude&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;total_price&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;create_at&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        {"\n"}
                        <span className="text-secondary mx-2"> 5</span>
                        {"   "}
                        <span className="p">
                          &quot;updated_at&quot;:{" "}
                          <span className="s2">string</span>
                        </span>
                        <span className="p">,</span>
                        {"\n"} <span className="text-secondary mx-2">27</span>
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
    </HrmsDocumentationLayout>
  );
};

export default Orders;
