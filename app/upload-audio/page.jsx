'use client'
import Link from 'next/link'
import Image from "next/image";
import {useState,useEffect} from 'react'
const UploadAudio= () => {
    const [submitting,setSubmitting]=useState(false)
    const [audioFile,setAudioFile]=useState(null)
    const [result, setResult] = useState('')
    const [isRecording,setIsRecording]=useState(false);
    const [recordingComplete,setRecordingComplete]=useState(false);
    const [transcript,setTranscript]=useState(false);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAudioFile(file);
    };  
    const type="Upload"
    const uploadAudio=async(e)=>{
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        console.log(audioFile);
        formData.append('file',audioFile);
        try {
            const response = await fetch('http://127.0.0.1:5000/api/audio/new', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                setResult(data.result)
            } else {
                console.log('API request failed');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
      };
    return (
        <section className="flex-col">
        <section>
            <div className="flex">
            <section className="w-full max-w-full flex-start flex-col mb-10">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Audio</span>
            </h1>
            <p className="desc text-left max-w-md">
            {type} Audio <span className="text-black">(only .wav files accepted)</span> and let our state-of-the-art technology Unveil the True Identity of Voices, separating Authentic from AI-Generated with precision.
            </p>
            <form
            encType="multipart/form-data"
            className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your Audio File
                    </span>
                    <input
                    type="file"
                    accept=".wav"
                    className="py-2 px-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 ml-10"
                    name="file" 
                    placeholder="file" 
                    onChange={handleFileChange}
                    />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-md">
                    Cancel
                    </Link>
                    <button
                        type='submit'
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                        onClick={uploadAudio}
                    >
                    {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
            </section>
            <div className="flex-col">
                    <Image
                    src='/assets/images/upload-audio.png'
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='object-contain pt-19'
                    />
                    <Image></Image>
                    
            </div>
            </div>
        </section>
        <section className="flex gap-20">
            <section>
            <Image
            src='/assets/images/create-audio.png'
            alt='logo'
            width={1200}
            height={1200}
            className='object-contain pt-19 pr-15 mr-30'
            />
            <Image></Image>
            
            </section>
                <div className="flex">
                <section className="w-full max-w-full flex-start flex-col mb-10">
                <h1 className="head_text text-left">
                    <span className="blue_gradient">Record Audio</span>
                </h1>
                <p className="desc text-left max-w-md">
                Capture the Voice to test and let our Cutting-Edge Technology create an Audio File and Test it with Precision.
                </p>
                </section>
                </div>
        </section>
        </section>
    )
}
export default UploadAudio