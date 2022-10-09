import React from 'react'
import './AddRemoveItemButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function AddRemoveItemButton({ quantity, handleAddItem, handleRemoveItem }) {
  return (
    <div className='btnAddRemove'>
        {quantity !== 0 ? (
            <div className='btnAddRemove-positive'>              
                <FontAwesomeIcon icon={faMinus} aria-hidden='true' onClick={handleRemoveItem}/>                
                <span>{quantity}</span>
                <FontAwesomeIcon icon={faPlus} aria-hidden='true' onClick={handleAddItem}/>
            </div>
            ) : (
            <div className='btnAddRemove-negative'>                                     
                <span>ADD</span>
                <FontAwesomeIcon icon={faPlus} aria-hidden='true' onClick={handleAddItem}/>                
            </div>
        )}
   </div>
  );
}

export default AddRemoveItemButton

