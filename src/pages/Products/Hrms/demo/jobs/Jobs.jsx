import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, getJobs, getData } from "../../service";
import './Jobs.css'

const Jobs = () => {
    const [jobs, setJobs] = React.useState([]);
    const [jobCategories, setJobCategories] = React.useState([]);
    const [isBlockVisible, setIsBlockVisible] = useState(window.innerWidth > 768);

    useEffect(() => {
        getJobs().then((res) => {
            console.log(res);
            setJobs(res.data);
        })
    }, [])

    useEffect(() => {
        getData('/job/categories').then((res) => {
            console.log(res);
            setJobCategories(res);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }, [])




    const toggleBlockVisibility = () => {
        setIsBlockVisible(!isBlockVisible);
    };

    return <div className="d-flex flex-column gap-5">
        <div>
            <nav class="p-3 navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Navbar</span>

            </nav>
        </div>

        <div class="container mt-5 text-center d-flex gap-3 flex-column align-items-center">
            <h1 className="display-1">The #1 job board for <br /> graphic design jobs</h1>
            <p className="lead">
                Dribbble is the heart of the design community and the best resource <br /> to discover and connect with designers and jobs worldwide.
            </p>
            <button className="d-flex align-items-center gap-2 btn btn-dark p-3 rounded-5">
                <i class="fa-solid fa-plus"></i>
                Post a job
            </button>
            <p className="text-muted">Just $25/week (billed monthly)</p>
        </div>

        <div className="container d-flex flex-column gap-4 mt-5">

            <div className="d-flex gap-2">
                <button className="btn btn-secondary rounded-5 px-3">Job Board</button>
                <button className="btn btn-outline-secondary rounded-5 px-3">Designer Search</button>
            </div>


            <div className="d-flex gap-5">
                <div className="d-flex flex-column col-9 gap-4">
                    <div class="form-group has-search">
                        {/* <span class="fa fa-search form-control-feedback"></span> */}
                        <input type="text" class="form-control p-2 rounded-3" placeholder="Search by company, skill, tag..." />
                    </div>

                    <h2>Recent posts</h2>

                    <div className="d-flex flex-column gap-3">

                        {
                            jobs?.results?.map((job) => (
                                <Link style={{ textDecoration: 'none' }}>
                                    <div class="card" key={job.id}>
                                        <div class="card-body d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center gap-3">
                                                <img style={{ width: '70px', height: '70px' }} class="card-img-top" src={`${BASE_URL}${job.company.logo}`} alt="Card image cap" />
                                                <div>
                                                    <p class="card-text text-muted">{job.company.name}</p>
                                                    <p class="card-title">{job.description}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-5 justify-content-center">
                                                <div>
                                                    <p className='card-text'>Location: <span className="text-primary">{job.company.countries.name}</span></p>
                                                    <p className="card-title text-muted">Posted {job.created_at}</p>
                                                </div>
                                                <div className="d-flex flex-column gap-1 justify-content-center">
                                                    <Link to={`/products/hrms/demo/job-details/${job.id}`}>
                                                        <button className="btn btn-light w-100">View Job</button>
                                                    </Link>
                                                    <button className="btn btn-light">Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <div className={`desktop d-flex col-3 flex-column gap-4 `}>
                    <div class="card p-4 rounded-4">
                        <div class="card-body">
                            <p class="card-title ">Specialties</p>
                            <div className="d-flex flex-column gap-2">
                                {
                                    jobCategories?.map((category) => (
                                        <div className="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id={category.id} />
                                            <label class="form-check-label text-secondary" for="flexCheckDefault">
                                                {category.tag}
                                            </label>
                                        </div>
                                    ))}
                                <hr />
                                <h5 class="card-title">Location</h5>
                                <input type="text" class="form-control py-2 rounded-3" placeholder="Enter location..." />
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-secondary" for="flexCheckDefault">
                                        Open to remote
                                    </label>
                                </div>
                                <hr />
                                <button className="btn btn-secondary mt-2 rounded-5 p-2">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Jobs;
