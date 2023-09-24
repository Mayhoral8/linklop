import React, {useState, useContext} from "react";
import { ContextCreate } from "./context";
import linkImg from './img/link-lop-white.png'
import QRCode from 'qrcode'







const Home = ()=>{
    const {setModalMsg, setModal, setIsLoading, setQrCode} = useContext(ContextCreate)
    const [link, setLink] = useState('')
    const year = new Date().getFullYear()


    const handleLink =(e)=>{
        e.preventDefault()
        setLink(e.target.value)
    }
    

    const shortenLink = async ()=>{
        setIsLoading(true)
        try{
            const response = await fetch('http://localhost:8000/api/shorten',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    link
                })
            })
            const code = await QRCode.toDataURL(link)
            setQrCode(code)
            const responseData = await response.json()
            
            if (!response.ok){
                throw new Error(responseData.message)
            }
            
            console.log(responseData)
            setModalMsg(responseData.message)
            setModal(true)

            setIsLoading(false)
        }catch(err){
            setIsLoading(false)
                console.log(err)
        }
    }
return(<>
<section className="mt-14 lg:w-4/5 lg:mx-auto w-full grid-rows-2 justify-center h-96 grid lg:grid-cols-2 lg:pt-6 lg:rounded-xl lg:px-20">
    <div className="flex flex-col mx-auto w-full space-y-8 lg:space-y-10">
    <div className="flex flex-col space-y-5">
     <div className="flex flex-row mt-16 lg:mt-20 lg:mr-auto lg:text-start">   
    <h1 className=" font-bold text-2xl text-gray-800 capitalize text-center mx-auto lg:text-start">URL <span className="text-blue-500 font-bold">Shortner</span> <br className="hidden lg:visible"/> & <br className=""/>QR Code <span className="text-blue-500 font-bold">Generator</span></h1>
    </div>
    <p className="text-xs lg:text-sm text-center lg:text-start">Free tool to shorten url characters<br/>  and generate QR codes. <br/>For business owners and professionals</p>
    </div>
    <div className=" w-full lg:w-4/5 h-20 mt-20 flex lg:mr-auto  flex-row">
<input value={link} onChange={handleLink} placeholder={`🔗input or paste url`} className="focus:outline-none px-2 w-full rounded-l-md shadow-md h-10" />
<button onClick={shortenLink} className="bg-blue-600 text-white rounded-r-md text-sm w-20 mr-auto">Shorten</button>
</div>
    </div>
    <main className="main lg:h-96 lg:w-96 w-64 h-64  mt-16 lg:mt-0 mx-auto order-2">
</main>

</section>
<section className="description py-2  mx-auto grid grid-rows-2 bg-white border rounded-lg  justify-center lg:mt-10 mt-36 absolute shadow-lg h-32  overflow-visible left-0 right-0 lg:w-96 w-3/4 ">
    <h1 className="text-center font-bold text-gray-800 leading-5">One Short Link, <br/>Infinte Impossibilities</h1>
<p className=" text-xs px-4 text-center text-gray-800 leading-4">When used well, a short link is a powerful marketing tool <br className="hidden lg:visible"/> not just a link, it is the journey betwenen your customers <br/> and their destination</p>
</section>
<section className="mx-auto text-center lg:mt-28 mt-52 bg-gray-700 pt-20 lg:h-64">
    <div className="flex space-x-2 justify-center">
    <h2 className="font-thin text-2xl text-white">How It</h2>
    <h2 className="text-2xl font-bold text-blue-500">Works</h2>
    </div>
    <article className="pt-4">
        <div className="  text-sm lg:w-5/6 w-1/2 bg-gray-600 rounded-lg lg:h-12 h-52 grid lg:grid-cols-5 grid-rows-5 justify-evenly lg:px-2 mx-auto lg:pt-4 items-center">
            <div className="flex flex-row  space-x-2 text-white items-center mx-auto justify-center">
            <h1 className="rounded-full bg-white text-blue-500 w-4 h-4 text-xs">1</h1>
            <h2>Input link</h2>
            </div>
            <div className="flex flex-row space-x-2 text-white items-center mx-auto justify-center ">
            <h1 className="rounded-full bg-white text-blue-500 w-4 h-4 text-xs">2</h1>
            <h2>Shorten</h2>
            </div>
            <div className="flex flex-row space-x-2 text-white items-center mx-auto ">
            <h1 className="rounded-full bg-white text-blue-500 w-4 h-4 text-xs">3</h1>
            <h2>Copy url</h2>
            </div>
            <div className="flex flex-row space-x-2 text-white items-center mx-auto">
            <h1 className="rounded-full bg-white text-blue-500 w-4 h-4 text-xs">4</h1>
            <h2>Share</h2>
            </div>
            <div className="flex flex-row space-x-2 text-white items-center mx-auto">
            <h1 className="rounded-full bg-white text-blue-500 w-4 h-4 text-xs">5</h1>
            <h2>Analyze</h2>
            </div>
        </div>
    </article>


    <article className="grid grid-rows-3 lg:grid-cols-3 space-y-2 mx-auto mt-4 lg:px-52">
    </article>

</section>
<section className="bg-blue-500 h-96 w-full text-white grid lg:grid-cols-2 lg:justify-between grid-rows-3 space-y-8 lg:space-y-0 lg:px-64  lg:pt-20 pt-4">
    <article className="flex flex-col space-y-3 h-96">
        <button className="mark w-32 lg:mr-64 mx-auto rounded-xl text-xs h-7 font-bold">Marketing strategy</button>
<h1 className="text-xl lg:text-2xl text-center lg:text-start leading-6 font-bold">
Optimize your marketing <br className="hidden lg:visible"/> strategy
</h1>
<p className="lg:text-sm text-xs px-5 leading-4 lg:px-0 text-center lg:text-start">Understanding your users and customers will help you
increase your conversion. Our system allows you to track
everything. Whether it is the amount of clicks, the country, 
or the referrer, the data is there for you to analyze. </p>
    </article>
    <article className="lg:h-52 h-32 w-3/4 grid rounded-md mark mx-auto lg:ml-auto ">

    </article>
    <div className="mx-auto">
<button className=" lg:mt-28  mt-8 h-8 text-sm lg:mr-72 mx-auto bg-white rounded-md text-blue-400 w-24 ">Get Started</button>
    </div>
</section>
<section className="h-44 flex flex-col space-y-2">
    <h1 className="text-xl font-bold text-center pt-5"> Marketing with confidence</h1>
    <p className="text-center text-sm px-2 ">Start tracking your links now to better serve your customers</p>
    <div className="mx-auto">
<button className=" lg:mt-12  mt-8 h-8 text-sm  mx-auto text-white rounded-md bg-blue-400 w-24 ">Get Started</button>
    </div>
    
</section>
<footer className="bg-gray-700 h-52 w-full flex flex-col justify-evenly pt-2 ">
    <div className="mx-auto">
        <img src={linkImg} alt="logo" className="w-28"/>
    </div>
        <div className="mx-auto text-center text-blue-500">
        <div className="">
         <ul className="lg:grid lg:grid-cols-3 lg:space-x-5">
            <li>
               About 
            </li>
            <li>
                Contact
            </li>
                <li>
                Pricing
                </li>
                <li>
                
                </li>
         </ul>
        </div>

       
        </div>
        <div className=" text-center flex text-white text-sm flex-row  mx-auto justify-center">
           <p className="font-light text-sm"> Copyright 
           </p>
            <i className="fas fa-copyright ml-1 mt-1" /> 
             <p className="ml-1 font-light text-sm">
               {`${year} linklop.co`}
              </p> 
        </div>
</footer>
</>)
}


export default Home