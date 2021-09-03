import * as React from 'react';

import Card from 'components/Card';
import { HalfCardHeader, CardWrapper, HalfCardText } from 'components/ui';
import RosterBenchList from 'components/lists/RosterBenchList';
import { colors } from 'styles/colors';
import { RosterBenchPlayerListType } from 'typings/drafts';
import { portals } from 'components/Portal/config';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
  THeadSticky,
} from 'components/tables';
type Props = {
  list: RosterBenchPlayerListType;
};

class Roster extends React.Component{
  state = {
    RosterData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Roster/GetRoster`)     
    const data = await res.json()
   
    
    this.setState({
     RosterData: data
    });  
  }
  render(){
    const {RosterData} = this.state;
   // console.log(RosterData)
    return(
      <CardWrapper>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>Roster</HalfCardHeader>
        {/* <THeadSticky>
         
         <TableLineLabels>
   <TableCellLabel alignLeft>
     <HalfCardText>{ 'Slot'}</HalfCardText>
   </TableCellLabel>
   <TableCellLabel alignLeft withPlayerWidth>
     <HalfCardText>Player</HalfCardText>
   </TableCellLabel>
   <TableCellLabel alignLeft>
     <HalfCardText>POS</HalfCardText>
   </TableCellLabel>
  
     <TableCellLabel  alignLeft>
       <HalfCardText></HalfCardText>
     </TableCellLabel>
         </TableLineLabels>
     </THeadSticky>

      */}
        {RosterData.map((league, i) => (
       <RosterBenchList {...league} data={league} key={i} />
       ))}
      </Card>
    </CardWrapper>


    );
  }


}
// const Roster: React.FC<Props> = ({ list }: Props) => {
//   return (
    // <CardWrapper>
    //   <Card fullWidth color={colors.blackPanel}>
    //     <HalfCardHeader>Roster</HalfCardHeader>
    //     <RosterBenchList list={list} portalID={portals.roster} />
    //   </Card>
    // </CardWrapper>
//   );
// };

export default Roster;
