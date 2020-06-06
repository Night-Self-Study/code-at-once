import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IndexList from "components/IndexList";

import noImage from "lib/assets/noimage.jpg";
import dummyCourse from "lib/dummyCourse";
import dummyIndex from "lib/dummyIndex";

const CourseDetail = ({ match }) => {
  const { category, id } = match.params;
  const { title, author, level } = dummyCourse[category][id];
  const [course, setCourse] = useState(dummyIndex);

  useEffect(() => {
    //axios.get category=match.params.category
    //          id      =match.params.id
  });

  return (
    <CourseDetailWrapper>
      <div className="header">
        <div className="title">
          <h1>{title}</h1>
          <h3>{author}</h3>
          <h2>수준: {level}</h2>
        </div>
        <img alt="course_image" src={noImage} />
      </div>
      <IndexList indexContents={course} match={match} />
    </CourseDetailWrapper>
  );
};

const CourseDetailWrapper = styled.div`
  width: 80%;
  margin: 2em auto;
  .header {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1em;
    }
    h1,
    h2,
    h3 {
      margin: 5px 0px;
    }
    img {
      width: 320px;
    }
  }
`;
export default CourseDetail;
