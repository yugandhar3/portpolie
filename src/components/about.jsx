import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>Experienced Full Stack Developer with 4 years of expertise in JavaScript,
                                                React.js, Node.js, Next.js, Vue.js, MongoDB, Express.js, and AWS. Proven track
                                                record of delivering scalable solutions on time and within budget. Strong
                                                communicator and team player, dedicated to staying updated with industry
                                                trends.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Frontend Development </h3>
                                        <p style={{ textAlign: 'justify' }}>I specialize in dynamic websites with JavaScript, TypeScript, React, and CSS frameworks like Bootstrap and Tailwind CSS. Experienced in Next.js, Vue.js, and crafting engaging Chrome extensions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Backend Development</h3>
                                        <p style={{ textAlign: 'justify' }}>Proficient in Node.js, Express, Nest.js, and Socket.io, I specialize in backend development. Leveraging databases like MongoDB, PostgreSQL, TypeORM, Prisma, and Redis, I create robust server-side solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Dev Ops</h3>
                                        <p style={{ textAlign: 'justify' }}>Experienced in AWS deployment and service integration, including S3, SES, and CloudFront. Currently learning AWS Lambda, load balancers, Docker, and CI/CD pipelines for efficient development.</p>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
