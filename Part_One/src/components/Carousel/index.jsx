import carousel from '@/assets/img/carousel.svg';
import { Aside, Btn, H2, Icon, Img, Inupt, Main, Middle, P, Txt, Wrapper } from './style';

export default () =>
{
  return (
    <Wrapper>
      <Main>
        <H2>
          Delicious meals at
          your convenience
        </H2>
        <P>
          Order your meals from us and we will have it delivered at your doorstep.
        </P>
        <Btn>get started</Btn>
      </Main>
      <Middle>
        <Txt>Instant Order</Txt>
        <Icon />
        <Inupt placeholder='Search for meal' />
      </Middle>
      <Aside>
        <Img src={carousel} />
      </Aside>
    </Wrapper>
  );
};