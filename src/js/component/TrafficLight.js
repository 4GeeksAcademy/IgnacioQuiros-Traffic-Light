import React, { useState } from "react";
import Light from "./Light";

const TrafficLight = () => {
    //Logic JS
    const [activeLight, setActiveLight] = useState(null);

    const handleLightClick = (color) => {
        setActiveLight(color); 
    };

    return (
        <div className="background-opacity pb-5">
            <div className="content container-fluid d-flex justify-content-center">
                <div className="d-flex justify-content-center bg-dark mb-n4 fs-1 icon-Top border border-dark border-4"></div>
            </div>
            <div className="content container-fluid d-flex justify-content-center mb-4">
                <div className="bg-dark p-4 rounded rounded-4 border border-secondary border-4">
                    <div className="align-items-center">
                        <div className="col-4 my-2">
                            <Light color="red" isActive={activeLight === "red"} onClick={() => handleLightClick("red")} />
                        </div>
                        <div className="col-4 my-5">
                            <Light color="yellow" isActive={activeLight === "yellow"} onClick={() => handleLightClick("yellow")} />
                        </div>
                        <div className="col-4 my-2">
                            <Light color="green" isActive={activeLight === "green"} onClick={() => handleLightClick("green")} />
                        </div>
                        <i className="icon-right rounded-2 ms-5"></i><br /><i className="icon-right rounded-2 ms-5"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight