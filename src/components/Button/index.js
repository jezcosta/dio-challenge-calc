
import { ButtonContainer } from './styles';

const Button = ({label, onClick, highlight}) => {
    return (
      <ButtonContainer onClick={onClick} highlight={highlight} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;