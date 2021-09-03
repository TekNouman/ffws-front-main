import * as React from 'react';

import { PlayerName, PlayerLabel, FlexColumn } from 'components/ui';
import { Table, TableCellValue } from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import { PlayerType } from 'typings/players';
import ValueButton from 'components/lists/UserList/components/ValueButton';
// type Props = {
//   player: PlayerType;
// };


class TableCellPlayer extends React.Component{
  state = {
    APData: []
  }
  async componentDidMount(){    
   
    const data = this.props;
   // console.log(data)
    
    this.setState({
      APData: data
    });  
  }
  
  render(){

    
    
      const {APData} = this.state;

     // console.log(APData.Name)

    return(
      



<TableCellValue flexAlign>
       
       {/* <AvatarPic  name={APData.Name} /> */}
       {/* <PlayerName>{APData.Name}</PlayerName>  */}
       <FlexColumn>
         <PlayerName>{APData.Name}</PlayerName>
        
          <PlayerLabel>{APData.Position}   {APData.Team}</PlayerLabel>
          
       </FlexColumn>
       <ValueButton>{APData.ByeWeek}</ValueButton>
 
          <ValueButton>{APData.UpcomingOpponent}</ValueButton>
           <ValueButton>{APData.UpcomingProjectedPoints}</ValueButton>
   </TableCellValue>            
    );
  }
}


////////////////
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




export default TableCellPlayer;
