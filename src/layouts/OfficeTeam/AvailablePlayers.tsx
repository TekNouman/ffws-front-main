import * as React from 'react';

import Card from 'components/Card';
import { HalfCardHeader, CardWrapper, SecondaryTextColor, HalfCardText } from 'components/ui';
import { colors } from 'styles/colors';
import PlayersList from 'components/lists/PlayersList';
import { PlayersListType } from 'typings/players';
import { TableLineLabels } from 'components/tables';
import { TableCellLabel } from 'components/tables';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import { PlayerName, PlayerLabel, FlexColumn } from 'components/ui';
import { Table, TableCellValue } from 'components/tables';
type Props = {
  list: PlayersListType;
};

class AvailablePlayers extends React.Component{
  state = {
    APData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/player/GetAvalible`)     
    const Avdata = await res.json()
  // console.log(data)
    
    this.setState({
      APData: Avdata
    });  
  }
  render(){
    const {APData} = this.state;

    

    return(
      <CardWrapper>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>
          Available Players{' '}
       
          <SecondaryTextColor></SecondaryTextColor>
        </HalfCardHeader>
        <TableLineLabels>
   
   
    
{/*     
    <TableCellValue flexAlign>
      <ValueButton>Player</ValueButton>
      <ValueButton>Player</ValueButton>
      <ValueButton>Player</ValueButton>
      <ValueButton>Player</ValueButton>
      <ValueButton>Player</ValueButton>
    </TableCellValue>
   */}
    
  </TableLineLabels>
        {APData.map((league, i) => (
        <PlayersList {...league} data={league} key={i} />
        ))}
      </Card>
    </CardWrapper>
   
    );
  }
}


// const AvailablePlayers: React.FC<Props> = ({ list }: Props) => {
//   return (
//     <CardWrapper>
//       <Card fullWidth color={colors.blackPanel}>
//         <HalfCardHeader>
//           Available Players{' '}
//           <SecondaryTextColor>• {list.players.length}</SecondaryTextColor>
//         </HalfCardHeader>
//         <PlayersList list={list} />
//       </Card>
//     </CardWrapper>
//   );
// };

export default AvailablePlayers;
