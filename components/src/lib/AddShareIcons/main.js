import React, { useState } from 'react';
import './main.css';
import {
   downloadSharer,
   openShareUrl,
   openAddToUrl,
   copyLink,
   generateEventUrl,
} from './helpers';

export default function AddShareIcons(props) {

   const [ copyTooltipText, setCopyTooltipText ] = useState(props.copyActionTooltipText);
   
   
   if(!props.showAddToIcons && !props.showShareIcons) return null; 

   const addToTypes = [ 'google', 'outlook', 'icalendar', 'yahoo' ];
   const shareTypes = [ 'facebook', 'linkedin', 'twitter', 'copyLink' ];
      
   const addIcons = props.showAddToIcons && addToTypes.map(type => {
      let clickHandler;
      if(type === 'google'  || type === 'yahoo') clickHandler = e => openAddToUrl(e, type, props.event);
      if(type === 'outlook' || type === 'icalendar') clickHandler = e => downloadSharer(e, type, props.event);
      return (
         <span
            key={type} 
            className={ `bmct-add-share-icon bmct-${type} ${props.addToIconsCustomClassNames.join(' ')}` }
            onClick={ clickHandler }
         />
      )
   })


   const eventUrl = generateEventUrl(props.event, true, props.boomEventUrlBase, props.comp_id, props.instance);

   const shareIcons = props.showShareIcons && shareTypes.map(type => {
      const clickHandler = type === 'copyLink' ? e => copyLink(e, props.event, setCopyTooltipText, props.copiedTooltipText, props.boomEventUrlBase, props.comp_id, props.instance) : e => openShareUrl(e, type, eventUrl);
      return (
         <span
            key={type} 
            className={ `bmct-add-share-icon bmct-${type} ${props.shareIconsCustomClassNames.join(' ')}` }
            onClick={ clickHandler }
            onMouseOut={ () => type === 'copyLink' && setCopyTooltipText(props.copyActionTooltipText) }
         >
            {
               type === 'copyLink' &&
               <span className='copy-tooltip'>{copyTooltipText}</span>
            }
         </span>

      )
   })

   return (
      <div className={`bmct-icons-${props.sequence}`}>
         {
            props.showAddToIcons ?
            <div className={`bmct-icons-container ${props.iconsSectionCustomClassNames.join(' ')}`}>
               <div>{ props.addToSectionTitle }</div>
               <div>{ addIcons }</div>
            </div> :
            null
         }
         {
            props.showShareIcons ?
            <div className={`bmct-icons-container ${props.iconsSectionCustomClassNames.join(' ')}`}>
               <div>{ props.shareSectionTitle }</div>
               <div>{ shareIcons }</div>
            </div> :
            null          
         }
      </div>
   )
}


