import React from "react";
import './connectPages.css';

import DashPage from './userpage/dashboard';

import HomePage from './userpage/home';

function ConnectPageFunc() {

    return (
        <div className="connection-containers">

            <DashPage />
            {/*<HomePage />*/}
        </div>
    )
}

export default ConnectPageFunc;