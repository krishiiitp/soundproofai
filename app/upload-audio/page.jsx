'use client'
import Link from 'next/link'
import Image from "next/image";
import {useState,useEffect} from 'react'
import { FaMicrophone } from "react-icons/fa";
const UploadAudio= () => {
    const [submitting,setSubmitting]=useState(false)
    const [audioFile,setAudioFile]=useState(null)
    const [result, setResult] = useState('')
    const [audioContext, setAudioContext] = useState(null);
    const [audioRecorder, setAudioRecorder] = useState(null);
    const [audioStream, setAudioStream] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
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
                console.log(data)
                setTimeout(() => {
                    setResult('');
                  }, 5000);
            } else {
                console.log('API request failed');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
      };
      const startRecording = async () => {
        try {
          const context = new (window.AudioContext || window.webkitAudioContext)();
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const recorder = new MediaRecorder(stream);
          const chunks = [];
          recorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              chunks.push(e.data);
            }
          };
    
          recorder.onstop = () => {
            const audioBlob = new Blob(chunks, { type: 'audio/wav' });
            setAudioStream(audioBlob);
          };
    
          recorder.start();
          setIsRecording(true);
    
          setAudioContext(context);
          setAudioRecorder(recorder);
        } catch (error) {
          console.error("Error accessing microphone:", error);
        }
      };
    
      const stopRecording = () => {
        if (audioRecorder && isRecording) {
          audioRecorder.stop();
          setIsRecording(false);
        }
      };
      // useEffect(() => {
      //   console.log("audioStream:", audioStream);
      //   setAudioFile(audioStream)
      // }, [audioStream]);
      const saveAudioToLocalFile = (audioBlob) => {
        const url = URL.createObjectURL(audioBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recorded_audio.wav';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      };
    return (
        <section className="flex-col">
        <section>
            <div className="flex">
            <section className="w-full max-w-full flex-start flex-col mb-10">
            <h1 className="head_text text-left">
                {type} <span className="orange_gradient">Audio</span>
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
                    {result === 'FAKE' && (
                      <Image
                        src='/assets/images/fake.jpg'
                        alt='logo'
                        width={200}
                        height={200}
                        className='object-contain pt-19 px-5'
                      />  
                    )}
            
                    {result === 'REAL' && (
                      <Image
                        src='/assets/images/real.jpg'
                        alt='logo'
                        width={200}
                        height={200}
                        className='object-contain pt-19 px-5'
                      /> 
                    )}                
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
            </section>
                <div className="flex">
                <section className="w-full max-w-full flex-start flex-col mb-10">
                <h1 className="head_text text-left">
                    Record <span className="orange_gradient">Audio</span>
                </h1>
                <p className="desc text-left max-w-md">
                Capture the Voice to test and let our Cutting-Edge Technology create an Audio File and Test it with Precision.
                </p>
                <div className="mt-10">
                    <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2" onClick={startRecording}>
                    <FaMicrophone className="text-xl cursor-pointer hover:text-gray-600 gap-2" />
                        Start Recording
                    </button>
                    <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2" onClick={stopRecording}>
                    <FaMicrophone className="text-xl cursor-pointer hover:text-gray-600 gap-2" />
                        Stop Recording
                    </button>
                    {audioStream && (
                      <audio controls src={URL.createObjectURL(audioStream)} />
                    )}
                    <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-2" onClick={()=>saveAudioToLocalFile(audioStream)}>
                        Upload
                    </button>
                    {result === 'FAKE' && (
                      <Image
                        src='/assets/images/fake.jpg'
                        alt='logo'
                        width={200}
                        height={200}
                        className='object-contain pt-19 px-5'
                      />  
                    )}
            
                    {result === 'REAL' && (
                      <Image
                        src='/assets/images/real.jpg'
                        alt='logo'
                        width={200}
                        height={200}
                        className='object-contain pt-19 px-5'
                      /> 
                    )}  
                </div>
                </section>
                </div>
        </section>
        </section>
    )
}
export default UploadAudio