import React, {useState, useContext} from "react";
import signup from './img/signup.png'
import linkImg from './img/link.png'
import money from './img/savings.png'
import { ContextCreate } from "./context";






const Home = ()=>{
    const {setModalMsg, setModal, setIsLoading} = useContext(ContextCreate)
    const [link, setLink] = useState('')
 

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
<section className="mt-14 lg:w-4/5 lg:mx-auto w-full grid-rows-2 h-96 grid lg:grid-cols-2 lg:pt-6 lg:rounded-xl lg:px-32">
    <div className="flex flex-col mx-auto w-full space-y-8 lg:space-y-10">
    <div className="flex flex-col space-y-5">
     <div className="flex flex-row mt-16 lg:mt-20 mx-auto lg:text-start">   
    <h1 className=" font-bold text-2xl text-gray-800 capitalize text-center lg:text-start">Shorten, Save & <br className="hidden lg:visible"/> Share <br/>Your Long <span className="text-blue-500 font-bold">URLS</span></h1>
    </div>
    <p className="text-xs lg:mx-auto lg:text-sm text-center lg:text-start">Free tool to shorten url characters.<br/> For business owners and professionals</p>
    </div>
    <div className=" w-3/4 h-10 mt-20 flex flex-row mx-auto lg:ml-16">
<input value={link} onChange={handleLink} placeholder={`🔗input or paste url`} className="focus:outline-none px-2 w-full rounded-l-md shadow-md " />
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
<section className="h-64 flex flex-col space-y-2">
    <h1 className="text-xl font-bold text-center pt-5"> Marketing with confidence</h1>
    <p className="text-center text-sm px-2 ">Start tracking your links now to better serve your customers</p>
<button className=" lg:mt-16 text-sm  mx-auto text-white rounded-md bg-blue-500 w-24 h-8 mt-2">Get Started</button>
    
</section>
</>)
}


export default Home