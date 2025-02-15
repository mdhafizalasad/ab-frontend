import React, { useState } from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import Services from "../Home/Services/Services";
import InfoCards from "../Home/InfoCard/InfoCards";
import Reviws from "../Home/Testmonial/Reviws";

const BlogPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "1. What is E-commerce?",
      answer:
        "E-commerce refers to the buying and selling of goods or services over the internet. Popular platforms include Amazon, eBay, and Shopify.",
    },
    {
      question: "2. How does an online payment system work?",
      answer:
        "An online payment system processes transactions using payment gateways like PayPal, Stripe, or Razorpay. These gateways securely handle the exchange of payment details between customers and merchants.",
    },
    {
      question: "3. What are the benefits of an E-commerce business?",
      answer:
        "E-commerce allows businesses to reach a global audience, operate 24/7, reduce operational costs, and provide convenient shopping experiences.",
    },
    {
      question: "4. How do E-commerce businesses handle product returns?",
      answer:
        "Most E-commerce businesses have a return policy that allows customers to return products within a specific period. They provide return shipping labels and process refunds or replacements.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
         <h2 className="text-primary ">Blog</h2>
        <h3 className="text-2xl md:text-3xl">FAQ</h3>
      </div>
   
    </div>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg mb-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
              {q.question}
              <span className="text-blue-500">{openIndex === index ? "−" : "+"}</span>
            </h2>
            {openIndex === index && <p className="text-gray-600 mt-2">{q.answer}</p>}
          </div>
        ))}

        
      </div>
      <CategorySlider></CategorySlider>
      <InfoCards></InfoCards>
       <Services></Services>
       <Reviws></Reviws>
    </div>
   
    </div>
  );
};

export default BlogPage;
