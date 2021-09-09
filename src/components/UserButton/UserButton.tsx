import * as React from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import AvatarPic from 'components/AvatarPic';
import { routes } from 'config/routes';
import { UserType } from 'typings/users';
import ButtonDropdown from 'components/ButtonDropdown';
import { useButtonDropdown } from 'components/ButtonDropdown/useButtonDropdown';

import { InnerLink } from './styles';

type Props = {
  user?: UserType;
};

const UserButton: React.FC<Props> = ({ user }: Props) => {
  const {
    isDropdownToggle,
    toggleDropdown,
    portalContainerPosition,
    portalContainerSize,
    portalContainerRef,
  } = useButtonDropdown();

  if (user) {
    return (
      <div ref={portalContainerRef}>
        <Button
          blurred
          rotateBottom
          toggle={isDropdownToggle}
          onClick={toggleDropdown}
        >
          <AvatarPic name={user.name} />
          <span>{user.name}</span>
          <ButtonDropdown
            linkList
            toggle={isDropdownToggle}
            top={portalContainerPosition[0]}
            left={portalContainerPosition[1]}
            width={portalContainerSize[0]}
            height={portalContainerSize[1]}
          >
            <Link href={routes.home}>
              <InnerLink>My Office</InnerLink>
            </Link>
            <Link href={routes.home}>
              <InnerLink>Calendar</InnerLink>
            </Link>
            {/* <Link href={routes.home}>
              <InnerLink>Logout</InnerLink>
            </Link> */}
            <Button href={routes.signin} red upperCase>
              Log out
            </Button>
          </ButtonDropdown>
        </Button>
      </div>
    );
  }
  return (
    <Button blurred href={routes.auth}>
      Join Us
    </Button>
  );
};

export default UserButton;
