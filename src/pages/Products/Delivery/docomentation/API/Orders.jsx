import { useContext } from "react";
import DeliveryDocumentationLayout from "../../../../../Layout/DeliveryDocumentationLayout";
import Asaide from "../Asaide";
import CodeFormat from "../components/Code-format";
import { orders } from "./Data";
import { AsideScrollActive } from "../../../../../context/AsideScrollActive";

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
  const { activeSection } = useContext(AsideScrollActive);
  return (
    <DeliveryDocumentationLayout>
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
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="all-orders"
              >
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
                      Orders/ Get All
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
                    <CodeFormat JsonData={orders.AllOrderSucces} />
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
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="create-orders"
              >
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
                      Orders/ Create order
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/orders/
                    </pre>
                  </div>
                </div>
                <CodeFormat JsonData={orders.OrderIDSucces} />
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
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="orders-id"
              >
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
                      Orders/ Get Id
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
                      <CodeFormat JsonData={orders.OrderIDSucces} />
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
              <h2
                data-section
                className="fs-3 my-md-4 text-primary"
                id="update-orders"
              >
                Order Update
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
                      Orders/ Update order
                      {"\n"}
                      <span className="text-secondary mx-2">2</span>URL =
                      https://api.prounity.uz/food-delivery/orders/{"{id}"}
                    </pre>
                  </div>
                </div>
                <div className="box">
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
                      <CodeFormat JsonData={orders.OrderIDSucces} />
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
        <Asaide Sidenavs={AsaideNavs} scrollActive={activeSection} />
      </div>
    </DeliveryDocumentationLayout>
  );
};

export default Orders;
