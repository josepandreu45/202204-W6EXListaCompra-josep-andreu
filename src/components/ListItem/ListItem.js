import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;
const StyledCheckboxContainer = styled.div`
  flex: 0 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;
const StyledArticleName = styled.span`
  flex: 100;
`;

const StyledPrice = styled.span`
  flex: 0 105px;
`;

const ListItem = ({ article, price }) => {
  return (
    <StyledArticle className="row">
      <StyledCheckboxContainer className="col">
        <input type="checkbox" />
      </StyledCheckboxContainer>
      <StyledArticleName className="px-0 col">{article}</StyledArticleName>
      <StyledPrice className="col">{price}€</StyledPrice>
      <a href="delete-article" className="col">
        <FaTimes className="icon" />
      </a>
    </StyledArticle>
  );
};

export default ListItem;
