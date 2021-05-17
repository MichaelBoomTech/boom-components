import React from 'react';
import './main.css';
import {
   downloadSharer,
   openShareUrl,
   openAddToUrl,
   copyLink,
   generateEventUrl,
} from './helpers';

export default function AddShareIcons(props) {

   if(!props.showAddToIcons && !props.showShareIcons) return null;

   const addToTypes = [ 'google', 'outlook', 'icloud', 'yahoo' ];
   const shareTypes = [ 'facebook', 'linkedin', 'twitter', 'copylink' ];

      
   const addIcons = props.showAddToIcons && addToTypes.map(type => {
      let clickHandler;
      if(type === 'google'  || type === 'yahoo') clickHandler = e => downloadSharer(e, type, props.event);
      if(type === 'outlook' || type === 'icloud') clickHandler = e => openAddToUrl(type, props.event);
      return (
         <span 
            className={ `bmct-addShare-icons ${props.addToIconsCustomClassNames.join(' ')}` }
            onClick={ clickHandler }
         />
      )
   })


   const eventUrl = generateEventUrl(props.event, true, props.boomEventUrlBase);

   const shareIcons = props.showShareIcons && shareTypes.map(type => {
      const clickHandler = type === 'copylink' ? e => copyLink(props.event) : e => openShareUrl(e, type, eventUrl);
      return (
         <span 
            className={ `bmct-addShare-icons ${props.shareIconsCustomClassNames.join(' ')}` }
            onClick={ clickHandler }
         />
      )
   })


   return (
      <>
         <div className="bmct-icons-container">
            <div>{ props.addToSectionTitle }</div>
            <div>{ addIcons }</div>
         </div>
         <div className="bmct-icons-container">
            <div>{ props.shareSectionTitle }</div>
            <div>{ shareIcons }</div>
         </div>
      </>

   )

}