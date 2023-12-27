import Layout2 from "../../../Layout/Layout2";
import "./Services.css";
import backendIcon from "../../../assets/backend-development-icon-style-vector-removebg-preview.png";
import dataScienceIcon from "../../../assets/data-science-icon-style-vector-removebg-preview.png";
import designIcon from "../../../assets/295-2951395_digital-aura-creative-media-rh-auracreativemedia-co-website-designing-icon-png-removebg-preview.png";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/6352/6352331.png",
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
    img: "https://cdn3.iconfinder.com/data/icons/flat-round-1/50/64-512.png",
    name: "Architect",
    desc: "An architect is a person who plans, designs and oversees the construction of buildings.[1] To practice architecture means to provide services in connection with the design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose",
  },
];
const Services = () => {
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
