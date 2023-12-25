import React from 'react'
import styles from '../style'

const Map = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <iframe className='w-full' width="1000" height="551" id="gmap_canvas" src="https://maps.google.com/maps?q=Gullu+pizza&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default Map
