import styled from "styled-components";

export const Wrraper = styled.div`
  .RecatTags__tagInput {
    flex-grow: 1;
  }
  .ReactTags__selected {
    display: flex;
    grid-gap: 16px;
    flex-wrap: wrap;
  }
  .ReactTags__tag {
    background-color: #09f;
    color: #fff;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }
  .ReactTags_remove {
    width: 24px;
    height: 1em;
    border: 0;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    font-size: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ReactTags__tagInputField {
    color: #274060;
    background-color: transparent;
    border-radius: 0;
    width: 100;
    padding: 4px 0;
    font-size: 1em;
    font-family: "Lato", sans-serif;
    outline: none;
    border: none;
    border-bottom: 1px sold #ccc;
  }
`;
