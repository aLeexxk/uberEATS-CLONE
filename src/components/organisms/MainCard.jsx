import styled from "styled-components";

const Container = styled.Pressable`
  margin-bottom: 25px;
`;

const CardImage = styled.Image``;

const TitleWrapper = styled.View``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #6b6b6b;
`;

const Rating = styled.View`
  width: 28px;
  height: 28px;
  background-color: #eeeeee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 12px;
`;

const CardBottom = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Promotion = styled.View`
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  width: 235px;
  background: #34a853;
`;

const PromotionText = styled.View``;

const LikeBtn = styled.Image``;

const LikeBtnWrapper = styled.Pressable`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const MainCard = ({ ImgUrl, title, price, deliveryTime, rating }) => {
  return (
    <Container>
      <CardImage source={ImgUrl} />
      <LikeBtnWrapper>
        <LikeBtn source={require("../../../assets/Vector.png")} />
      </LikeBtnWrapper>
      <CardBottom>
        <TitleWrapper>
          <Title>{title}</Title>
          {price && (
            <SubTitle>
              ${price} Delivery Fee | {deliveryTime} min
            </SubTitle>
          )}
        </TitleWrapper>
        <Rating>
          <RatingText>{rating}</RatingText>
        </Rating>
      </CardBottom>
      <Promotion>
        <PromotionText></PromotionText>
      </Promotion>
    </Container>
  );
};

export default MainCard;
