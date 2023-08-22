import React, { useState, useEffect } from 'react';
function App() {
  //flags
  const [inputsColor,setInputsColor]=useState(
    {
      flag1:'white',
      flag2:'white',
      flag3:'white',
    }
  )

  const flags=[
    'PUIUT{F1RST_FL4G_N0T_BAD}',
    'PUIUT{S3C0ND_FL4G_WELL_DONE_BUT_STILL_WORK}',
    'PUIUT{TH1RD_FL4G_WElCOME_TO_THE_CLUB_S4MSUNG}',
  ]

  const tips=[
    'We need to inspect better the html for the first flag',
    'The second flag is the heart of design and in front of her eyes ',
    'The third flag is beyond you IMAGEination',
  ]

  const styleInput={
    width:'100%',
    height:'50px',
    fontSize:'20px',
    textAlign:'center',
    marginTop:'10px',
    marginBottom:'10px',
  }

  const styleButton={
    width:'100%',
    height:'50px',
    fontSize:'20px',
    textAlign:'center',
    marginTop:'10px',
    marginBottom:'10px',
  }

  const verifyFlag=(flag)=>{
    if(flag===flags[0]){
      alert('Correct flag 1')
      setInputsColor({...inputsColor,flag1:'green'})
    }else if(flag===flags[1]){
      alert('Correct flag 2')
      setInputsColor({...inputsColor,flag2:'green'})
    }else if(flag===flags[2]){
      alert('Correct flag 3')
      setInputsColor({...inputsColor,flag3:'green'})
    }else{
      alert('Wrong flag')
    }
  }

  const body=()=>{
    //  I want to make ctf website, but I want to have three inputs in left to verify the flags and in right 
    // to show the tips and then to display green color that is correct or red color that is wrong and close input 
    // after is correct and also a image from public folder that display the flag that is blocked over by a black box
    return (
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <div style={{width:'50%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <input style={{...styleInput,backgroundColor:inputsColor.flag1}}
          type="text" placeholder="Flag 1" id = "flag1" />
          <button style={styleButton} onClick={()=>verifyFlag(document.getElementById('flag1').value)}>Verify</button>
          <input style={{...styleInput,backgroundColor:inputsColor.flag2}}
           type="text" placeholder="Flag 2" id='flag2' />
          <button style={styleButton} onClick={()=>verifyFlag(document.getElementById('flag2').value)}>Verify</button>
          <input style={{...styleInput,backgroundColor:inputsColor.flag3}}
          type="text" placeholder="Flag 3" id='flag3' />
          <button style={styleButton} onClick={()=>verifyFlag(document.getElementById('flag3').value)}>Verify</button>
          

        </div>
        <div style={{width:'50%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <div style={{width:'100%',height:'50%',display:'flex',flexDirection:'column',
            position:'relative',
            justifyContent:'center',alignItems:'center'}}>
            <img src={'flag.png'} 
              style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',borderRadius:'10px',
              boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',zIndex:'-1'}}
            />
            <h3 style={{fontSize:'20px',textAlign:'center',marginTop:'10px',marginBottom:'10px',zIndex:2,
            color:'white',position:'absolute',top:'100px',right:'300px'
            }}>{flags[1]}</h3>
            <div style={{width:'550px',height:'50px',position:'absolute',top:'100px',right:'300px',zIndex:3,
            color:'black',backgroundColor:'black',
              } }></div>
          </div>
          <div style={{width:'100%',height:'50%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <p style={{fontSize:'20px',textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>{tips[0]}</p>
            <p style={{fontSize:'20px',textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>{tips[1]}</p>
            <p style={{fontSize:'20px',textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>{tips[2]}</p>
          </div>
        </div>
      </div>
    )


  }
  


  return body();
}

export default App;
