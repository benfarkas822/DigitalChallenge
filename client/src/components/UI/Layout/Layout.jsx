import React from 'react';

const Layout = ({children}) => {
    return (
        <div className={"min-h-screen flex items-center justify-center bg-slate-50"}>
            {children}
        </div>
    );
};

export default Layout;
