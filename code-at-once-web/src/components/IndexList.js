import React from 'react';
import styled from 'styled-components';
import NoDecorationLink from 'components/NoDecorationLink';

const IndexList = ({ match, indexContents = [] }) => {
  return (
    <IndexListWrapper>
      <ol>
        {indexContents.map((content) => (
          <div key={content.title}>
            <li className="title">{content.title}</li>
            <ul>
              {content.contents.map((li) => (
                <NoDecorationLink to={`${match.url}/course/${li.lectureId}`}>
                  <li>{li.subtitle}</li>
                </NoDecorationLink>
              ))}
            </ul>
          </div>
        ))}
      </ol>
    </IndexListWrapper>
  );
};

const IndexListWrapper = styled.div`
  .title {
    margin: 10px 0px;
  }
  ol {
    list-style: decimal;
    li {
      font-size: 2em;
    }
  }

  ul {
    list-style: circle;
    li {
      font-size: 1.2em;
    }
  }

  li {
    padding: 5px 0px 5px 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #efefef;
    &:hover {
      background: #f6f6f6;
    }
    transition: background 0.3s linear;
  }
`;
export default IndexList;
