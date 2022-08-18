import React from 'react'
import { Card, Text } from "@nextui-org/react";
import { MdPendingActions, MdOutlineChevronRight, MdPayments, MdOutlineStarHalf } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';    

const data = [
    {
        text: "9 pending orders",
        icon: <MdPendingActions />,
        subText: "Process now"
    },
    {
        text: "24 orders delivered",
        icon: <TbTruckDelivery />,
        subText: "View stats",
    },
    {
        text: "₹16450 received",
        icon: <MdPayments />,
        subText: "View invoice"
    },
    {
        text: "4.3 rating",
        icon: <MdOutlineStarHalf />,
        subText: "View reviews"
    }
]

const Infobar = () => {
  return (
    <div className='infobar-parent-container'>
        {data.map(x => (
            <Card css={{ mw: "300px", mh: "300px" }} style={{background: "black", marginLeft: "12px", marginTop: "20px", color: "white", paddingBottom: "0px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Card.Body>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3>{x.text}</h3>
                        <h3 style={{ marginTop: "4px", fontSize: "28px"}}>{x.icon}</h3>
                    </div>
                    <div style={{display: "flex", justifyContent: "flex-start", cursor:  "pointer"}}>
                        <h5 style={{marginTop: "-12px"}}>{x.subText}</h5>
                        <h4 style={{marginTop: "-10px"}} ><MdOutlineChevronRight size={22} /></h4>
                    </div>
                </Card.Body>
            </Card>
        ))}
    </div>
  )
}

export default Infobar