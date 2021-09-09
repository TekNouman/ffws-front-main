import * as React from 'react';

import Card from 'components/Card';
import {
  HalfCardText,
  HalfCardHeader,
  SecondaryTextColor,
} from 'components/ui';
import { colors } from 'styles/colors';
import {
  Table,
  THeadSticky,
  TableLineLabels,
  TableCellLabel,
  TableLineValues,
  TableCellValue,
} from 'components/tables';
import TableCellTeam from 'components/TableCellTeam';
import ValueButton from 'components/lists/UserList/components/ValueButton';
import { StandingsTeamsListType, StandingsTeamType } from 'typings/teams';

import { StandingsCardWrapper, TableScroll } from './styles';
import { render } from 'nprogress';

const HIGHTLIGHTED_LIST_NUMBERS = 3;

const renderValuesNames = (valuesNames: string[]): React.ReactNode => (
  <TableLineLabels>
    <TableCellLabel>
      <HalfCardText>#</HalfCardText>
    </TableCellLabel>
    <TableCellLabel alignLeft withPlayerWidth>
      <HalfCardText>Team</HalfCardText>
    </TableCellLabel>
    {valuesNames.map((valueName, j) => (
      <TableCellLabel key={'valueName_' + j}>
        <HalfCardText>{valueName}</HalfCardText>
      </TableCellLabel>
    ))}
  </TableLineLabels>
);

const renderValues = (team: StandingsTeamType): React.ReactNode =>
  team.values.map((value, l) => {
    return (
      <TableCellValue key={'value_' + l}>
        <ValueButton>{value}</ValueButton>
      </TableCellValue>
    );
  });
const renderTeams = (teams: StandingsTeamType[]): React.ReactNode => {
  return teams.map((team, k) => (
    <TableLineValues key={`team_${k}`}>
      <TableCellValue highlighted={k < HIGHTLIGHTED_LIST_NUMBERS}>
        <ValueButton>{k + 1}</ValueButton>
      </TableCellValue>
      <TableCellTeam  />
      {renderValues(team)}
    </TableLineValues>
  ));
};

type Props = {
  teamList: StandingsTeamType;
};

class StandingsCard extends React.Component{
  state = {
    RosterData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Looby/LeaguesStandings`)     
    const data = await res.json()
   // console.log(data)
    
    this.setState({
      RosterData: data
    });  
  }
    render(){
       
     
      const {RosterData} = this.state;
      return(
        <StandingsCardWrapper>
        <Card fullWidth fullHeight color={colors.blackPanel}>
          <HalfCardHeader>
            Standings <SecondaryTextColor> </SecondaryTextColor>
          </HalfCardHeader>
          <TableScroll>
            <Table>
              
              <THeadSticky> 
                
              </THeadSticky>
              <THeadSticky> 
                {/* <TableCellValue >
                <ValueButton>1</ValueButton>
               
                </TableCellValue> */}



                
              </THeadSticky>
              {RosterData.map((league, i) => (
              <TableLineValues key={`team_${i}`}>
      <TableCellValue highlighted={i < HIGHTLIGHTED_LIST_NUMBERS}>
        <ValueButton>{i + 1}</ValueButton>
      </TableCellValue>
      <TableCellTeam {...league} data={league} key={i} />
      {/* {renderValues(league)} */}
    </TableLineValues>
    
           
    ))}

          //     {/* {RosterData.map((league, i) => (
          //   // <DraftLeagueCard {...league} data={league} key={i} />
          //   <tbody>  
              
          //     <TableLineValues >
          //     <TableCellTeam {...league} data={league} key={i} />
          //     </TableLineValues>
            
          //   </tbody>
          //  */}
           
          
              
            </Table>
          </TableScroll>
        </Card>
      </StandingsCardWrapper>

      );
    }
  }
// const StandingsCard: React.FC<Props> = ({ teamList }: Props) => {
//   return (
    // <StandingsCardWrapper>
    //   <Card fullWidth fullHeight color={colors.blackPanel}>
    //     <HalfCardHeader>
    //       Standings <SecondaryTextColor>• 12</SecondaryTextColor>
    //     </HalfCardHeader>
    //     <TableScroll>
    //       <Table>
    //         <THeadSticky>{renderValuesNames(teamList.valuesNames)}</THeadSticky>
    //         <tbody>{renderTeams(teamList.teams)}</tbody>
    //       </Table>
    //     </TableScroll>
    //   </Card>
    // </StandingsCardWrapper>
//   );
// };

export default StandingsCard;
