import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Card from '@components/Card'
import { Reasons } from "@components/Reasons";
const AboutUs = () => {
  return (
    <section className="flex-col mb-20">
      <div className="flex">
      <div className="flex-col">
      <FaArrowAltCircleRight className="text-2xl cursor-pointer hover:text-gray-600" />
      <h1 className="head_text text-left">
          Intro<span className="orange_gradient">duction</span>
      </h1>
      <p className="desc text-left max-w-md">
      Welcome to SoundProofAI, the home of cutting-edge audio classification and verification technology. At SoundProofAI, we are passionate about distinguishing real voices from AI-generated ones. Our innovative approach, driven by the Random Forest Classifier, helps us tackle the growing concern of deepfake audio and ensures the authenticity of voice content.
      </p>
      </div>
      <Image
        src='/assets/images/intro.png'
        alt='logo'
        width={800}
        height={800}
        className='object-contain pt-19'
        />
      </div>
      <div className="flex gap-3">
      <Image
        src='/assets/images/mission.png'
        alt='logo'
        width={500}
        height={500}
        className='object-contain pt-19'
        />
      <div className="flex-col">
      <FaArrowAltCircleRight className="text-2xl cursor-pointer hover:text-gray-600" />
      <h1 className="head_text text-left">
          Our <span className="orange_gradient">Mission</span>
      </h1>
      <p className="desc text-left max-w-md">
      At SoundProofAI, our mission is clear: to safeguard the integrity of voice communication. We are committed to providing accurate, accessible, and easy-to-use tools that empower individuals and organizations to differentiate between genuine human voices and AI-generated ones.
      </p>
      </div>
      </div>
      <div className="flex">
      <div className="flex-col gap-3">
      <h1 className="head_text text-center mb-10">
          Why <span className="orange_gradient">Choose Us?</span>
      </h1>
      <div className="flex gap-10">
      {Reasons.map((item, index) => {
        return (
          <Card
        url={item.url}
        title={item.title}
        para={item.para}
      />
        );
      })}
      </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
