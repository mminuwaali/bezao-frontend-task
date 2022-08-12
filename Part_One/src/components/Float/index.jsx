import float from '@/assets/icon/float.svg';
import { A, Img, Wrapper } from './style';

export default () =>
{
  return (
    <Wrapper>
      <A href="http://" target="_blank" rel="noopener noreferrer">
        <Img src={float} />
      </A>
    </Wrapper>
  );
};
