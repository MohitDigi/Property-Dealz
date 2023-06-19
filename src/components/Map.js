import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "../style/map.css";
// import MapImage from "../images/Maps@2x.png";
// import { Image } from "antd";
const Map = ({ location, zoomLevel }) => {
  return (
    <>
      {/* <Image src={MapImage} preview={false} alt="map-image"/> */}
      <div className="map" >
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};
export default Map;
