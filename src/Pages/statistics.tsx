import {useState} from 'react'
import styled from "styled-components";
import "./LandingPage.css"



const Button = styled.button`
    background-color: #3949ab;
    color:  white;
    padding: 5px 20px;
    border-radius: 5px;
    margin-top: 150px;
    `
    
    const Button1 = styled.button`
    background-color: #3949ab;
    color:  white;
    padding: 5px 15px;
    border-radius: 5px;
    margin-left: 20px;
    `

    const Button2 = styled.button`
    background-color: #3949ab;
    color:  white;
    padding: 5px 20px;
    border-radius: 5px;
    margin-left: 20px;
    `

function clickMe(){
    alert("You clicked me!");
}


export default function Statistics() {
    const [visible, setVisible] = useState<boolean>(false);
    const [poorCount, setPoorCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);
    const [goodCount, setGoodCount] = useState(0);
    const avgNumber = (goodCount + neutralCount + poorCount) / 3;
    const percentage = Math.floor((goodCount / (goodCount + neutralCount + poorCount) * 100));
    return (
        <div className='ml-[20px]'>
            
            <Button onClick={() => {setPoorCount(poorCount + 1); setVisible(true); } }>Poor</Button>

            <Button1 onClick={() => {setNeutralCount(neutralCount + 1); setVisible(true); } }>Neutral</Button1>

            <Button2 onClick={() => {setGoodCount(goodCount + 1); setVisible(true); } }>Good</Button2>

            <div>
            <h1 className="font-extrabold mt-[-7rem] text-4xl mb-2">Statistiikka</h1>
            <p className={ visible ? "hidden m-1 p-0" : "block font-bold m-0 p-0" }>Ei yhtään palautetta annettu</p>
            <table className="mt-24 text-left text-xl">
                <tbody className={ visible ? "block font-bold" : "hidden" }>
                    <tr>
                        <td className="pr-5">Hyvä:</td>
                        <td id="good">{ goodCount }</td>
                    </tr>
                    <tr>
                        <td className="pr-5">Neutraali:</td>
                        <td id="neutral">{ neutralCount }</td>
                    </tr>
                    <tr>
                        <td className="pr-5">Huono:</td>
                        <td id="poor">{ poorCount }</td>
                    </tr>
                    <tr>
                        <td className="pr-5">Keskiarvo:</td>
                        <td id="average">{ avgNumber }</td>
                    </tr>
                    <tr>
                        <td className="pr-5">Positiivisia:</td>
                        <td id="percentage">{ percentage }%</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

    );
}