
import { Row, Col } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategoriesSkeleton = () => {
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
                    width={190}
                    height={200}
                    viewBox="0 0 190 200"
                    backgroundColor="#dedede"
                    foregroundColor="#fafafa"
                >
                    <circle cx="96" cy="89" r="86" />
                    <rect x="56" y="193" rx="3" ry="3" width="80" height="7" />
                </ContentLoader>
            </Col>
        ));
    return <Row>{rendderSkeletons}</Row>;
};

export default CategoriesSkeleton;
