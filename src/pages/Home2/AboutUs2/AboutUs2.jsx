import Layout2 from "../../../Layout/Layout2";
import TeamImg from "../../../assets/team1.jpg";
import TeamImg2 from "../../../assets/slide77.jpg";
import TeamImg3 from "../../../assets/grouplider2.jpg";
import dodBanner from "../../../assets/home2/dodPreview.webp";
import carrierImg from "../../../assets/group11.jpg";

import "./About2.css";
import { teamMembers } from "../../../constants";
import { Link } from "react-router-dom";
import YouTubePreview from "../../../components/YouTubePreview/YouTubePreview";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <div className="about2">
        <section>
          <div className="container-lg">
            <h1 className="section-title font-primary mt-3">
              About the School
            </h1>
            <div className="video-card  rounded my-5">
              <img src={dodBanner} alt="" />
              <YouTubePreview />
            </div>
            <div className="row mb-5 py-5">
              <div className="col-lg-6 d-flex">
                <div className="line me-lg-4"></div>
                <p className="ps-lg-5">
                  Elbrus Bootcamp was founded in 2018 by Georgiy Babayan. His
                  grandfather was a programmer who participated in the creation
                  of the Elbrus microprocessor, hence the name of the school.
                  Georgiy himself went through Dev Bootcamp in San Francisco in
                  2016, one of the oldest bootcamps in America. At that time,
                  this format of education was unheard of in Russia, while in
                  America, it was gaining popularity in the IT industry.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Bootcamp provided the opportunity to learn in 3-4 months what
                  previously took years, allowing individuals to acquire a new
                  profession and find a job. Upon his return, Georgiy decided to
                  implement a similar format of education in Russia in two
                  directions—JavaScript and Data Science. The first Elbrus
                  Bootcamp campus appeared in Moscow, followed by a branch in
                  St. Petersburg, and now you can also study online.
                </p>
              </div>
            </div>

            <div className="row team-img-box">
              <div className="col-lg-6">
                <img src={TeamImg3} alt="" className="w-100 rounded-3" />
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img src={TeamImg2} alt="" className="w-100 rounded-3" />
              </div>
              <div className="col-lg-6 my-5 d-flex">
                <div className="line me-4"></div>
                <p className="ms-lg-5">
                  The school is staffed by practicing programmers and
                  developers. Each group has its mentors and assistants who help
                  with any questions. One of the key values of Elbrus Bootcamp
                  is the growth mindset: teachers and Bootcamp staff constantly
                  learn and develop to share the most up-to-date knowledge with
                  students.
                </p>
              </div>
            </div>
            <div className="statistics">
              <div className="  d-flex justify-content-center justify-content-lg-end  mt-4   flex-wrap gap-5">
                <div className="box">
                  <h3 className="font-primary fw-bold">2052</h3>
                  <p>students graduated in 5 years</p>
                </div>
                <div className="box">
                  <h3 className="font-primary fw-bold">86%</h3>
                  <p>of students find jobs within 3 months</p>
                </div>
              </div>
              <div className="">
                <img className="banner" src={TeamImg} alt="" />
                <div className="row my-5">
                  <div className="col-lg-6 d-flex">
                    <div className="line me-4"></div>
                    <p className="ms-lg-5">
                      Students choose Elbrus Bootcamp for predictable results,
                      as the school&apos;s main goal is the employment of
                      graduates. Thus, each student has three portfolio projects
                      before graduation: individual, group, and a project from a
                      real customer. After completing the course, all students
                      participate in a series of group and individual sessions
                      with career coaches. Thanks to this approach, 93% of
                      graduates find a job within three months after the
                      courses.
                    </p>
                  </div>
                  <div className="col-lg-6 px-lg-5">
                    <p>
                      Elbrus Bootcamp is a strong supporting community, where
                      people continue to communicate even after graduation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="team">
              <h2 className="title text-center text-lg-start text-dark">
                Team
              </h2>
              <div className="row py-4">
                {teamMembers.map((item) => (
                  <div className="col-lg-3" key={item.id}>
                    <div className="card border-0">
                      <div className="card-head">
                        <img src={item.image} alt="" className="w-100" />
                        <div className="card-content ">
                          <p className="name my-2">{item.name}</p>
                          <p className="occupation">{item.occupation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="admission-criteria">
              <h2 className="title text-dark">Admission Criteria</h2>
              <div className="row my-5">
                <div className="col-lg-6 d-flex">
                  <div className="line me-4"></div>
                  <p className="ms-lg-5">
                    To enroll in Elbrus Bootcamp, you don&apos;t need to have
                    programming experience or a mathematical mindset. It&apos;s
                    enough to have the desire to gain a new profession and be
                    ready to learn a large amount of new information.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Before admission, future programmers undergo a technical
                    interview. This is necessary for students to understand what
                    they will be working on in the coming months and to confirm
                    the seriousness of their intentions. Our curators will tell
                    you how to prepare for it and provide all the necessary
                    materials that can and should be used for preparation.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="title text-dark mb-5">Career</h2>
              <div className="banner">
                <img src={carrierImg} alt="" className="w-100 carrier-img" />
              </div>
              <div className="row py-5">
                <div className="col-lg-6 d-flex">
                  <div className="line me-4"></div>
                  <p className="ms-lg-5">
                    Career coaches at Elbrus Bootcamp help create a strong
                    resume, improve soft skills, and learn how to pass
                    interviews to land the job of their dreams.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Our graduates work in major companies such as Ozon, Finam,
                    MTS, VK, and Sber.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row   gap-4 pb-5">
                <Link
                  to={"/home2/services"}
                  className="btn btn-outline-dark fs-6 px-md-5 py-2 py-md-3 rounded-4 border-2 "
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default AboutUs;
