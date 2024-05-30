import BookingPage from "@/Pages/Reservation/BookingPage";
import BookingHeader from "@/components/Header/BookingHeader";
import NavbarFilter from "@/components/Header/NabarFilter";

export default function booking(){
    return(
        
      <main className=" mx-auto">
        <BookingHeader />
        <div>
            <BookingPage />
        </div> 
      </main>

    )
   
}