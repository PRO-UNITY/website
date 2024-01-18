import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";

const Advertise = () => {
  const { t } = useTranslation();
  return (
    <Layout title={"ProUnity | Advertise"}>
      <div className="license pro-bg-primary">
        <div className="container-lg  py-5">
          <h1 className="section-title text-light">{t("Advertise.title")}</h1>
          <div className="mt-5 license-content">
            <p
              className="text-light fs-5"
              dangerouslySetInnerHTML={{
                __html: t("Advertise.text"),
              }}
            ></p>
          </div>
          <form className="text-white mt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group ">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Last Name</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4">
                <div className="form-group ">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Company name</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Company name"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-8">
                <div className="form-group ">
                  <label htmlFor="exampleInputEmail1">Website Url</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Website Url"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Advertise;
