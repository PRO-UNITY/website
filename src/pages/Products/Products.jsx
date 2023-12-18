import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const Products = () => {
  return (
    <Layout>
      <div className="vh-100 container-xxl py-5">
        <div className="d-flex gap-5 flex-wrap">
          <Link
            to={"/products/hrms"}
            className="card bg-primary  text-decoration-none border-0 p-4 text-light"
            style={{ width: "25rem" }}
          >
            <div className="card-head">
              <h1 className="text-center mb-3 mt-2">Hrms</h1>
            </div>
            <p>
              Elevate your organizational efficiency with our cutting-edge HRMS
              application. Streamline HR processes, empower ....
            </p>
          </Link>
          <Link
            to={"/products/delivery"}
            className="card bg-primary border-0 text-decoration-none  p-4 text-light"
            style={{ width: "25rem" }}
          >
            <div className="card-head">
              <h1 className="text-center  mb-3 mt-2">Delivery</h1>
            </div>
            <p>
              Elevate your organizational efficiency with our cutting-edge HRMS
              application. Streamline HR processes, empower ....
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
