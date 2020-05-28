import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";

const SearchBar = ({ type, inputWidth }) => {
  return (
    <SearchBarWrapper inputWidth={inputWidth}>
      <div className={type}>
        {type !== "container-4" ? (
          <>
            <span className="icon">
              <i className="fa fa-search"></i>
            </span>
            <input type="search" id="search" placeholder="Search..." />
          </>
        ) : (
          <>
            <input type="search" id="search" placeholder="Search..." />
            <button className="icon">
              <i className="fa fa-search"></i>
            </button>
          </>
        )}
      </div>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  width: ${(props) => props.inputWidth} || 100%;
  .container-1 {
    width: 100%;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
    .icon {
      position: absolute;
      top: 50%;
      margin-left: 17px;
      margin-top: 17px;
      z-index: 1;
      color: ${palette.white};
    }

    input#search {
      width: 100%;
      height: 50px;
      background: ${palette.darkBlue};
      border: none;
      font-size: 10pt;
      float: left;
      color: #63717f;
      padding-left: 45px;
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      transition: background 0.55s ease;

      ::placeholder {
        color: #65737e;
      }
      :hover,
      :focus,
      :active {
        outline: none;
        background: #f0f0f0;
      }
    }
  }

  .container-2 {
    width: 300px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;

    input#search {
      width: 50px;
      height: 50px;
      background: #2b303b;
      border: none;
      font-size: 10pt;
      float: left;
      color: #262626;
      padding-left: 35px;
      border-radius: 5px;
      color: #fff;
      transition: width 0.55s ease;
      ::placeholder {
        color: #65737e;
      }
      :focus,
      :active {
        outline: none;
        width: 300px;
      }
      :hover {
        width: 300px;
      }
    }

    .icon {
      position: absolute;
      top: 50%;
      margin-left: 17px;
      margin-top: 17px;
      z-index: 1;
      color: #4f5b66;
    }
    :hover .icon {
      color: #93a2ad;
    }
  }

  .container-3 {
    width: 300px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;

    input#search {
      width: 300px;
      height: 50px;
      background: #2b303b;
      border: none;
      font-size: 10pt;
      float: left;
      color: #262626;
      padding-left: 45px;
      border-radius: 5px;
      color: #fff;

      ::placeholder {
        color: #65737e;
      }
      :focus,
      :active {
        outline: none;
      }
    }

    .icon {
      position: absolute;
      top: 50%;
      margin-left: 17px;
      margin-top: 17px;
      z-index: 1;
      color: #4f5b66;
      transition: all 0.55s ease;
    }
    :hover .icon {
      margin-top: 16px;
      color: #93a2ad;
      transform: scale(1.5);
    }
  }
  .container-4 {
    overflow: hidden;
    width: 300px;
    vertical-align: middle;
    white-space: nowrap;

    input#search {
      width: 300px;
      height: 50px;
      background: #2b303b;
      border: none;
      font-size: 10pt;
      float: left;
      color: #fff;
      padding-left: 15px;
      border-radius: 5px;
      ::placeholder {
        color: #65737e;
      }
    }
    button,
    .icon {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border: none;
      background: #white;
      height: 50px;
      width: 50px;
      color: #4f5b66;
      opacity: 0;
      font-size: 10pt;

      transition: all 0.55s ease;
    }
    :hover,
    :active,
    :focus {
      button.icon {
        outline: none;
        opacity: 1;
        margin-left: -50px;
      }
    }
    :hover button.icon {
      :hover {
        background: gray;
      }
    }
  }
`;

export default SearchBar;
