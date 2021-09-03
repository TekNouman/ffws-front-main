import * as React from 'react';

import { TagButton, HalfCardText } from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
} from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import { UserListType } from 'typings/users';

import ValueButton from './components/ValueButton';
import { UserPicWrapper, UserName } from './styles';

type Props = {
  userList: UserListType;
};

const HIGHTLIGHTED_LIST_NUMBERS = 3;

const UserList: React.FC<Props> = ({ userList }: Props) => {
  return (
    <Table>
      <tbody>
        <TableLineLabels>
          <TableCellLabel alignLeft>
            <HalfCardText>Player</HalfCardText>
          </TableCellLabel>
          {userList.valuesNames.map((valueName, i) => (
            <TableCellLabel key={i}>
              <HalfCardText>{valueName}</HalfCardText>
            </TableCellLabel>
          ))}
          {userList.withTotal && (
            <TableCellLabel>
              <HalfCardText>Total</HalfCardText>
            </TableCellLabel>
          )}
        </TableLineLabels>

        {userList.items.map((item) => (
          <TableLineValues key={item.listNumber}>
            <TableCellValue
              highlighted={item.listNumber <= HIGHTLIGHTED_LIST_NUMBERS}
              flexAlign
            >
              <TagButton>{item.listNumber}</TagButton>
              <UserPicWrapper>
                <AvatarPic img={item.user.userPic} name={item.user.name} />
              </UserPicWrapper>
              <UserName>{item.user.name}</UserName>
            </TableCellValue>
            {item.values.map((value, j) => (
              <TableCellValue key={j}>
                <ValueButton>{value}</ValueButton>
              </TableCellValue>
            ))}
            {userList.withTotal && (
              <TableCellValue>
                <ValueButton>
                  {item.values.reduce((a, b) => a + b, 0)}
                </ValueButton>
              </TableCellValue>
            )}
          </TableLineValues>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
