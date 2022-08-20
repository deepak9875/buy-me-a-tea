import React from "react";
import { Members } from "../help";
const PayTab = () => {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="membership"
                        data-bs-toggle="tab"
                        data-bs-target="#membership-pane"
                        type="button"
                        role="tab"
                        aria-controls="membership-pane"
                        aria-selected="true"
                    >
                        Membership
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="support-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#support-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="support-tab-pane"
                        aria-selected="false"
                    >
                        Support
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="membership-pane" role="tabpanel" aria-labelledby="membership" tabIndex="0">
                    {Members.map((res, i) => {
                        <div key={i} className="pr_pl_32 pb_16 b_b_1">
                            <p className=" text-center common_para">{res.name}</p>
                            <p className=" text-center extra"> {res.limited}</p>
                            <p className=" text-center amount"> {res.amount} </p>
                            <p className=" text-center per_month">{res.month}</p>
                            <div className="d-flex justify-content-center">
                                <button className="btn_jion">Jion</button>
                            </div>
                            <div className="mt-4">
                                <p className="club_para">{res.discr}</p>
                                <ul>
                                    <li className="club_para">{res.list}</li>
                                    <li className="club_para">{res.list1}</li>
                                    <li className="club_para">{res.list2}</li>
                                    <li className="club_para">{res.list3}</li>
                                </ul>
                            </div>
                        </div>;
                    })}
                </div>
                <div className="tab-pane fade" id="support-tab-pane" role="tabpanel" aria-labelledby="support-tab" tabIndex="0">
                    ...
                </div>
            </div>
        </div>
    );
};

export default PayTab;
