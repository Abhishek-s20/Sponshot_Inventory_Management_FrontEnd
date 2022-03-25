import react, {useState} from "react";
import Card from "./Card";
import axios from "axios";


const Main=()=>{
    const [search, setSearch] = useState("");
    const [bookData, setData]=useState([]);
    const searchBook=(evt)=>
    {
        if(evt.key ==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA7KhxjdQ_212sdgwBXOla0Jb-Rd8YaVm0'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                
                    
                <div className="row1">
                    <h1>" A Book is a gift<br/> You can open again and again "</h1>
                </div>
                
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                        <button>Search</button>
                </div>
                    {/* <img src="./images/bg.jpg" alt="not working why??"/>      */}
                </div> 
            </div>
            
            <div className = "container">
            {
                <Card book={bookData}/>       
            } 
               
            </div>
    
        </>
    )
}
export default Main;