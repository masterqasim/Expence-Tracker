import React from 'react'

export default function Header() {
    const [amount,setAmount] = React.useState(9890.0)
    const [inputAmount,setInput] =React.useState()
    const [income,setIncome] =React.useState(9890)
    const [expence,setExpence] =React.useState(0)
    const handleIncome = ()=>{
        setAmount(Number(amount)+Number(inputAmount))
        setIncome(Number(income)+Number(inputAmount))
    }
    const handleExpence = ()=>{
        setAmount(Number(amount)-Number(inputAmount))
        setExpence(Number(expence)+Number(inputAmount))
    }
    return (
        <>
            <h2 style={{margin:'10px 0px'}} >Your Balance : ${amount}</h2>
            <br/>
            <span className="Balance-header">
                <p className="Balance-section">
                    INCOME : ${income}
                </p>
                
                <p className="Balance-section">
                    EXPENCE : ${expence}
                </p>
            </span>
            <input type='number' placeholder='Enter Amount' 
            value={inputAmount}
            onChange={(e)=>{setInput(e.target.value)}}
            style={{
            height:'40px',
            width:'250px',
            border:'1px solid #bed0f5',
            margin:'15px 5px',
            alignSelf:'center',
            borderRadius:'10px',
            fontSize:'18px'
            
            }}/>
            <div style={{display:"flex",justifyContent:'space-evenly',marginTop:'20px'}}>
                <p 
                onClick={handleIncome}
                style={{
                    backgroundColor:'#bed0f5',
                    padding:'10px',
                    borderRadius:'10px',
                    margin:'1px',
                    cursor:'pointer'
                    }}>INCOME</p>
                <p 
                onClick={handleExpence}
                style={{
                    backgroundColor:'#bed0f5',
                    padding:'10px',
                    borderRadius:'10px',
                    margin:'1px',
                    cursor:'pointer'}}>EXPENCE</p>
            </div>
        </>
    )
}
