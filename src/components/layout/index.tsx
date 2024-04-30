import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type PropsType = {
    children: React.ReactNode;
};

const Layout = (props: PropsType) => {
    return (
        <div>
            <Header />
            <div className="flex w-full">
                <div className="w-full">{props.children}</div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;
