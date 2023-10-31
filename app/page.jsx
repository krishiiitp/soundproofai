import Feed from '@components/Feed'
const Home=()=>{
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover the <br className="max-md:hidden" /><span className="orange_gradient text-center">Authentic Voice</span> in the Noise</h1>
            <p className="desc text-center">
            SoundProofAI is an advanced tool that detects and mitigates the risks of AI-generated audio deepfakes, delivering audio you can trust.
            </p>
            <Feed/>
        </section>
    )
}
export default Home
