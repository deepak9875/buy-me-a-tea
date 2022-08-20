import React from "react";
import { Image } from "next/image";
import Tabs from "./Tabs";
const Hero = () => {
    return (
        <div className="bg-img">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center mt-123">
                            <img className="img-width" src="/img/tea-2.webp" alt="" />
                        </div>
                        <div>
                            <p className="text-center rohit_name">Rohit kumar</p>
                            <p className="text-center cup_tea">is telling stories over a cup of chai</p>
                            <p className="text-center support">1596 supporters</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <Tabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
