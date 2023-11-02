
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config/Config'
import DoctorCard from '../../components/doctors/DoctorCard'
import Loading from '../../loader/Loading'
import Error from '../../error/Error'
const Booking = () => {
  const {data:appointments, loading,error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
            {loading && !error && <Loading />}
        
        {error && <Error errMessage={error}/> }
        {!loading && error && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {appointments.map(doctor =>(
            <DoctorCard doctor={doctor} key={doctor._id}/>
          ))}

          </div>)}

{!loading && !error && appointments.length === 0 &&  (
  <h2 className='mt-5 text-center  leading-7 text-[18px] font-semibold text-primaryColor'>
    You did not make any appointments
  </h2>
)}
    </div>
  )
}

export default Booking