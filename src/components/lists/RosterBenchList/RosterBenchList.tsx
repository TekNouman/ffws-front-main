import * as React from 'react';

import {
  RosterBenchPlayerListType,
  RosterBenchPlayerType,
} from 'typings/drafts';
import { HalfCardText, PortalWrapper } from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
  THeadSticky,
} from 'components/tables';

import TableCellRosterPlayer from 'components/TabelCellRoster';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import { CHILD_SCROLL_ELEMENT_PREFIX } from 'components/Portal/usePortalPosition';

import PlayersButtons from './PlayersButtons';
import { RosterBenchListWrapper, TableScroll } from './styles';

// const renderValuesNames = (
//   valuesNames: string[],
//   remove: boolean
// ): React.ReactNode => (
  // <TableLineLabels>
  //   <TableCellLabel alignLeft>
  //     <HalfCardText>{remove ? '' : 'Slot'}</HalfCardText>
  //   </TableCellLabel>
  //   <TableCellLabel alignLeft withPlayerWidth>
  //     <HalfCardText>Player</HalfCardText>
  //   </TableCellLabel>
  //   <TableCellLabel alignLeft>
  //     <HalfCardText>POS</HalfCardText>
  //   </TableCellLabel>
  //   {valuesNames.map((valueName, j) => (
  //     <TableCellLabel key={'valueName_' + j} alignLeft>
  //       <HalfCardText>{valueName}</HalfCardText>
  //     </TableCellLabel>
//     ))}
//   </TableLineLabels>
// );

// const renderValues = (
//   player: RosterBenchPlayerType,
//   remove: boolean,
//   portalID: string
// ): React.ReactNode =>
//   player.values.map((value, l) => {
//     const isLast = l === player.values.length - 1;
//     return (
//       <TableCellValue key={'value_' + l}>
//         <ValueButton flexStart inline={isLast}>
//           {value}
//         </ValueButton>
//         {isLast && (
//           <PlayersButtons player={player} remove={remove} portalID={portalID} />
//         )}
//       </TableCellValue>
//     );
//   });

// const renderPlayers = (
//   players: RosterBenchPlayerType[],
//   remove: boolean,
//   portalID: string
// ): React.ReactNode => {
//   return players.map((player, k) => (
//     <TableLineValues key={`player_${remove ? 'remove' : 'add'}_${k}`}>
//       <TableCellValue>
//         <ValueButton flexStart>{remove ? 'B' : player.slot}</ValueButton>
//       </TableCellValue>
//       {/* <TableCellPlayer player={player.info} /> */}
//       <TableCellValue>
        // <ValueButton flexStart>
        //   {player.info.position?.toUpperCase()}
        // </ValueButton>
//       </TableCellValue>
//       {renderValues(player, remove, portalID)}
//     </TableLineValues>
//   ));
// };

type Props = {
  list: RosterBenchPlayerListType;
  remove?: boolean;
  portalID: string;
};


class RosterBenchList extends React.Component{

  
  render(){
    
    const {data} = this.props;
   
   // console.log(data)

    return(
      <RosterBenchListWrapper>
      {/* <TableScroll id={CHILD_SCROLL_ELEMENT_PREFIX + APData.RosterSlotId} remove={remove}>
        <PortalWrapper id={APData.RosterSlotId} /> */}
        <Table withPadding>
         


          <tbody>

            <TableCellRosterPlayer {...data} data={data}/>

          </tbody>
        </Table>
      {/* </TableScroll> */}
    </RosterBenchListWrapper>
    );
  }
}

// const RosterBenchList: React.FC<Props> = ({
//   list,
//   remove = false,
//   portalID,
// }: Props) => {
//   return (
//     <RosterBenchListWrapper>
//       <TableScroll id={CHILD_SCROLL_ELEMENT_PREFIX + portalID} remove={remove}>
//         <PortalWrapper id={portalID} />
//         <Table withPadding>
//           <THeadSticky>
//             {renderValuesNames(list.valuesNames, remove)}
//           </THeadSticky>
//           <tbody>{renderPlayers(list.players, remove, portalID)}</tbody>
//         </Table>
//       </TableScroll>
//     </RosterBenchListWrapper>
//   );
// };

export default RosterBenchList;
