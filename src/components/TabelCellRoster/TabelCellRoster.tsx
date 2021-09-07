import * as React from 'react';

import { PlayerName, PlayerLabel, FlexColumn, PlayerNameRoster } from 'components/ui';
import { Table, TableCellValue } from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import { PlayerType } from 'typings/players';
import ValueButton from 'components/lists/UserList/components/ValueButton';

type Props = {
  player: PlayerType;
};

class Player{
  PlayerFirstName: ""
}

class TableCellRosterPlayer extends React.Component{
  state = {
    RData: []
  }
  async componentDidMount(){    
   
    const data = this.props;
 
    //console.log(data)
    this.setState({
        RData: data
    });  
  }
  
  render(){        
      let RData = this.state.RData || null;     
      let rda : any = []
    if(Array.isArray(RData) && Object.keys(RData).length > 0){
      return null;
    }
      rda = RData
      console.log('RData:',RData)
    return(      


      <Table >
<TableCellValue flexAlign>          
       <FlexColumn>       
         {/* <PlayerNameRoster>{RData.PlayerFirstName}</PlayerNameRoster>               */}
         <PlayerName>{RData.hasOwnProperty('PlayerFirstName') ? rda.PlayerFirstName : "N/A"}</PlayerName>
       
       </FlexColumn>        
       <ValueButton>OPP - {rda.PlayerOpponent}</ValueButton> 
        <ValueButton>POS-{rda.PlayerPosition}</ValueButton>
        <ValueButton>POINTS-{rda.Points}</ValueButton>
       <ValueButton>BYE-{rda.PlayerByeWeek}</ValueButton>

   </TableCellValue>  
  
   </Table>        
    );
  }
}


// //////////////
// const TableCellPlayer: React.FC<Props> = ({ player }: Props) => {
//   return (
//     <TableCellValue flexAlign>
//       <AvatarPic img={player.pic} name={player.name} />
//       <FlexColumn>
//         <PlayerName>{player.name}</PlayerName>
//         <PlayerLabel>{player.label}</PlayerLabel>
//       </FlexColumn>
//     </TableCellValue>
//   );
// };




 export default TableCellRosterPlayer;
