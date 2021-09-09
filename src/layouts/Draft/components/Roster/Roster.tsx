import * as React from 'react';

import InfoCard from 'components/cards/InfoCard';
import { PlayerType, PositionType } from 'typings/players';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
  THeadSticky,
} from 'components/tables';
import {
  HalfCardText,
  FlexColumn,
  PlayerName,
  PlayerLabel,
} from 'components/ui';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import AvatarPic from 'components/AvatarPic';

import { Wrapper, TableScroll, EmptyLabel } from './styles';

// type Props = {
//   rosterList: (PlayerType | PositionType)[];
// };


class Roster extends React.Component{
  state = {
    RosterData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Roster/GetRoster`)
    
    
    const data = await res.json()

   // console.log(data)



    this.setState({
      RosterData: data
    });  
  }


  render(){
    const  RosterData  = this.state;
    let rda : any=[]
    rda = RosterData 


    return (
      <Wrapper>
        <InfoCard
          title="Roster"
          
        >
          <TableScroll>
            <Table withPadding>
              <THeadSticky>
                <TableLineLabels>
                <TableCellLabel alignLeft>
                    <HalfCardText></HalfCardText>
                  </TableCellLabel>
                  <TableCellLabel alignLeft>
                    <HalfCardText>PDS</HalfCardText>
                  </TableCellLabel>
                  <TableCellLabel alignLeft>
                    <HalfCardText>Player</HalfCardText>
                  </TableCellLabel>
                </TableLineLabels>
              </THeadSticky>
              <tbody>
                
                    return (
                      <TableLineValues >
                        <TableCellValue disabled>
                        <AvatarPic  name={rda.PlayerFirstName} />
                        </TableCellValue>

                        <TableCellValue disabled>
                          <ValueButton flexStart uppercase>
                            {rda.PlayerPosition}
                          </ValueButton>
                        </TableCellValue>
                        <TableCellValue disabled>
                          <PlayerName>{rda.PlayerFirstName}</PlayerName>
                        </TableCellValue>
                        
                                              
                      </TableLineValues>
                    
                  {/* // const player = item as PlayerType;
                  // return (
                  //   <TableLineValues key={i}>
                  //     <TableCellValue>
                  //       <ValueButton flexStart>{player.position}</ValueButton>
                  //     </TableCellValue>
                  //     <TableCellValue flexAlign>
                  //       <AvatarPic img={player.pic} name={player.PlayerFirstName} />
                  //       <FlexColumn>
                  //         <PlayerName>{player.name}</PlayerName>
                  //         <PlayerLabel>{player.label}</PlayerLabel>
                  //       </FlexColumn>
                  //     </TableCellValue>
                  //   </TableLineValues>
                  // ); */}
                    )
              </tbody>
            </Table>
          </TableScroll>
        </InfoCard>
      </Wrapper>
    );
  }
}

// const Roster: React.FC<Props> = ({ rosterList }: Props) => {
 
// };

export default Roster;
