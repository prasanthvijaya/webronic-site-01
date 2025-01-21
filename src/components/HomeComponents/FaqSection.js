import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FaqSection = () => {
  // State to manage visibility of each question's answer
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    console.log(index);
    setOpenIndex(openIndex === index ? null : index); // Toggle visibility for the clicked FAQ
  };

  const faqData = [
    {
      question: "How many staffing agencies are there in India?",
      answer: "There are around 7000+ IT staffing companies in India and most of them are IT staffing companies in Bangalore. However, CronJ with its industry acumen and competitive pricing remains one of the most lucrative options for big companies and SMEs."
    },
    {
      question: "What is the scope of staffing?",
      answer: "Staffing agencies provide recruitment services for businesses by finding the right candidates for temporary or permanent positions."
    },
    {
      question: "What are the best staffing companies?",
      answer: "Some of the top staffing companies include CronJ, Randstad, Adecco, and Kelly Services."
    },
    {
      question: "What is the cost of staffing services in India?",
      answer: "The cost of staffing services in India varies depending on the type of position, the experience required, and the hiring agency. On average, staffing services can range from 8% to 15% of the employee's annual salary."
    },
    {
      question: "How does the onboarding process work in IT staffing companies in India?",
      answer: "Onboarding in IT staffing companies includes documentation, background checks, training, and client introductions to ensure that the candidate is well-prepared for their new role."
    },
    {
      question: "How is contract hiring different from staffing?",
      answer: "Contract hiring involves hiring employees for a specific period or project, while staffing generally refers to the ongoing provision of workers through staffing agencies."
    }
  ];

  return (
    <div className='mb-4 md:mt-5 flex justify-center font-roboto'> 
      <div className='px-5 flex flex-col shadow-md rounded-md py-5 md:py-9 md:w-[1338px]'>
      <h3 className='text-center text-2xl font-semibold'>FAQs</h3>
        {faqData.map((faq, index) => (
          <div key={index} className="flex w-full flex-col border-b-2 border-gray-300 gap-5 py-3 md:py-5 mf:px-9 justify-center">
            <div className="flex justify-between cursor-pointer" onClick={() => handleClick(index)}>
              <h3 className="text-[1.1rem] font-bold text-gray-600 tracking-wide	">{faq.question}</h3>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} // Rotate icon if open
              />
            </div>

            {/* Conditional rendering for each FAQ answer */}
            <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
              <p className='text-[1.2rem] font-extralight tracking-wide	'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default FaqSection;
