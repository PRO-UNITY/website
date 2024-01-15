import Layout from "../../Layout/Layout";
import "./HeroWidgets.css";
import StudentData from "./Students.json";
const Students = () => {
  return (
    <Layout>
      <div className="py-5 pro-bg-primary students">
        <div className="px-md-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="display-3 fw-semibold text-white">Students</h1>
          </div>
          <div className="table-responsive container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {StudentData.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Students;
