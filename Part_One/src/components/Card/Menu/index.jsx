import { Aside, Card, H3, Img, Main, P, S } from './style';

export default ({ image, title = '', content = '', price = 0 }) =>
{
  return (
    <Card>
      <Main>
        <Img src={image} alt='image' />
      </Main>
      <Aside>
        <H3>{title}</H3><P>{content}</P><S>₦{price}</S>
      </Aside>
    </Card>
  );
};
