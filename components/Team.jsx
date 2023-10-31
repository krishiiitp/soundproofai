import React from "react";
function Team() {
  return (
    <section style={{width: '85%',marginLeft:'7.5%',marginRight:'7.5%'}}>
      <h1 className="text-3xl font-bold text-center mb-2">
        Our passionate and driven team
      </h1>
      <br></br>
      <br></br>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-300 p-4 shadow">
              <h2 className="text-xl font-bold mb-2">Krish Thakrar</h2>
              <div className="team-info">
                <p className="text-gray-600">Back-End Developer</p>
                <div className="social-media">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/krish-thakrar-a93144236/"
                        className="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/krish_thakrar_1710/" className="instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/krishiiitp" className="github">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-100 p-4 shadow">
              <h2 className="text-xl font-bold mb-2">Prakhar Jain</h2>
              <div className="team-info">
                <p className="text-gray-600">Front-End Developer</p>
                <div className="social-media">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/abhilash-bora/"
                        className="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_abhilash.31/" className="instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Abhilash-3107" className="github">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-100 p-4 shadow">
              <h2 className="text-xl font-bold mb-2">Priyanshu Sudhakar</h2>
              <div className="team-info">
                <p className="text-gray-600">Back-End Developer</p>
                <div className="social-media">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mahim-gupta73/"
                        className="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/mahim37" className="github">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-300 p-4 shadow">
              <h2 className="text-xl font-bold mb-2">MS Pramod</h2>
              <div className="team-info">
                <p className="text-gray-600">Back-End Developer</p>
                <div className="social-media">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dorddis/"
                        className="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dorddis/" className="instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/dorddis" className="github">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;