import React from 'react';
import styled from 'styled-components';

import noImage from 'lib/assets/noimage.jpg';
import NoDecorationLink from 'components/NoDecorationLink';

const errorPath = '/error';

const Card = ({
  isLong = false,
  category,
  path = errorPath,
  id,
  thumbnail = noImage,
  level = '초급',
  title = 'title을 불러오지 못했습니다.',
  author = 'author를 불러오지 못했습니다.',
  detail = '',
}) => {
  return isLong ? (
    <LongCardWrapper>
      <NoDecorationLink
        to={id === undefined ? path : `/course/${category}/${id}`}
      >
        <img alt="dummyImage_alt" src={thumbnail} />
        <div className="description">
          <div className="level">[{level}]</div>
          <div className="title">{title}</div>
          <div className="author">{author}</div>
          <div className="detail">
            {detail.score}
            {detail.time}
            {detail.numberOfLecture}
          </div>
        </div>
      </NoDecorationLink>
    </LongCardWrapper>
  ) : (
    <CardWrapper>
      <NoDecorationLink
        to={id === undefined ? path : `/course/${category}/${id}`}
      >
        <img alt="dummyImage_alt" src={thumbnail} />

        <div className="level">[{level}]</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="detail">
          {detail.score}
          {detail.time}
          {detail.numberOfLecture}
        </div>
      </NoDecorationLink>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  text-align: center;
  margin: 10px 20px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    max-width: 15vw;

    border-radius: 8px;
    overflow: hidden;
  }
  .level,
  .title,
  .author {
    padding: 5px 0px;
  }

  .author {
    font-size: 10px;
    color: gray;
  }
`;

const LongCardWrapper = styled.div`
  margin: 20px 0px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  ${NoDecorationLink} {
    display: flex;
  }
  img {
    width: 100%;
    max-width: 15vw;

    border-radius: 8px;
    overflow: hidden;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    div {
      margin: 5px 0px;
    }
  }
`;
export default Card;
