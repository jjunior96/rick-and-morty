import * as S from './styled';

const CharacterPage: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default CharacterPage;
