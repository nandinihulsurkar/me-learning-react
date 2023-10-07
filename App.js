import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s" />                
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const restCardStyle = {
    backgroundColor: "#F0F0F0"
}

const RestorentCard = (props) => {
    //Please note the different ways of reading the props here.
    const {restData} = props;
    const {restroName, cuisins, starRating, delivaryTime} = restData;
    return(
        <div className="restro-card" style={restCardStyle} >
            <img className="restorent-logo" alt="restorent logo here" src={restData.imgHere} />
            <h3>{restroName}</h3>
            <h5>{cuisins}</h5>
            <h5>{starRating}</h5>
            <h5>{restData.delivaryTime}</h5>
        </div>
    );
}

const restroDataList = [ 
      {
        "id": "uwbsdganbkasis",
        "restroName": "Pakashala",
        "imgHere": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPvoCSSHvp9m_x-c_G6-pR9WaIHxCG1jVDe1u2HL79g&s",
        "cuisins": "Pure Veg, Family Restorent",
        "starRating": "4.9 Stars",
        "delivaryTime": "Delivered in 45 mins",
      },
      {
        "id": "sdas",
        "restroName": "Meghana Foods",
        "imgHere": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK4QHW6ufh5YO7BnSIWnY25kGSBz7P_WoLg&usqp=CAU",
        "cuisins": "Veg And Non Veg, taste of Purity",
        "starRating": "4.7 Stars",
        "delivaryTime": "Delivered in 30 mins",
      },
      {
        "id": "weqw",
        "restroName": "KFC",
        "imgHere": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9YXDUYBkfd5XyTT3t4hpHkKg5iMFIubtCw&usqp=CAU",
        "cuisins": "Kentucky Fried Chicken, just for you",
        "starRating": "4.3 Stars",
        "delivaryTime": "Delivered in 20 mins",
      },
      {
        "id": "xzzxxz",
        "restroName": "Nandana",
        "imgHere": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudMc4h9qZONOnFGhjtVju2wfvjFFflsBlSg&usqp=CAU",
        "cuisins": "racie, daal and ghee. Its yummmm",
        "starRating": "4 Stars",
        "delivaryTime": "Delivered in 30 mins",
      },
      {
        "id": "utyut",
        "restroName": "Madhu Fast Food",
        "imgHere": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47Opba0p_WU8F2S_UK_PpExksgeJyIEilKA&usqp=CAU",
        "cuisins": "All The yummy fast food at one place",
        "starRating": "4.2 Stars",
        "delivaryTime": "Delivered in 15 mins",
      }
  ];
  

const Body = () => {
    return(
        <div className="body-container">
            <div className="search-bar">
                Search bar option will come here soon
            </div>
            <div className="restro-container">
                <RestorentCard restData={restroDataList[0]} />
                <RestorentCard restData={restroDataList[1]} />
                <RestorentCard restData={restroDataList[2]} />
                <RestorentCard restData={restroDataList[3]} />
                <RestorentCard restData={restroDataList[4]} />

                {
                    restroDataList.map((resdata, index) => (
                        <RestorentCard key={resdata.id} restData={resdata} />
                    ))

                    //NOTE the key attribute in the component is given as it may generate Warning.
                    //WE can also give index as a key here. but React saya that shoud not use index as keys.
                }           
            </div>
        </div>
    );
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body></Body>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("main_div"));
root.render(<AppLayout />);
