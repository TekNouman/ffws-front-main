import * as React from 'react';

import { colors } from 'styles/colors';
import Card from 'components/Card';
import {
  HalfCardHeader,
  HalfCardText,
  PlayerName,
  PlayerLabel,
  FlexColumn,
} from 'components/ui';
import {
  Table,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
  THeadSticky,
} from 'components/tables';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import AvatarPic from 'components/AvatarPic';
import { DraftPlayersListsType } from 'typings/drafts';
import { PlayerType } from 'typings/players';

import { Wrapper, TableScroll } from './styles';

const renderValuesNames = (valuesNames: string[]): React.ReactNode => (
  <TableLineLabels>
    <TableCellLabel alignLeft>
      <HalfCardText>RK</HalfCardText>
    </TableCellLabel>
    <TableCellLabel alignLeft>
      <HalfCardText>Player</HalfCardText>
    </TableCellLabel>
    {valuesNames.map((valueName, i) => (
      <TableCellLabel key={'valueName_' + i}>
        <HalfCardText>{valueName}</HalfCardText>
      </TableCellLabel>
    ))}
  </TableLineLabels>
);

const renderValues = (values: number[]): React.ReactNode =>
  values.map((value, i) => (
    <TableCellValue key={'value_' + i}>
      <ValueButton>{value}</ValueButton>
    </TableCellValue>
  ));

type Props = {
  playersList: DraftPlayersListsType;
  handlePlayerClick: (player: PlayerType) => void;
};


class DraftPlayersList extends React.Component{
  state = {
    PlayerData: []
    
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Player/GetPlayers`)   
    const data = await res.json()
   // console.log(data)
    this.setState({
      PlayerData: data
    });  
  }

  render(){

    const  {PlayerData}  = this.state;
     let PD : any =[]
     PD = PlayerData;
    return(
      <Wrapper>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>Players</HalfCardHeader>
        <TableScroll>
          <Table withPadding>
            {/* <THeadSticky>
              {renderValuesNames(playersList.valuesNames)}
            </THeadSticky> */}
            <tbody>
              {PlayerData.map((player, i) => {
                return (
                   <TableLineValues
                    key={'player_' + i}
                    // $disable={!player.isFree}
                    // onClick={() => this.props.handlePlayerClick(player.DraftPlayerId)}
                  >
                    <TableCellValue>
                    {/* <AvatarPic
                      
                       name={PD.FirstName}
                     /> */}
                    </TableCellValue>
                    <TableCellValue >
                      {/* <AvatarPic
                       
                        name={player.FirstName}
                      /> */}
                      <FlexColumn>
                        <PlayerName>{PD.FirstName}</PlayerName>
                        <PlayerLabel>{PD.Position}         ,            {PD.Team}</PlayerLabel>
                      </FlexColumn>
                    </TableCellValue>

                    



                    {/* <PlayerName>{player.FirstName}</PlayerName> */}
                  </TableLineValues>
                );
              })}
            </tbody>
          </Table>
        </TableScroll>
      </Card>
    </Wrapper>

    );
  }
}


// const DraftPlayersList: React.FC<Props> = ({
//   playersList,
//   handlePlayerClick,
// }: Props) => {
//   return (
    // <Wrapper>
    //   <Card fullWidth color={colors.blackPanel}>
    //     <HalfCardHeader>Players</HalfCardHeader>
    //     <TableScroll>
    //       <Table withPadding>
    //         <THeadSticky>
    //           {renderValuesNames(playersList.valuesNames)}
    //         </THeadSticky>
    //         <tbody>
    //           {playersList.players.map((player, i) => {
    //             return (
    //               <TableLineValues
    //                 key={'player_' + i}
    //                 $disable={!player.isFree}
    //                 onClick={() => handlePlayerClick(player.info)}
    //               >
    //                 <TableCellValue>
    //                   <ValueButton flexStart>{player.info.rk}</ValueButton>
    //                 </TableCellValue>
    //                 <TableCellValue flexAlign>
    //                   <AvatarPic
    //                     img={player.info.pic}
    //                     name={player.info.name}
    //                   />
    //                   <FlexColumn>
    //                     <PlayerName>{player.info.name}</PlayerName>
    //                     <PlayerLabel>{player.info.label}</PlayerLabel>
    //                   </FlexColumn>
    //                 </TableCellValue>
    //                 {renderValues(player.values)}
    //               </TableLineValues>
    //             );
    //           })}
    //         </tbody>
    //       </Table>
    //     </TableScroll>
    //   </Card>
    // </Wrapper>
//   );
// };

export default React.memo(DraftPlayersList);
