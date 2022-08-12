import Menu from '#/Card/Menu';
import { useEffect, useState } from 'react';
import { useDispatch, food as store } from '@/hooks/state';
import { Aside, Content, H2, T, Tab, Tabs, Title, Wrapper, Menu as M, Btn } from './style';

export default () =>
{
  // Hooks
  const { data } = store();

  // States
  const [food, setFood] = useState([]);

  useEffect(() => { setFood(data) }, []);

  return (
    <Wrapper>
      <Title>
        <T>menu</T>
        <Aside>
          <H2>Current menu</H2>
          <Tabs>
            <Tab current={1}>all</Tab>
            <Tab>rice</Tab>
            <Tab>beans</Tab>
            <Tab>fries</Tab>
            <Tab>swallow</Tab>
            <Tab>others</Tab>
          </Tabs>
        </Aside>
      </Title>
      <Content>
        {food.map((item, key) => (<Menu key={key} {...item} />))}
      </Content>
      <M>
        <Btn>full menu</Btn>
      </M>
    </Wrapper>
  );
};
