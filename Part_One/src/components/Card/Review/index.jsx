import { Aside, Card, H3, Img, Main, P, S, Txt } from './style';
import food01 from "@/assets/img/food/food01.svg";

export default ({ image, name = '', location = '', quote = '' }) =>
{
  return (
    <Card>
      <Main>
        <Img src={food01} />
        <Txt>
          <H3>John Samson</H3>
          <S>Enugu, Nigeria</S>
        </Txt>
      </Main>
      <Aside>
        <P>
          White dwarf a still more glorious dawn awaits tingling of the spine emerged into
          consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds
          kindling the energy hidden in matter concept of the number one permanence.
        </P>
      </Aside>
    </Card>
  );
};