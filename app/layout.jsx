import '@styles/globals.css';
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import Provider from '@components/Provider'
export const metadata={
    title:"SoundProofAI",
    description:'Discover the Authentic Voice in the Noise'
}
const RootLayout=({children})=>{
    return (
        <html>
            <body>
            <Provider>
                <div className="main colorize-navy">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                    <Footer/>
                </main>
            </Provider>
            </body>
        </html>
    )
}
export default RootLayout