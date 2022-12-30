import Footer from '../components/Footer';
import Navbar from '../components/navbar';

export default function Home() {
    const pages = ["overview", "tools", "challenge"];

    return (
        <div>
            <Navbar pages={pages}/>
            <h1>Under construction</h1>
            <Footer/>
        </div>
    );
}
