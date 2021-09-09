import * as React from 'react';

import { TeamTableName } from 'components/ui';
import { Table, TableCellValue } from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import { TeamType } from 'typings/teams';
import ValueButton from 'components/lists/UserList/components/ValueButton';


type Props = {
  team: TeamType;
};

class TableCellPlayer extends React.Component{
  render(){

    let  data  = this.props; 
    let pda: any = []
    pda = data;
    return(

      

      <Table>

      <TableCellValue flexAlign>        
      <ValueButton> <AvatarPic  name={pda.Name} /> </ValueButton>
     
       <TeamTableName>{pda.Name}</TeamTableName>
       <ValueButton>W ={pda.Wins}</ValueButton>
      <ValueButton>L ={pda.Losses}</ValueButton>
       <ValueButton>T ={pda.Ties}</ValueButton>
       <ValueButton>PST AGANST ={pda.PointsAgainst}</ValueButton> 
      {/* <TeamTableName>{data.Wins}</TeamTableName>
      <TeamTableName>{data.Losses}</TeamTableName>
       <TeamTableName>{data.Ties}</TeamTableName>
       <TeamTableName>{data.PointsAgainst}</TeamTableName>  */}
       
    </TableCellValue>
<TableCellValue flexAlign>        
     
     
       
    </TableCellValue>
    </Table>

    

    );
  }
}


// const TableCellPlayer: React.FC<Props> = ({ team }: Props) => {
//   return (
    // <TableCellValue flexAlign>
    //   {/* <AvatarPic img={team.logo} name={team.name} /> */}
    //   {/* <TeamTableName>{team.name}</TeamTableName> */}
    // </TableCellValue>
//   );
// };

export default TableCellPlayer;
