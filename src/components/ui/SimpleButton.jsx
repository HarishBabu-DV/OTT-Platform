import React from 'react'

const SimpleButton = ({type,className,children,...props}) => {
  return (
    <button type={type} className={`${className}`} {...props}>
        {children}
    </button>
  )
}

export default SimpleButton