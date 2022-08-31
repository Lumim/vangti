import React,{useState,useEffect} from 'react'
import GoogleMapReact from 'google-map-react';

const Dealer=()=> {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className='d-flex justify-content-center'>
        <form>
            <div className='form-group'>
                <label className='form-label'> Enter your currency type:</label>
                <input placeholder='enter currency type'/>
            </div>
            <div>
                <label className='form-label'>Your Address:</label>
                <div style={{ height: '100vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <p
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Dealer