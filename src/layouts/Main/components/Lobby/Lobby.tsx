import * as React from 'react';

import DraftLeagueCard from 'components/cards/DraftLeagueCard';
import { HalfCard, HalfCardHeader, HalfCardText } from 'components/ui';

import { LeaguesCardsWrapper } from './styles';
import { DraftType } from 'typings/drafts';

//const draftdata: DraftType[]  = [{id: 'Ultra Series - Superflex Best Ball',name: 'Ultra Series - Superflex Best Ball',spots: 'test',date: 'Ultra Series - Superflex Best Ball',draft: 'test',buyIn: '0',entry: '0',duration: '0'},];

class Lobby extends React.Component {
  state = {
    draftData: []
  }

  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Looby/LeaguesForLobby`)
      
    const data = await res.json()

    
    this.setState({
      draftData: data
    });  
  }
  render() {
    const { draftData } = this.state;
    return (
      <HalfCard>
        <HalfCardHeader>
          Lobby
          <HalfCardText>Leagues</HalfCardText>
        </HalfCardHeader>
        <LeaguesCardsWrapper>
          {draftData.map((league, i) => (
            <DraftLeagueCard {...league} data={league} key={i} />
          ))}
        </LeaguesCardsWrapper>
      </HalfCard>
    );
  }
}
  
export default Lobby;


// const Lobby: React.FC = () => {
//   return (
//     <HalfCard>
//       <HalfCardHeader>
//         Lobby
//         <HalfCardText>Leagues</HalfCardText>
//       </HalfCardHeader>
//       <LeaguesCardsWrapper>
//         {draftdata.map((league, i) => (
//           <DraftLeagueCard {...league} key={i} />
//         ))}
//       </LeaguesCardsWrapper>
//     </HalfCard>
//   );
// };

// var draftdata: DraftType[]  = [{id: 'Ultra Series - Superflex Best Ball',name: 'Ultra Series - Superflex Best Ball',spots: 'test',date: 'Ultra Series - Superflex Best Ball',draft: 'test',buyIn: '0',entry: '0',duration: '0'},];

// LeaguesForLobby()
// //export const ddata: DraftType[] = data

// /**
//  * name
//  */
// async function  LeaguesForLobby() {
  
//   const res = await fetch(`https://localhost:44378/api/Looby/LeaguesForLobby`)
//   console.log(res)
//   const data: DraftType = await res.json()

  
//   // if (data) {
//   //   draftdata : data;
//   //   console.log(draftdata)
//   //   return data

// //     //return data
//  // }

// }
// export default Lobby;
