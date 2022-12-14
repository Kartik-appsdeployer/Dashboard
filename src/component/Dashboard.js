import { React, useState, useEffect } from 'react'
import { db } from '../firebase';
import { Link } from 'react-router-dom';
// import { Bar } from 'react-chartjs-2';
import { ref, onValue } from "firebase/database";
import './dashboard.css'
import Chart from "react-apexcharts";


const Dashboard = () => {

  const [data1, setData1] = useState([])
  const [mydates, setMyDates] = useState([]);
  // const [mydata, setMyData] = useState([])
  let jan = 0;
  let feb = 0;
  let mar = 0;
  let apr = 0;
  let may = 0;
  let june = 0;
  let july = 0;
  let aug = 0;
  let sept = 0;
  let oct = 0;
  let nov = 0;
  let dec = 0;
  const dates = []
  useEffect(() => {
    const dbRef = ref(db, 'Users');
    onValue(dbRef, (snapshot) => {
      let myData = [];
      snapshot.forEach(childSnapshot => {
        let Data = childSnapshot.val();
        myData.push(Data);
        dates.push(Data.Date);
      });
      setData1(myData);
      setMyDates(dates)
    });
  }, []);

  // let String = []
  let totalMonths = []
  let shortMonths = []
  for (let i = 0; i < mydates.length; i++) {
    let String = mydates[i];
    shortMonths.push(String.slice(5, 7));
  }
  for (let i = 0; i < shortMonths.length; i++) {
    if (shortMonths[i] === '1') {
      jan += 1;
    }
    else if (shortMonths[i] === '2') {
      feb += 1;
    }
    else if (shortMonths[i] === '3') {
      mar += 1;
    }
    else if (shortMonths[i] === '4') {
      apr += 1;
    }
    else if (shortMonths[i] === '5') {
      may += 1;
    }
    else if (shortMonths[i] === '6') {
      june += 1;
    }
    else if (shortMonths[i] === '7') {
      july += 1;
    }
    else if (shortMonths[i] === '8') {
      aug += 1;
    }
    else if (shortMonths[i] === '9') {
      sept += 1;
    }
    else if (shortMonths[i] === '10') {
      oct += 1;
    }
    else if (shortMonths[i] === '11') {
      nov += 1;
    }
    else if (shortMonths[i] === '12') {
      dec += 1;
    }
  }
  console.log(jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec);
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
      }
    },
    series: [
      {
        name: "Total Users",
        data: [jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec]
      }
    ]
  };


  return (
    <div>
      <div className="NavBar">
        <h1>Dashboard</h1>
        <div className="RightCorner">
          <Link className='Login' to='/'>Sign Up as User</Link>
        </div>
      </div>

      <div className='Tables' style={{ marginTop: "100px" }}>

        <div className="first">
          <h1 className="H1">Today's Registered Users</h1>
          <table>
            <tr>
              <th>S NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Registration</th>
            </tr>
            {
              data1.map((object) => (
                object.Date === new Date().toJSON().slice(0, 10) ? <tr>
                  <th scope='row'>-></th>
                  <td>{object.Name}</td>
                  <td>{object.Email}</td>
                  <td>{object.Date}</td>
                </tr> :
                  <tr></tr>
              ))
            }
          </table>
        </div>


        {/* <div>
          
        </div> */}

        <div>
          <h1 className="H1">All Registered Users</h1>
          <table>
            <tr>
              <th>S NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Registration</th>
            </tr>
            {
              data1.map((object, index) => (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{object.Name}</td>
                  <td>{object.Email}</td>
                  <td>{object.Date}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </div>

      <div className="Graph">
        <div className="Monthly">
          <h1 className="H1">Monthly Registered Users</h1>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
