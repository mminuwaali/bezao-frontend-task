import { useState } from 'react';
import Review from '#/Card/Review';
import { Content, P, T, Tabs, Title, Wrapper } from './style';

export default () =>
{
  const [reviews, setReviews] = useState(Array(5).fill(0));

  return (
    <Wrapper>
      <Title>
        <T>
          What our customers say about us
        </T>
        <P>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </P>
      </Title>
      <Content>
        {reviews.map((_, key) => (<Review key={key} />))}
      </Content>
      <Tabs></Tabs>
    </Wrapper>
  );
};