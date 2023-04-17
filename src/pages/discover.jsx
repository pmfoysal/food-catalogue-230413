import 'leaflet/dist/leaflet.css';
import locations from '../data/locations.json';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Discover() {
   return (
      <main className='p-3 bg-slate-100 flex flex-col min-h-screen'>
         <h1 className='text-lg font-bold mb-4'>Discover us in Bangladesh</h1>
         <MapContainer
            center={[23.7598751, 90.1545711]}
            zoom={6}
            scrollWheelZoom={true}
            className='h-[calc(100vh_-_124px)] p-1 border-[4px] border-white rounded-lg shadow-sm'
         >
            <TileLayer attribution='' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {locations.map((location, index) => (
               <Marker key={`marker-${index}`} position={location.position}>
                  <Popup>Restaurant of {location.name}</Popup>
               </Marker>
            ))}
         </MapContainer>
      </main>
   );
}
