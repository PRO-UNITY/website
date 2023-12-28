import Layout2 from "../../../Layout/Layout2";
import "./Services.css";
import webIcon from "../../../assets/web-dew.png";
import backendIcon from "../../../assets/backend-dev.png";
import dataScienceIcon from "../../../assets/data-science.png";
import architecIcon from "../../../assets/architec.png";
import designIcon from "../../../assets/design.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    img: webIcon,
    name: "Web Developement",
    path: "/home2/services-detail",
    desc: "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.",
  },
  {
    id: 2,
    img: backendIcon,
    name: "Backend Developement",
    desc: "Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.",
  },
  {
    id: 3,
    img: dataScienceIcon,
    name: "Data Science",
    desc: "Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.",
  },
  {
    id: 4,
    img: designIcon,
    name: "Web and Graphic design",
    desc: "Web design is creating a design for the web and online use, while graphic design is primarily designed for print. Graphic design doesn't have to know about programming, speed, and other technical matters involved with web design.",
  },
  {
    id: 5,
    img: architecIcon,
    name: "Architect",
    desc: "An architect is a person who plans, designs and oversees the construction of buildings.[1] To practice architecture means to provide services in connection with the design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose",
  },
];
const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <div className="services-2 py-4">
        <div className="container">
          <h1 className="title mt-3">Our Services</h1>
          <div className="services-cards">
            <div className="row gap-4  gap-lg-0 py-3">
              {servicesData.map((item) => (
                <div className="col-lg-4 mt-4" key={item.id}>
                  <Link to={item?.path} className="text-decoration-none">
                    <div className="services-card h-100">
                      <div className="card-head  d-flex justify-contant-center">
                        <img src={item.img} alt="" className="mx-auto" />
                      </div>
                      <div className="card-content text-center pt-3">
                        <h3 className=" font-primary fw-semibold">
                          {item.name}
                        </h3>
                        <p className=" text-secondary">{item.desc}</p>
                      </div>
                    </div>
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

export default Services;
