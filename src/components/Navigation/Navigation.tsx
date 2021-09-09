import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { routes } from 'config/routes';
import UserButton from 'components/UserButton';
import { mockAuthUser } from 'config/mocks/mockAuthUser';

import { Wrapper, Left, Logo, Links, NavLink } from './styles';

const navLinks = [
  {
    href: routes.home,
    name: 'Home',
  },
  {
    href: routes.lobby,
    name: 'Lobby',
  },
  {
    href: routes.joined,
    name: 'Leaderboard',
  },
  {
    href: routes.office,
    name: 'My Office',
  },
  {
    href: routes.signin,
    name: 'Commissioner’s Desk',
  },
  {
    href: routes.joined,
    name: 'Invitational',
  },
  {
    href: routes.joined,
    name: 'FFWS TV',
  },
];

type Props = {
  absolute?: boolean;
};

const checkActiveRoute = (route: string, href: string) => {
  const [, rootRoute] = route.split('/');
  const [, rootHref] = href.split('/');
  return route === href || rootRoute === rootHref;
};

const Navigation: React.FC<Props> = ({ absolute = false }: Props) => {
  const router = useRouter();
  return (
    <Wrapper absolute={absolute}>
      <Left>
        <Logo />
        <Links>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <NavLink active={checkActiveRoute(router.route, link.href)}>
                {link.name}
              </NavLink>
            </Link>
          ))}
        </Links>
      </Left>
      <UserButton user={mockAuthUser} />
    </Wrapper>
  );
};

export default Navigation;
