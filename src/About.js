import React from "react";

export const About = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold mt-5">About Us</div>
      <div className="flex justify-around w-auto items-center mt-6 bg-green-300 py-5 text-black animate__animated animate__fadeInLeft ">
        <div className="w-1/2 font-semibold ">
          Welcome to our about page! We are a team of dedicated professionals
          with a passion for delivering top-notch products and services to our
          customers.
        </div>
        <div>
          <img
            alt="image"
            src="https://t3.ftcdn.net/jpg/01/21/12/86/360_F_121128679_pMxkyQRwMRFiZMru0nG0bFwnxj5qt8kY.jpg"
            className="w-[250px] h-[150px] rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-around w-auto items-center  bg-blue-300 py-5 animate__animated animate__fadeInRight">
        <div>
          <img
            alt="image"
            src="https://t3.ftcdn.net/jpg/04/72/51/52/360_F_472515256_Du3swmADaJcEK5oTY5YBxoQNqzEDnDK7.jpg"
            className="w-[250px] h-[150px] rounded-lg"
          />
        </div>
        <div className="w-1/2 font-semibold">
          Our journey started with a shared vision of creating something
          meaningful. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam efficitur risus non nibh cursus, eu ultrices tellus dignissim.
        </div>
      </div>
      <div className="flex justify-around w-auto items-center py-5 bg-red-300 animate__animated animate__fadeInLeft">
        <div className="w-1/2 font-semibold">
          At our core, we believe in innovation, quality, and customer
          satisfaction. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In hac habitasse platea dictumst. Suspendisse eget arcu non libero
          sagittis imperdiet eget ut justo.
        </div>
        <div>
          <img
            alt="image"
            src="https://www.infosearchbpo.com/images/customer-services.jpg"
            className="w-[250px] h-[150px] rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-around w-auto items-center py-5 bg-yellow-300 animate__animated animate__fadeInRight">
        <div>
          <img
            alt="image"
            src="https://img.freepik.com/free-vector/business-data-analysis-hand-holding-megaphone-computer-screen-smart-marketing-digital-payment-flat-vector-illustration-internet-communication-concept-banner-landing-web-page_74855-24348.jpg"
            className="w-[250px] h-[150px] rounded-lg"
          />
        </div>
        <div className="w-1/2 font-semibold">
          We strive to create products that make a positive impact on people's
          lives. Our team is committed to continuous improvement and pushing the
          boundaries of what's possible.0
        </div>
      </div>
      <div className="text-center w-auto mt-8 font-bold text-xl">
        Thank you for being a part of our journey. We look forward to serving
        you with excellence.
      </div>
    </div>
  );
};
