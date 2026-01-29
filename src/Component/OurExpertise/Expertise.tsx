import Medical from "./Medical"
import Recruitment from "../OurExpertise/Recruitment"
import Services from "./Services"
import Package from "./Package"
// import Ticket from "./Ticket"
import Attestation from "./Attestation"
import HowItWorks from "../HomeSection/Work"


const Expertise: React.FC = () => {
     return (
          <div className="   h-full bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
               <Medical />
               <Recruitment />
               <HowItWorks />
               <Services />
               <Package />
               {/* <Ticket /> */}
               <Attestation />
          </div>
     )
}

export default Expertise