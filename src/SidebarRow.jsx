import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'
// destructuring props parameter with title obj
function SidebarRow({src, Icon, title}) {
  return (
    <div className='sidebarRow'>
        {/* if there is a src prop, the component will be rendered */}
        {src && <Avatar src={src}/>}
        {Icon && <Icon />}
        
        {/* title instead of props.title */}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow