import logo from '../../assets/logo.png'
import { useState} from 'react';
import API from '../../helpers/API';
import Info from '../info/Info';

function Navbar() {
    const [country, setCountry] = useState('');
    const [data, setData] = useState({
        condition: {
            icon:'',
            text:'',
        },
        feelslike_c: '',
        wind_kph:0
    });
    const [location, setLocation] = useState({
        country:'',
        lat:0,
        lon:0,
        region:'',
        localtime:''
    })
    const [error, setError] = useState({
        message:'',
        code:''
    });

    const handleSearch = ()=>{
        API.readAll(`q=${country}`)
        .then((response)=>{
            if(response.current){
            setData(response.current)
            setLocation(response.location)
            setError({
                message:'',
                code:''
            })
            }else{
                console.log(response)
                setError(response.response.data.error)
                setData({
                    condition: {
                        icon:'',
                        text:'',
                    },
                    feelslike_c: '',
                    wind_kph:0
                })
                setLocation(
                    {
                        country:'',
                        lat:0,
                        lon:0,
                        region:'',
                        localtime:''
                    }
                )
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (
        <>
        
            <nav
                className={`bg-[#0e1623] bg-opacity-75 absolute left-0 top-0 z-[1035] h-full w-3/12  overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-200 `}
            >
                <div className="w-full flex justify-center">
                    <img src={logo} className="w-6/12 mt-3"/>
                </div>
                <div className="flex flex-col w-full justify-around mt-3 items-center">
                <input
                    className="shadow h-10 appearance-none border rounded w-full mt-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full text-sm  w-4/6"
                    id="country"
                    type="text"
                    placeholder="Country"
                    onChange={(e)=>setCountry(e.target.value)}
                  />
                  {error.message!==''?<small className='text-red-500 text-lg'>{error.message}</small>:''}
                  <button onClick={handleSearch} className="bg-sky-500 w-4/6 h-10 rounded text-white mt-3 hover:bg-sky-700">Submit</button>
                  
                </div>
                {data.condition.icon!==''&&data.condition.text!==''?
                <Info data={data} location={location}/>
                :''
                }
            </nav>
        </>
    );
}

export default Navbar;
