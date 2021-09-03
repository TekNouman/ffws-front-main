import * as React from 'react';

import { PlayersListType } from 'typings/players';
import { HalfCardText, SpinnerIcon } from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
  THeadSticky,
} from 'components/tables';
import TableCellPlayer from 'components/TableCellPlayer';
import ValueButton from 'components/lists/UserList/components/ValueButton';

import PlusIcon from './icons/plus.component.svg';
import MinusIcon from './icons/minus.component.svg';
import { TableScroll, PlayerAddRemove, PlayerAddRemoveWrapper } from './styles';
import { extend } from 'dayjs';

const renderValuesNames = (valuesNames: string[]): React.ReactNode => (
  <TableLineLabels>
    <TableCellLabel alignLeft>
      <HalfCardText></HalfCardText>
    </TableCellLabel>
    <TableCellLabel alignLeft>
      <HalfCardText>Player</HalfCardText>
    </TableCellLabel>
  
      <TableCellLabel >
        <HalfCardText></HalfCardText>
      </TableCellLabel>
    
  </TableLineLabels>
);

const renderValues = (values: (string | number)[]): React.ReactNode =>
  values.map((value, i) => (
    <TableCellValue key={'value_' + i}>
      <ValueButton>{value}</ValueButton>
    </TableCellValue>
  ));

type Props = {
  list: PlayersListType;
  remove?: boolean;
};


class PlayersList extends React.Component{
  render(){
    const {data} = this.props;
    
    //  console.log(data)

    return(
<TableScroll>
      <Table withPadding>
        {/* <THeadSticky>{renderValuesNames(list.valuesNames)}</THeadSticky> */}
        <tbody>
           {/* {
            const [loading, setLoading] = React.useState(false);
            const handlePlusMinusClick = () => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }; */}
            
              <TableLineValues >
             
                <TableCellPlayer {...data} data={data}  /> 
          
              </TableLineValues>
            
       
        </tbody>
      </Table>
    </TableScroll>

    );
  }
}

// const PlayersList: React.FC<Props> = ({ list, remove = false }: Props) => {
//   return (
//     <TableScroll>
//       <Table withPadding>
//         <THeadSticky>{renderValuesNames(list.valuesNames)}</THeadSticky>
//         <tbody>
//           {list.players.map((player, i) => {
//             const [loading, setLoading] = React.useState(false);
//             const handlePlusMinusClick = () => {
//               setLoading(true);
//               setTimeout(() => setLoading(false), 2000);
//             };
//             return (
//               <TableLineValues key={'player_' + i}>
//                 <TableCellValue firstButton>
//                   <PlayerAddRemove
//                     onClick={loading ? undefined : handlePlusMinusClick}
//                   >
//                     <PlayerAddRemoveWrapper>
//                       {loading ? (
//                         <SpinnerIcon />
//                       ) : remove ? (
//                         <MinusIcon />
//                       ) : (
//                         <PlusIcon />
//                       )}
//                     </PlayerAddRemoveWrapper>
//                   </PlayerAddRemove>
//                 </TableCellValue>
//                 <TableCellPlayer player={player} />
//                 {renderValues(player.values)}
//               </TableLineValues>
//             );
//           })}
//         </tbody>
//       </Table>
//     </TableScroll>
//   );
// };

export default PlayersList;
