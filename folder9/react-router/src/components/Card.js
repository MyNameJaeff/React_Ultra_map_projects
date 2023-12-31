import React from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const user = useParams().user;
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{user}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, voluptatem, voluptate quibusdam, magni voluptatum
        distinctio fugiat officia sint quod voluptates? Quibusdam, quod
        voluptates. Quisquam, voluptatem. Quisquam, voluptatem. Quisquam,
        voluptatem.
      </p>
    </div>
  );
};

export default Card;
