import React, { Component } from "react";
import { searchUserID } from "../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const style = {
    backgroundImage: `url("/images/hero_1.jpg")`
};

const style1 = {
    width: 100
};

class SingleUser extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const bindval = {
            id: this.props.match.params.userid
        };
        this.props.searchUserID(bindval);
    }
    render() {
        const job = this.props.user;
        console.log(job);
        return (
            <div>
                <section
                    className="section-hero overlay inner-page bg-image"
                    style={style}
                    id="home-section"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="text-white font-weight-bold">
                                    {job.firstName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div className="border p-2 d-inline-block mr-3 rounded">
                                        {/* <img
                                            src={`${job.photo}`}
                                            style={style1}
                                            alt="Free Website Template By Free-Template.co"
                                        /> */}
                                        {job.photo == null ? (
                                            <img
                                                src="/images/download.png"
                                                style={style1}
                                                alt="Free Website Template By Free-Template.co"
                                            />
                                        ) : (
                                            <img
                                                src={`${job.photo}`}
                                                style={style1}
                                                alt="Free Website Template By Free-Template.co"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <h2>{job.firstName}</h2>
                                        <div>
                                            <span className="ml-0 mr-2 mb-2">
                                                <span className="icon-briefcase mr-2" />
                                                {job.email}
                                            </span>
                                            <span className="m-2">
                                                <span className="icon-room mr-2" />
                                                {job.city}
                                            </span>
                                            <span className="m-2">
                                                <span className="icon-clock-o mr-2" />
                                                <span className="text-primary">
                                                    {job.gender}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-12">
                                        <Link
                                            to=""
                                            className="btn btn-block btn-light btn-md"
                                        >
                                            <span className="icon-heart-o mr-2 text-danger" />
                                            Resume
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    {/* <figure className="mb-5">
                                        <img
                                            src="images/job_single_img_1.jpg"
                                            alt="Free Website Template by Free-Template.co"
                                            className="img-fluid rounded"
                                        />
                                    </figure> */}
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Description
                                    </h3>
                                    <p>{job.description}</p>

                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Educational Detail
                                    </h3>
                                    <div className="mb-2">
                                        <strong className="text-black">
                                            Degree name:
                                        </strong>{" "}
                                        {job.degreename}
                                    </div>
                                    <div className="mb-2">
                                        <strong className="text-black">
                                            Institute name:
                                        </strong>{" "}
                                        {job.instituteName}
                                    </div>
                                    <div className="mb-2">
                                        <strong className="text-black">
                                            CGPA:
                                        </strong>{" "}
                                        {job.cgpa}
                                    </div>

                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Experience Detail
                                    </h3>
                                    <div className="mb-2">
                                        <strong className="text-black">
                                            Company name:
                                        </strong>{" "}
                                        {job.companyName}
                                    </div>
                                    <div className="mb-2">
                                        <strong className="text-black">
                                            Position:
                                        </strong>{" "}
                                        {job.position}
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-12">
                                        <Link
                                            to={`${job.resume}`}
                                            className="btn btn-block btn-light btn-md"
                                        >
                                            <span className="icon-heart-o mr-2 text-danger" />
                                            Resume
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-light p-3 border rounded mb-4">
                                    <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                                        User Summary
                                    </h3>
                                    <ul className="list-unstyled pl-3 mb-0">
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Email:
                                            </strong>{" "}
                                            {job.email}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Gender
                                            </strong>{" "}
                                            {job.gender}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Contact Number:
                                            </strong>{" "}
                                            {job.contactNo}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                User Name:
                                            </strong>{" "}
                                            {job.userName}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                City:
                                            </strong>{" "}
                                            {job.city}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Country:
                                            </strong>{" "}
                                            {job.country}
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-light p-3 border rounded">
                                    <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                                        Share
                                    </h3>
                                    <div className="px-3">
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-facebook" />
                                        </a>
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-twitter" />
                                        </a>
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-linkedin" />
                                        </a>
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-pinterest" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { searchUserID }
)(SingleUser);
