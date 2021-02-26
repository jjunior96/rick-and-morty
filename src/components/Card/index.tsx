import * as S from './styles';

interface CardProps {
  name?: string;
  image?: string;
}

const Card = ({ name, image }: CardProps) => {
  return (
    <S.Container>
      {name && (
        <>
          <S.CardImage>
            <img src={image} alt={`${name} Thumbnail`} />
          </S.CardImage>
          <S.Content>
            <S.Name
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4
                  }
                }
              }}
            >
              {name}
            </S.Name>
          </S.Content>
        </>
      )}
    </S.Container>
  );
};

export default Card;
