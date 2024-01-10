import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import "./Products.css";
const products = [
  {
    id: 1,
    title: "Hrms",
    description:
      "Elevate your organizational efficiency with our cutting-edge HRMS application. Streamline HR processes, empower ....",
    path: "/products/hrms",
  },
  {
    id: 2,
    title: "Delivery",
    description:
      " Hello there! Experience lightning-fast, hassle-free, and reliable delivery with our services. Whether it's gourmet ...",
    path: "/products/hrms",
  },
];

const Products = () => {
  return (
    <Layout title={"ProUnity | Products"}>
      <div className="py-5 products">
        <div className="row px-md-5 h-100">
          <div className="col-lg-5">
            <div className="d-flex  px-4 px-md-5 text-light flex-column justify-content-center h-100">
              <h1 className="section-title  ">Our Products</h1>
              <p className="page-decription  mt-3">
                Welcome to the ProUnity company&apos;s products page! Explore
                our range of products and discover tailored solutions designed
                to meet the demands and inquiries of anyone. Navigate through
                our page to find our top-notch products and get acquainted with
                the latest features and advantages consistently integrated into
                our solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-7 d-flex px-4 px-md-5 align-items-center h-100">
            <ul className="p-0">
              {products.map((item, i) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="list-item text-decoration-none text-light"
                  >
                    <div className=" number rounded-circle border ">
                      {i + 1}
                    </div>
                    <div className="">
                      <div className="card-head">
                        <h1 className="">{item.title}</h1>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
