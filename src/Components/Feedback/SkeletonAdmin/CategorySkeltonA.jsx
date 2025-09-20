import React from "react"
import { Row , Col } from "react-bootstrap"
import ContentLoader from "react-content-loader"

const CategorySkeletonA = () => {
    const rendderSkeletons = Array(4)
        .fill(0)
        .map((_, index) => (
            <Col
                key={index}
                lg={6}
                md={6}
                xs={12}
                className="d-flex justify-content-center "
            >
                <ContentLoader
                    speed={2}
                    width={500}
                    height={460}
                    viewBox="0 0 500 460"
                    backgroundColor="#bebdc2"
                    foregroundColor="#e3e3e3"
                >
                    <rect x="7" y="146" rx="2" ry="2" width="200" height="200" />
                    <rect x="250" y="230" rx="2" ry="2" width="120" height="30" />
                    <rect x="430" y="200" rx="2" ry="2" width="58" height="32" />
                    <rect x="430" y="260" rx="2" ry="2" width="58" height="32" />
                </ContentLoader>
            </Col>
        ));

    return (
        <Row>
            {rendderSkeletons}
        </Row>
    )
}

export default CategorySkeletonA;