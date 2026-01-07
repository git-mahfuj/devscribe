import React from 'react'
import { cn } from '@/lib/utils'
import { Chocolate_Classical_Sans } from 'next/font/google'

const Logo = ({
    className , children
}:{
    className?:string,
    children:React.ReactNode
}) => {
  return (
    <div className={cn(
        `` , className
    )}>
       {
        children
       }
    </div>
  )
}

export default Logo