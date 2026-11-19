// The hospital receives appointment records. You need to display only the appointments that are confirmed and scheduled for a particular doctor.
const appointments = [
  { id: 101, patient: "Rahul", doctor: "Dr. Sharma", status: "confirmed", fee: 800 },
  { id: 102, patient: "Priya", doctor: "Dr. Mehta", status: "pending", fee: 1000 },
  { id: 103, patient: "Anjali", doctor: "Dr. Sharma", status: "confirmed", fee: 800 },
  { id: 104, patient: "Kiran", doctor: "Dr. Sharma", status: "cancelled", fee: 800 },
  { id: 105, patient: "Sneha", doctor: "Dr. Mehta", status: "confirmed", fee: 1000 },
  { id: 106, patient: "Arjun", doctor: "Dr. Sharma", status: "pending", fee: 800 },
  { id: 107, patient: "Divya", doctor: "Dr. Sharma", status: "confirmed", fee: 800 }
];

const selectedDoctor = "Dr. Sharma";
const selectedStatus = "confirmed";


const filteredDoctorsList = appointments
    .filter((doc)=>doc.doctor.toLowerCase().includes(selectedDoctor.toLowerCase()) && doc.status === selectedStatus)

console.log(filteredDoctorsList)
