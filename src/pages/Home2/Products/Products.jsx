import Layout2 from "../../../Layout/Layout2";
import "./Products.css";
import Hrms from "../../../assets/HRMS-Landing-Banner.png";
import Delivery from "../../../assets/delivery-removebg-preview-transformed.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    img: Hrms,
    name: "Hrms",
    path: "/home2/products2/hrms",
    desc: "Elevate your organizational efficiency with our cutting-edge HRMS application. Streamline HR processes, empower your workforce, and embrace a new era of seamless management. Explore the future of workforce optimization with our innovative solution",
  },
  {
    id: 2,
    img: Delivery,
    name: "Delivery",
    path: "/home2/products2/delivery",
    desc: "Hello there! Experience lightning-fast, hassle-free, and reliable delivery with our services. Whether it's gourmet meals, special orders, or anything in between, we ensure prompt and trustworthy delivery to your doorstep. Place an order now and start enjoying the convenience! 🚚🌟.",
  },
];
const Products = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <div className="products2 py-4">
        <div className="container">
          <h1 className="title mt-3">Our Products</h1>
          <div className="products-cards">
            <div className="d-flex  flex-column  flex-lg-row gap-4   py-3">
              {servicesData.map((item) => (
                <div className="products-card h-100" key={item.id}>
                  <div className="card-head  d-flex justify-contant-start">
                    <img src={item.img} alt="" className="" />
                  </div>
                  <div className="card-content  pt-3">
                    <h2 className=" font-primary text-primary fw-semibold">
                      {item.name}
                    </h2>
                    <p className=" text-secondary">{item.desc}</p>
                  </div>
                  <Link to={item?.path} className="btn btn-gold ">
                    See More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Products;
