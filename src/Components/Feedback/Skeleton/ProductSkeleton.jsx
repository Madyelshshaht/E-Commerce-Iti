import React from "react"
import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => {
    const rendderSkeletons = Array(4)
        .fill(0)
        .map((_, index) => (
            <Col
                key={index}
                lg={3}
                md={4}
                xs={6}
                className="d-flex justify-content-center mb-5 mt-2"
            >
                <ContentLoader
                    speed={2}
                    width={500}
                    height={460}
                    viewBox="0 0 500 460"
                    backgroundColor="#dedede"
                    foregroundColor="#afafaf"
                >
                    <rect x="28" y="0" rx="5" ry="5" width="280" height="305" />
                    <rect x="40" y="350" rx="4" ry="4" width="250" height="10" />
                    <rect x="40" y="330" rx="4" ry="4" width="250" height="10" />
                    <rect x="35" y="390" rx="8" ry="8" width="270" height="35" />
                </ContentLoader>
            </Col>
        ));

    return (
        <Row>{rendderSkeletons}</Row>
    )


}

export default ProductSkeleton;