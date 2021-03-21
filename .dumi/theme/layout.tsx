import React from 'react';
import Layout from 'dumi-theme-default/src/layout';
import './layout.less';

export default ({ children, ...props }) => {
    return (
        <>
            <Layout {...props}>{children}</Layout>
        </>
    );
};
