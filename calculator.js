let result=document.getElementById("input-text");

let calculate=(number)=>{
    result.value=result.value+number;
}

let Result=()=>{
  try{

    result.value=eval(result.value)
  }
  catch(err){
    alert("enter the valid input ");
  }
}

function clr(){
    result.value=" 0"
}

function del(){
    result.value=result.value.slice( 0,-1);
}