import React from 'react'

const Productcard = ({product}) => {
  return (
    <div
    style={{
      marginTop:"20px",
      border: "2px solid black",
      borderRadius: "10px",
      padding: "10px",
      width: "250px",
      height:"550px",
      textAlign: "center",
      overflow:'hidden',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
      
    }}
  >
    <img
      src={product.image}
      alt={product.title}
      style={{ maxWidth: "100%",height:"250px",objectFit:'inherit' }}
    />
    <h3>{product.title}</h3>
    <p style={{fontSize:14,flexGrow:1,overflow:'auto',marginTop:"-10px"}}>{product.description}</p>
    <p style={{fontSize:20,flexGrow:1}}>
      <strong>${product.price}</strong>
    </p>
    <button type="button" style={{display:'block',color:'white',backgroundColor:'green',width:'130px',margin:'0 auto'}}
    >Buy Now</button>
    
  </div>
  
);
}

export default Productcard;