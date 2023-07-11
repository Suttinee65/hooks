import React,{ useContext} from "react";
import { userContext } from "/Context";

export default function Header() {
    let user = useContext(userContext);

    const Headerstyle = {
        backgroundcolor: "#cee",
        textAlign: 'center',
        padding: 5,

    };

    return (
        <div style={Headerstyle}>
            <a href="#">Home</a>&nbsp;&nbsp;
            <a href="#">Product</a>&nbsp;&nbsp;
            <a href="#">Contact Us</a>&nbsp;&nbsp; ชื่อสมาชิก {{ user }}
        </div>
        
    );

}