import * as React from 'react';
import dayjs from 'dayjs';

import { DraftType } from 'typings/drafts';
import { TagButton } from 'components/ui';
import { isDraftFull } from 'utils/drafts';

import { Wrapper, Name, Info } from './styles';

class DraftLeagueCard extends React.Component{
  render(){
    const { data } = this.props; 
    
    return(
      <Wrapper>
      <Name>{data.Name}</Name>
       <Info>
         <div>
           <TagButton>{isDraftFull(data.CreatedDateTime) ? 'Full' : 'Free'}</TagButton>
           <TagButton>
             {data.CreatedDateTime}/{data.CreatedDateTime[1]}
           </TagButton>
           <TagButton>{dayjs(data.CreatedDateTime).format('DD MMM YYYY')}</TagButton>
         </div>
         <TagButton $action $disable={isDraftFull(data.CreatedDateTime)}>
           Enter Draft
         </TagButton>
       </Info>      
</Wrapper>
    );
  }
}

// const DraftLeagueCard: React.FC<DraftType> = ({
//   name,
//   spots,
//   date,
// }: DraftType) => {
//   return (
//     <Wrapper>
//        {/* <Name></Name> */}
//       <Name>{name}</Name>
//       {/* <Info>
//         <div>
//           <TagButton>{isDraftFull(draftdata[0].spots) ? 'Full' : 'Free'}</TagButton>
//           <TagButton>
//             {draftdata[0].spots[0]}/{draftdata[0].spots[1]}
//           </TagButton>
//           <TagButton>{dayjs(draftdata[0].date).format('DD MMM YYYY')}</TagButton>
//         </div>
//         <TagButton $action $disable={isDraftFull(draftdata[0].spots)}>
//           Enter Draft
//         </TagButton>
//       </Info> */}

// <Info>
//         <div>
//           <TagButton></TagButton>
//           <TagButton>
           
//           </TagButton>
//           <TagButton></TagButton>
//         </div>
//         <TagButton >
//           Enter Draft
//         </TagButton>
//       </Info>

//     </Wrapper>
//   );
// };


//const draftdata: DraftType[]  = [{id: 'Ultra Series - Superflex Best Ball',name: 'Ultra Series - Superflex Best Ball',spots: 'test',date: '05/05/2021',draft: 'test',buyIn: '0',entry: '0',duration: '0'},];

export default DraftLeagueCard;
