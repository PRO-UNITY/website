import { useState } from "react";
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
      title: t("products.product-clinic-app.title"),
      description: t("products.product-clinic-app.description"),
      path: "/products/clinic-app",
    },
    {
      id: 4,
      title: t("products.product-chat-app.title"),
      description: t("products.product-chat-app.description"),
      path: "/products/chat-app",
    },
    {
      id: 5,
      title: t("products.product-todo.title"),
      description: t("products.product-todo.description"),
      path: "/products/todo-app",
    },
    {
      id: 6,
      title: t("products.product-spa-app.title"),
      description: t("products.product-spa-app.description"),
      path: "/products/spa-app",
    },
    {
      id: 7,
      title: t("products.product-authentication.title"),
      description: t("products.product-authentication.description"),
      path: "/products/authentication",
    },
    {
      id: 8,
      title: t("products.product-store.title"),
      description: t("products.product-store.description"),
      path: "/products/store",
    },
  ];

  const [expanded, setExpanded] = useState(false);

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
            <ul className={`p-0 ${expanded ? "expanded" : ""}`}>
              {products.map((item, i) => (
                <li key={item.id} className={"fade-in"}>
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
                      <p>
                        {item.description.slice(0, 140)}
                        ....
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div className="loading">
            <div className="line-box"></div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          {expanded ? (
            <button
              className="btn show-more"
              onClick={() => setExpanded(false)}
            >
              Show less
            </button>
          ) : (
            <button className="btn show-more" onClick={() => setExpanded(true)}>
              Show more
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
