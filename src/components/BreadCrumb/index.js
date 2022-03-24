import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react'

const BreadCrumb = () => {
    return (
        <Breadcrumb>
            <BreadcrumbItem href='#'>Digital</BreadcrumbItem>
            <BreadcrumbItem href="#">Healthcare</BreadcrumbItem>
        </Breadcrumb>
    );
}

export default BreadCrumb;