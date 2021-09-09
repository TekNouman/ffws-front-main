import * as React from 'react';

import { PlayerType } from 'typings/players';
import InfoCard from 'components/cards/InfoCard';
import {
  PlayerName,
  SecondaryTextColor,
  FlexColumn,
  PlayerLabel,
} from 'components/ui';
import AvatarPic from 'components/AvatarPic';

import { Wrapper, PicksInner, PlayerItem } from './styles';

type Props = {
  picksList: PlayerType[];
};


class Picks extends React.Component{
  state = {
    PicksData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/DraftApi/GetDraftPick`)    
    const data = await res.json()
   // console.log(data)
    this.setState({
      PicksData: data
    });  
  }

  render(){
    const  PicksData  = this.state;
    let pdta : any = []
    pdta = PicksData
return(
  <Wrapper>
  <InfoCard title="Picks">
    <PicksInner>
 
        <PlayerItem >
          <AvatarPic  name={pdta.PlayerFirstName} />
          <FlexColumn>
            <PlayerName>
             
              {/* <SecondaryTextColor>
                &nbsp;{player.PlayerFirstName}
              </SecondaryTextColor> */}
            {pdta.PlayerFirstName}

            </PlayerName>
            <PlayerLabel></PlayerLabel>
          </FlexColumn>
        </PlayerItem>
    
    </PicksInner>
  </InfoCard>
</Wrapper>
);


  }
}


// const Picks: React.FC<Props> = ({ picksList }: Props) => {
//   return (
    // <Wrapper>
    //   <InfoCard title="Picks">
    //     <PicksInner>
    //       {picksList.map((player, i) => (
    //         <PlayerItem key={i}>
    //           {/* <AvatarPic img={player.pic} name={player.name} /> */}
    //           <FlexColumn>
    //             <PlayerName>
                 
    //               <SecondaryTextColor>
    //                 {/* /&nbsp;{player.additional} */}
    //               </SecondaryTextColor>
    //             </PlayerName>
    //             <PlayerLabel></PlayerLabel>
    //           </FlexColumn>
    //         </PlayerItem>
    //       ))}
    //     </PicksInner>
    //   </InfoCard>
    // </Wrapper>
//   );
// };

export default Picks;
