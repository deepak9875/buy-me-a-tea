import React from "react";
import PayTab from "./PayTab";

const HomeTab = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <p className="extra">FEATURED EXTRA</p>
                        <div className=" d-lg-flex  justify-content-between">
                            <div className="p-24 ">
                                <p className="free_chai text-center text-lg-start">FREE chai recipe e-book</p>
                                <p className="chai_homemade text-center text-lg-start">5 Authentic, homemade, chai...</p>
                                <button className="free_btn d-none d-lg-block">Free</button>
                            </div>
                            <div className="d-flex  d-lg-block justify-content-center">
                                <img className="h-200" src="/img/tea-3.png" alt="" />
                            </div>
                            <div className="mt-4 mt-lg-0 d-flex d-lg-block justify-content-center">
                                <button className="free_btn d-lg-none d-block">Free</button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="col-lg-4">
                        <PayTab />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTab;
