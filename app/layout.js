
/** app components */
import Header from './header/page';
import Footer from './footer/page'

/** import tailwind css */
import '../styles/globals.css';


export default function RootLayout({ children }){
    return (
        <html>
            <head></head>
            <body>
                <div className='container mx-auto py-10 flex flex-col gap-4'>
                    <Header></Header>
                    { children }
                    <Footer></Footer>
                </div>
            </body>
        </html>
    )
}