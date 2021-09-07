import * as React from 'react';

import Button from 'components/Button';
import Card from 'components/Card';
import { HalfCardText } from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
} from 'components/tables';
import AvatarPic from 'components/AvatarPic';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import { colors } from 'styles/colors';
import { mockWaitingRoom } from 'config/mocks/mockWaitingRoom';
import { mockAuthUser } from 'config/mocks/mockAuthUser';

import { CardTitle, Spots, TeamName } from './styles';

type Props = {
  setCurrentTeamID: (id?: string | number) => void;
};


class TeamsTable extends React.Component{
  state = {
    TeamData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Teams/GetTeams`)
    
    
    const data = await res.json()

    console.log(data)



    this.setState({
      TeamData: data
    });  
  }

  render(){

    const  TeamData  = this.state;
    let TD : any =[]
    TD = TeamData

    return(
      <Card fullWidth withPadding color={colors.blackPanel}>
      <CardTitle>
        Team{' '}
        <Spots>
          • {mockWaitingRoom.slotsFilled}/{mockWaitingRoom.slotsMax}
        </Spots>
      </CardTitle>
      <Table withPadding>
        <thead>
          <TableLineLabels>
            <TableCellLabel alignLeft narrow>
              <HalfCardText>#</HalfCardText>
            </TableCellLabel>
            <TableCellLabel alignLeft>
              <HalfCardText>Team/ Slot</HalfCardText>
            </TableCellLabel>
            <TableCellLabel alignLeft>
              <HalfCardText>Team HeadCoach</HalfCardText>
            </TableCellLabel>
          </TableLineLabels>
        </thead>
        <tbody>
          
            <TableLineValues >
              <TableCellValue disabled={!TD.FullName}>
                {/* <ValueButton flexStart disabled={!item.FullName}>
                  {item.FullName}
                </ValueButton> */}
              </TableCellValue>
              <TableCellValue disabled={!TD.FullName}>
                {TD.FullName ? (
                  <>
                    <AvatarPic name={TD.FullName} />
                    <TeamName>Team {TD.FullName}</TeamName>
                    {/* {[item.manager?.id, item.team.owner?.id].includes(
                      mockAuthUser.id
                    ) && (
                      // <Button
                      //   red
                      //   small
                      //   withArrow={false}
                      //   inline
                      //   onClick={() => setCurrentTeamID(item.team?.id)}
                      // >
                      //   Edit Your Team
                      // </Button>
                    )} */}
                  </>
                ) : (
                  <TeamName disabled>Slot Avaliable</TeamName>
                )}
              </TableCellValue>
              <TableCellValue disabled={!TD.HeadCoach}>
                {/* <ValueButton flexEnd disabled={!item.HeadCoach}>
                  {item.HeadCoach || item.HeadCoach || 'Free Spot'}
                </ValueButton> */}

<TeamName> {TD.HeadCoach} </TeamName>
              </TableCellValue>
            </TableLineValues>
       
        </tbody>
      </Table>
    </Card>

    );

  }

}


// const TeamsTable: React.FC<Props> = ({ setCurrentTeamID }: Props) => {
//   return (
    // <Card fullWidth withPadding color={colors.blackPanel}>
    //   <CardTitle>
    //     Team{' '}
    //     <Spots>
    //       • {mockWaitingRoom.slotsFilled}/{mockWaitingRoom.slotsMax}
    //     </Spots>
    //   </CardTitle>
    //   <Table withPadding>
    //     <thead>
    //       <TableLineLabels>
    //         <TableCellLabel alignLeft narrow>
    //           <HalfCardText>#</HalfCardText>
    //         </TableCellLabel>
    //         <TableCellLabel alignLeft>
    //           <HalfCardText>Team/ Slot</HalfCardText>
    //         </TableCellLabel>
    //         <TableCellLabel alignRight>
    //           <HalfCardText>Team Manager</HalfCardText>
    //         </TableCellLabel>
    //       </TableLineLabels>
    //     </thead>
    //     <tbody>
    //       {mockWaitingRoom.list.map((item, i) => (
    //         <TableLineValues key={i}>
    //           <TableCellValue disabled={!item.team}>
    //             <ValueButton flexStart disabled={!item.team}>
    //               {item.slot}
    //             </ValueButton>
    //           </TableCellValue>
    //           <TableCellValue disabled={!item.team}>
    //             {item.team ? (
    //               <>
    //                 <AvatarPic img={item.team.logo} name={item.team.name} />
    //                 <TeamName>Team {item.team.name}</TeamName>
    //                 {[item.manager?.id, item.team.owner?.id].includes(
    //                   mockAuthUser.id
    //                 ) && (
    //                   <Button
    //                     red
    //                     small
    //                     withArrow={false}
    //                     inline
    //                     onClick={() => setCurrentTeamID(item.team?.id)}
    //                   >
    //                     Edit Your Team
    //                   </Button>
    //                 )}
    //               </>
    //             ) : (
    //               <TeamName disabled>Slot Avaliable</TeamName>
    //             )}
    //           </TableCellValue>
    //           <TableCellValue disabled={!item.team}>
    //             <ValueButton flexEnd disabled={!item.team}>
    //               {item.manager?.name || item.team?.owner?.name || 'Free Spot'}
    //             </ValueButton>
    //           </TableCellValue>
    //         </TableLineValues>
    //       ))}
    //     </tbody>
    //   </Table>
    // </Card>
//   );
// };

export default React.memo(TeamsTable);
