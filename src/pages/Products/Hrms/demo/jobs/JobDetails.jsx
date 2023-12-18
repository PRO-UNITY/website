import React from "react";

const JobDetails = () => {
    return <div className="d-flex flex-column gap-5">

        <div>
            <nav class="p-3 navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Navbar</span>
            </nav>
        </div>

        <div className="container d-flex">
            <div className="col-9">
                <div class="container mt-5 d-flex flex-column">
                    <p className="lead">
                        Job Details
                    </p>
                    <h3 className="display-5">Founding Product Designer (UI/UX)</h3>
                </div>

                <div className="d-flex mt-5 w-75 flex-column gap-2">
                    <p className="h3">About getitAI:</p>
                    <p>
                        Join getitAI, a trailblazer in human-centric commerce, where we're transforming the way buyers are engaged online through our autonomous AI Sellers. Watch an investor video we made: https://go.getit.ai/pier39-pitch
                    </p>
                    <p>
                        We're on the lookout for an inventive Founding Product Designer who is ready to embark on a journey that blends creativity with cutting-edge AI technology. This is your chance to influence not just our AI Sellers, but the entire brand and customer-facing applications.
                    </p>
                </div>

                <div className="d-flex mt-5 flex-column gap-2">
                    <p className="h3">Role Overview:</p>
                    <p>
                        As our first designer, working directly with the founders your role will extend beyond shaping the UI/UX of our AI Sellers. You'll be instrumental in designing our brand identity, design systems, and customer-facing applications. This role is initially a part-time, contract position but should then evolve into a full-time position complemented by equity, reflecting your foundational contribution to our company’s growth.
                    </p>
                </div>

                <div className="d-flex mt-5 flex-column gap-2">
                    <p className="h3">What You’ll Do:</p>
                    <ul className="d-flex flex-column gap-2" style={{ listStyle: 'outside' }}>
                        <li>Work alongside our founders to create a cohesive and appealing design language for our brand and various applications, focusing on creating an intuitive and engaging user experience.</li>
                        <li>Lead the design process from concept to execution, including wire-framing, prototyping, and iterating based on feedback.</li>
                        <li>Innovate and push boundaries in UI/UX design, ensuring our products stand out in the market.</li>
                        <li>Establish and maintain a consistent, engaging design across all platforms and customer touchpoints.</li>
                    </ul>
                </div>

                <div className="d-flex mt-5 flex-column gap-2">
                    <p className="h3">Who You Are:</p>
                    <ul className="d-flex flex-column gap-2" style={{ listStyle: 'outside' }}>
                        <li>Work alongside our founders to create a cohesive and appealing design language for our brand and various applications, focusing on creating an intuitive and engaging user experience.</li>
                        <li>Lead the design process from concept to execution, including wire-framing, prototyping, and iterating based on feedback.</li>
                        <li>Innovate and push boundaries in UI/UX design, ensuring our products stand out in the market.</li>
                        <li>Establish and maintain a consistent, engaging design across all platforms and customer touchpoints.</li>
                    </ul>
                </div>

                <div className="d-flex mt-5 flex-column gap-2">
                    <p className="h3">How to Apply:</p>
                    <p>
                        At getitAI, we value diversity and the richness it brings to our team. If you're excited about defining the future of AI-driven commerce and are ready for a challenging yet rewarding role, we'd love to hear from you.
                    </p>
                </div>

                <div className="d-flex mt-5 flex-column gap-2">
                    <p className="h3">What We Offer:</p>
                    <ul className="d-flex flex-column gap-2" style={{ listStyle: 'outside' }}>
                        <li>Work alongside our founders to create a cohesive and appealing design language for our brand and various applications.</li>
                        <li>Lead the design process from concept to execution, including wire-framing, prototyping, and iterating based on feedback.</li>
                        <li>Innovate and push boundaries in UI/UX design, ensuring our products stand out in the market.</li>
                        <li>Establish and maintain a consistent, engaging design across all platforms and customer touchpoints.</li>
                    </ul>
                </div>

                <br />
                <button className="btn btn-dark rounded-5 p-2">Apply for this position</button>
            </div>
            <div className="col-3 mt-5 mx-5">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center gap-2 text-center">
                            <img style={{ width: 65 }} class="card-img-top rounded-5" src="https://pbs.twimg.com/profile_images/1673292360568958978/Xe543-4D_400x400.jpg" alt="Card image cap" />
                            <h5 className="card-title">GetAi</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Visit Website</h6>
                            <button className="btn btn-dark rounded-5">Apply for this position</button>
                        </div>
                        <hr />
                        <div className="d-flex flex-column gap-3">
                            <div>
                                <span>Job Type</span>
                                <h5 className="text-dark mt-2">Freelance</h5>
                            </div>
                            <div>
                                <span>Location</span>
                                <h5 className="text-dark mt-2">Remote</h5>
                                <h5 className="text-dark mt-2">Remote Friendly</h5>
                            </div>
                            <div>
                                <span>Date posted</span>
                                <h5 className="text-dark mt-2">Dec 17, 2023</h5>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-5 p-1">
                    <div>
                        <h5>You might also like</h5>
                        <span>UX Design / Research Jobs</span>
                        <p className="mt-1">Remote UX Design</p>
                    </div>

                    <div>
                        <h5>Are you also hiring?</h5>
                        <span >Hire UX Designers</span>
                        <p className="mt-1">Hire Remote UX Designers</p>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};

export default JobDetails;
