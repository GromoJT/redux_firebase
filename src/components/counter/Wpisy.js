import React, {Component,useState,useEffecr} from "react";
import db from "../../firebase";

function Wpisy(){
    const [wpis,setWpis]=useState([])
    const fetchWpisy = async () => {
        const response = db.collection('projects');
        const data = await response.get();
        
    }
}