import * as React from 'react';

import { TeamTableName } from 'components/ui';
import { Table, TableCellValue } from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import { TeamType } from 'typings/teams';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import TableCellTeam from 'components';

type Props = {
  team: TeamType;
};

class TableCellPlayer extends React.Component{
  render(){
    const { data } = this.props; 
    return(

      

      <Table>

      <TableCellValue flexAlign>        
      <ValueButton> <AvatarPic  name={data.Name} /> </ValueButton>
     
       <TeamTableName>{data.Name}</TeamTableName>
       <ValueButton>W ={data.Wins}</ValueButton>
      <ValueButton>L ={data.Losses}</ValueButton>
       <ValueButton>T ={data.Ties}</ValueButton>
       <ValueButton>PST AGANST ={data.PointsAgainst}</ValueButton> 
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
