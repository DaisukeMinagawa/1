import React from 'react'
import "./Footer.css"

type Props = { user: { name: string; createdAt: number } }
const Footer = (props: Props) => {
    const title = "This is footer";
    const calcetedNumber = 1 + 2 + 3;
    return (
        <div className='body'>
            <span className=''>{props.user.name}</span>
            <span>{props.user.createdAt}</span>
        </div>
    )
}

export default Footer
