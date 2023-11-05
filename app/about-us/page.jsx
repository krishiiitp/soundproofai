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
      Welcome to SoundProofAI, the pioneering hub of state-of-the-art audio classification and verification technology. At SoundProofAI, our passion lies in the precision of distinguishing real voices from AI-generated counterparts. We've harnessed the power of innovative technologies, anchored by the robust Random Forest Classifier, to address the rising challenge of deepfake audio and guarantee the authenticity of voice content. With our cutting-edge solutions, we stand as the guardians of voice integrity in the age of technological transformation, enabling individuals and organizations to trust in the voices they hear and the conversations they engage in.
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
      <div className="flex gap-1">
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
      At SoundProofAI, our unwavering mission is to protect the integrity of voice communication in an era of advancing technology. We are committed to developing accurate, accessible, and easy-to-use tools that empower individuals and organizations to differentiate between authentic human voices and AI-generated ones. Our dedication to accuracy forms the foundation of trust, and our commitment to accessibility ensures that our solutions are available to all, fostering inclusivity in an ever-changing digital landscape. By empowering voices, we enable individuals and organizations to make informed choices, preserving the authenticity of human interaction and contributing to a stronger, more reliable digital world where trust remains paramount in human connections.
      </p>
      </div>
      </div>
      <div className="flex">
      <div className="flex-col gap-1">
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
