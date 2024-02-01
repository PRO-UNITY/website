import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./Products.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const products = [
    {
      id: 1,
      title: t("products.product-hrms.title"),
      description: t("products.product-hrms.description"),
      path: "/products/hrms",
    },
    {
      id: 2,
      title: t("products.product-delivery.title"),
      description: t("products.product-delivery.description"),
      path: "/products/delivery",
    },
    {
      id: 3,
      title: t("products.clinic-app.title"),
      description: t("products.clinic-app.description"),
      description2: t("products.clinic-app.description2"),
      path: "/products/clinic",
    },
    {
      id: 4,
      title: t("products.product-chat-app.title"),
      description: t("products.product-chat-app.description"),
      path: "/products/chat-app",
    },
  ];
  return (
    <Layout title={"ProUnity | Products"}>
      <div className="py-5 products">
        <div className="row px-md-5 h-100 m-0">
          <div className="col-lg-5">
            <div className="d-flex  px-4 px-md-5 text-light flex-column justify-content-center h-100">
              <h1 className="section-title">{t("products.title")}</h1>
              <p className="page-decription mt-3">{t("products.desciption")}</p>
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
                      <p>{item.description.slice(0, 140)}....</p>
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
