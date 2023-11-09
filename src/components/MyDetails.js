
const MyDetails = ({theData}) => {
    return(
        <div>
            <h1 className="font-semibold">This data is coimg from Context with the default values. This data will be updated when you click on "Click Me" in the body section. </h1>
            <span>Hi, My Name is {theData.myName}. I Love to {theData.myHobbies}. You can 📲 me on {theData.mno} OR drop an 📧 to {theData.eid} </span>
        </div>
    )
};

export default MyDetails;