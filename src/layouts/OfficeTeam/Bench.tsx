import * as React from 'react';

import Card from 'components/Card';
import { HalfCardHeader, CardWrapper } from 'components/ui';
import { colors } from 'styles/colors';
import RosterBenchPlayer from 'components/lists/RosterBenchPlayer';
import { RosterBenchPlayerListType } from 'typings/drafts';
import { portals } from 'components/Portal/config';

type Props = {
  list: RosterBenchPlayerListType;
};


class Bench extends React.Component{

  state = {
    BenchData: []
  }
  async componentDidMount(){    
    const res = await fetch(`https://ffws20210904004125.azurewebsites.net/api/Roster/GetRosterBench`)     
    const data = await res.json()
   
    console.log(data)
    this.setState({
      BenchData: data
    });  
  }
  render(){
    const {BenchData} = this.state;
    return(

      <CardWrapper>
      <Card fullWidth color={colors.blackPanel}>
        <HalfCardHeader>Bench</HalfCardHeader>
        {BenchData.map((league, i) => (
      <RosterBenchPlayer {...league} data={league} key={i}/>     
      ))}
       </Card>
    </CardWrapper>


    );
  }



}



// const Bench: React.FC<Props> = ({ list }: Props) => {
//   return (
    // <CardWrapper>
    //   <Card fullWidth color={colors.blackPanel}>
    //     <HalfCardHeader>Bench</HalfCardHeader>
    //     {/* <RosterBenchList list={list} remove portalID={portals.bench} /> */}
    //   </Card>
    // </CardWrapper>
//   );
// };

export default Bench;
