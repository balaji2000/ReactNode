import React, {useState,useEffect} from 'react';

function Header(props){

    let [hero,setHero] = useState(null);
    let [load,setLoad] = useState(false);
    let [ error,setError] = useState(null)

    useEffect(()=>{
        setLoad(true)
        fetch("http://localhost:3000/stock")
        .then((response)=> response.json())
        .then(setHero)
        .then(() => setLoad(false))
        .catch(setError)
    },[])

  

    // const Hero = ()=>{
    //     if (hero === "Devil"){
    //         setHero("Hero")
    //     }
    //     else{
    //         setHero("Devil")
    //     }
    // } 
    if (error) return (<>{error}</>)
    if (load) return (<><h1>Loading...</h1></>)
    if (hero){
    return (
        <div>
            <h1>{props.name} </h1>
            {/* <p>{JSON.stringify(hero)}</p> */}
            <ul>
                {hero.map( (dish) => (<li key={dish.id}>
                    {dish.productName}
                </li>))}
            </ul>

            {/* <button onClick = {Hero}>staeChange</button> */}
        </div>    
    );
}
}

function TestingCondition(props){
    return (
        <div>{props.condition ? <h1>killer</h1>:<h2>king</h2>}</div>
    )
}

//export default Header;
export  {TestingCondition,Header}