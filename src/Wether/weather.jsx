import React, { useEffect, useMemo, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn
} from "mdb-react-ui-kit";
import { Spinner } from "@chakra-ui/react";



export default function Weather() {
  const [Search, setSearch] = useState("")
  const [Searchvar, setSearchver] = useState("London")
  const [ApiData, setApiData] = useState()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (Searchvar !== "") {
        setLoading(true);
        try {
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4f9d314a6a1a4371b3081606240806&q=${Searchvar}&aqi=no`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setApiData(data);
          setLoading(false);

        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }

      console.log(Searchvar)
    };

    fetchData();
  }, [Searchvar])
  console.log(Search)

  let Today = Math.floor(Math.random() * 100)
  let Monday = Math.floor(Math.random() * 100)
  let Tue = Math.floor(Math.random() * 100)
  let Wed = Math.floor(Math.random() * 100)
  let thur = Math.floor(Math.random() * 100)
  let Fri = Math.floor(Math.random() * 100)

  var x = useMemo(() => {
    console.log("USE MEMO")
    return [
      { day: "Today", temp: Today },
      { day: "Monday", temp: Monday },
      { day: "Tuesday", temp: Tue },
      { day: "Wednesday", temp: Wed },
      { day: "Thursday", temp: thur },
      { day: "Friday", temp: Fri },

    ];
  }, [Searchvar])

  console.log(x)

  return (
    <section className="vh-100">
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="9" lg="7" xl="5">

            <MDBCard
              className="text-white bg-image shadow-4-strong"
              style={{
                backgroundImage: "url(https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif)"
              }}
            >
              <MDBCardHeader className="p-4 border-0">

              
                <div className="input-box" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                  <MDBInput label="Search" id="typeText" type="text" style={{ backgroundColor: "#fff" }} onChange={(e) => setSearch(e.target.value)} value={Search} />
                  <MDBBtn className='me-1' color='success' style={{ width: "8rem" }} onClick={() => setSearchver(Search)

                  }>
                    Search
                  </MDBBtn>
                </div>
                {loading ? <Spinner thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl' /> : ApiData && (
                    <div className="text-center mb-3">
                      <p className="h2 mb-1">{ApiData.location.name}</p>
                      <p className="mb-1">{ApiData.location.country}</p>
                      <p className="display-1 mb-1">{ApiData.current.temp_c}°C</p>
                      <span className="">Pressure:{ApiData.current.pressure_mb}</span>
                      <span className="mx-2">|</span>
                      <span className="">Humidity:{ApiData.current.humidity}%</span>
                    </div>
                  )}


              </MDBCardHeader>

              <MDBCardBody className="p-4 border-top border-bottom mb-2">
                <MDBRow className="text-center">
                  <MDBCol size="2">
                    <strong className="d-block mb-2">Now</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block">{x[0].temp}°</strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2">Mon</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block">{x[1].temp}°</strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2">Tue</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block">{x[2].temp}°</strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2">Wed</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block">{x[3].temp}°</strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2">Thu</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block">{x[4].temp}°</strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2">Fri</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block">{x[5].temp}°</strong>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>

              <MDBCardBody className="px-5">
                <MDBRow className="align-items-center">
                  <MDBCol lg="6">
                    <strong>Today</strong>
                  </MDBCol>

                  <MDBCol lg="2" className="text-center">
                    <img className="w-100" src="" alt="" />
                  </MDBCol>

                  <MDBCol lg="4" className="text-end">
                    {x[0].temp}°
                  </MDBCol>
                </MDBRow>

                <MDBRow className="align-items-center">
                  <MDBCol lg="6">
                    <strong>Tomorrow</strong>
                  </MDBCol>

                  <MDBCol lg="2" className="text-center">
                    <img
                      className="w-100"
                      src=""
                      alt=""
                    />
                  </MDBCol>

                  <MDBCol lg="4" className="text-end">
                    25°
                  </MDBCol>
                </MDBRow>

                <MDBRow className="align-items-center">
                  <MDBCol lg="6">
                    <strong>Day after tommorow</strong>
                  </MDBCol>

                  <MDBCol lg="2" className="text-center">
                    <img className="w-100" src="" alt="" />
                  </MDBCol>

                  <MDBCol lg="4" className="text-end">
                    65°
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
  );
}