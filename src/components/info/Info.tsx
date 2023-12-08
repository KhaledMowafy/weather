import { FaWind } from "react-icons/fa";

type condition = {
    icon:string,
    text:string
}
type Iprops= {
    data: {
        condition:condition,
        feelslike_c: string,
        wind_kph:number
    },
    location:{
        country:string,
        lat:number,
        lon:number,
        region:string,
        localtime:string
     }
}


function Info({data, location}:Iprops) {
  return (
    <>
    <div className="flex justify-center items-center mt-3">
        <div className="w-3/12">
            <img src={data.condition.icon} alt="weather" className='w-3/12' />
        </div>
        <div className="w-5/12">
            <h5 className="font-bold text-white">{data.condition.text}</h5>
        </div>
        </div>
        <div className="flex justify-center items-center items-center mt-3">
        <div className="w-3/12 text-white font-bold text-xl">
            &#8451;
        </div>
        <div className="w-5/12">
            <h5 className="font-bold text-white">{data.feelslike_c}</h5>
        </div>
        </div>
        <div className="flex justify-center items-center items-center mt-3">
        <div className="w-3/12 text-white font-bold text-xl">
        <FaWind />
        </div>
        <div className="w-5/12">
            <h5 className="font-bold text-white">{data.wind_kph}KPH</h5>
        </div>
        </div>
        <div className="flex justify-center items-center items-center mt-3">
        <div className="w-10/12 text-white font-bold mt-3 ">
            <h5 className='font-bold text-white text-2xl text-center'>{location.country} - {location.region}</h5>
            <div className='6/6'>
            <h5 className='font-bold text-white  text-center'>Time: {location.localtime}</h5>
        </div>
            <div className='flex justify-around items-center mt-3'>
                <p>lat: {location.lat}</p>
                <p>long: {location.lon}</p>
            </div>
        </div>
        </div>
       
    </>
  )
}

export default Info
