import * as React from 'react';

import { PlayerName, PlayerLabel, FlexColumn, PlayerNameRoster } from 'components/ui';
import { Table, TableCellValue } from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import { PlayerType } from 'typings/players';
import ValueButton from 'components/lists/UserList/components/ValueButton';

type Props = {
  player: PlayerType;
};


class TableCellRosterPlayer extends React.Component{
  state = {
    RData: []
  }
  async componentDidMount(){    
   
    let {data} = this.props;
 
    //console.log(data)
    this.setState({
        RData: data
    });  
  }
  
  render(){        
      let RData = this.state.RData || null;     
      
    if(Array.isArray(RData) && Object.keys(RData).length > 0){
      return null;
    }
      console.log('RData:',RData)
    return(      


      <Table >
<TableCellValue flexAlign>          
       <FlexColumn>       
         {/* <PlayerNameRoster>{RData.PlayerFirstName}</PlayerNameRoster>               */}
         <PlayerName>{RData.hasOwnProperty('PlayerFirstName') ? RData.PlayerFirstName : "N/A"}</PlayerName>
       
       </FlexColumn>        
       <ValueButton>OPP - {RData.PlayerOpponent}</ValueButton> 
        <ValueButton>POS-{RData.PlayerPosition}</ValueButton>
        <ValueButton>POINTS-{RData.Points}</ValueButton>
       <ValueButton>BYE-{RData.PlayerByeWeek}</ValueButton>

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
