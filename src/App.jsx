import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from './components/About';
import UpcomingEvents from "./components/UpcomingEvents";
import Organizer from "./components/Organizer";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import Chapter from "./components/Chapter";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <UpcomingEvents />
            <Chapter />
            <Organizer />
            <Sponsor />
            <Footer />
        </>
    )
}
