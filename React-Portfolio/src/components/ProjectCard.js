import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} />
        <div className="proj-txtx">
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
