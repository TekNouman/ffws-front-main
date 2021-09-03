import { CardType } from 'typings/cards';

import AccessCard from './AccessCard';
import CreateAccountCard from './CreateAccountCard';
import ResetPasswordCard from './ResetPasswordCard';
import NewPasswordCard from './NewPasswordCard';
import JoinedCard from './JoinedCard';

export enum AuthCardsEnum {
  signup = 'signup',
  signin = 'signin',
  resetPassword = 'reset-password',
  newPassword = 'new-password',
  joined = 'joined',
}

export const authRoute = '/auth';

export const authCards: Record<AuthCardsEnum, CardType> = {
  [AuthCardsEnum.signup]: {
    component: CreateAccountCard,
    cardKey: AuthCardsEnum.signup,
    pageRoute: authRoute,
    name: 'Create Account',
  },
  [AuthCardsEnum.signin]: {
    component: AccessCard,
    cardKey: AuthCardsEnum.signin,
    pageRoute: authRoute,
    name: 'Access',
  },
  [AuthCardsEnum.resetPassword]: {
    component: ResetPasswordCard,
    cardKey: AuthCardsEnum.resetPassword,
    pageRoute: authRoute,
    name: 'Reset Password',
  },
  [AuthCardsEnum.newPassword]: {
    component: NewPasswordCard,
    cardKey: AuthCardsEnum.newPassword,
    pageRoute: authRoute,
    name: 'New Password',
  },
  [AuthCardsEnum.joined]: {
    component: JoinedCard,
    cardKey: AuthCardsEnum.joined,
    pageRoute: authRoute,
    name: 'Joined',
  },
};
