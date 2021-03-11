import React from 'react';
import './Selection.css'
const Selection = (props) => {
    
    const select = props.selection;
    console.log(select);
    const {name, price} = select;
    let grandTotal = select.reduce((total, select) => total + select.price, 0);
    let totalPlayer = select.length;
    let count = "M";
    if(grandTotal >= 1000){
        grandTotal = grandTotal / 1000;
        count = 'B';
    }
    return (
         <div className="selection-container">
             <div className="selected-players">
             {
                select.map(select => <p className="individual-player">Player:<b> {select.name}</b> 
                <br/>
                Salary:<b> ${select.price}M</b></p>)
             }
             </div>
             <div className="total-area">
                <h5>Players Selected: {totalPlayer}</h5>
                <h4>Grand Total: ${grandTotal}{count}</h4>
             </div>
         </div>
    );
};

export default Selection;