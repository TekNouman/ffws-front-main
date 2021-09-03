import * as React from 'react';

import ValueButton from 'components/lists/UserList/components/ValueButton';
import { HalfCard, HalfCardText, TagButton } from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
} from 'components/tables';
import { DraftListsType } from 'typings/drafts';
import { DraftLeagueType } from 'typings/leagues';

import { LeaguesDrafts, LeagueName } from './styles';

type Props = {
  lists: DraftListsType;
};

const renderValuesNames = (valuesNames: string[]): React.ReactNode => (
  <TableLineLabels>
    {valuesNames.map((valueName, j) => (
      <TableCellLabel key={'valueName_' + j}>
        <HalfCardText>{valueName}</HalfCardText>
      </TableCellLabel>
    ))}
  </TableLineLabels>
);

const renderValues = (values: string[]): React.ReactNode =>
  values.map((value, l) => (
    <TableCellValue key={'value_' + l}>
      <ValueButton>{value}</ValueButton>
    </TableCellValue>
  ));

const renderLeague = (league: DraftLeagueType): React.ReactNode => {
  const handleEnterDraft = (draftID: string | number) => {
    const draft = {
      leagueID: league.id,
      draftID,
    };
    // eslint-disable-next-line no-console
    console.log({ draft });
  };
  return league.drafts.map((draft, k) => (
    <TableLineValues key={'draft_' + k}>
      {renderValues(draft.values)}
      <TableCellValue>
        <TagButton
          $action
          $right
          $disable={!draft.isOpen}
          onClick={() => handleEnterDraft(draft.id)}
        >
          Enter Draft
        </TagButton>
      </TableCellValue>
    </TableLineValues>
  ));
};

const DraftLists: React.FC<Props> = ({ lists }: Props) => {
  return (
    <LeaguesDrafts>
      {lists.leagues.map((league, i) => (
        <HalfCard withGap withMargin key={'league_' + i}>
          <LeagueName>{league.name}</LeagueName>
          <Table withPadding>
            <thead>{renderValuesNames(lists.valuesNames)}</thead>
            <tbody>{renderLeague(league)}</tbody>
          </Table>
        </HalfCard>
      ))}
    </LeaguesDrafts>
  );
};

export default React.memo(DraftLists);
