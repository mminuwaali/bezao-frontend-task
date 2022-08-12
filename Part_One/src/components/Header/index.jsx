import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import logo from '@/assets/icon/logo.svg';
import menu from '@/assets/icon/menu.svg';
import close from '@/assets/icon/close.svg';
import { TbClipboardText as Text } from 'react-icons/tb';
import { A, Aside, Btn, Header, I, Icon, Logo, Main, Menu, Nav } from './style';
import { AiOutlineHome as Home, AiOutlineShop as Shop, AiOutlineShoppingCart } from 'react-icons/ai'

export default () =>
{
  const [open, setOpen] = useState(0);

  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <Nav open={open}>
        <Main>
          <A to='/'><Home /><I>home</I></A>
          <A to='/menu'><Shop /><I>menu</I></A>
          <A to='/meal'><Text /><I>meal plans</I></A>
          <A always='true' self='true' to='/meal'><FiSearch /></A>
          <A always='true' to='/meal'><AiOutlineShoppingCart /><I invert='true'>my tray</I></A>
        </Main>
        <Aside>
          <Btn>sign in</Btn>
          <Btn>create account</Btn>
        </Aside>
      </Nav>
      <Menu src={open ? close : menu} onClick={() => setOpen(!open)} />
    </Header>
  );
};