import React, { useState } from 'react';
import owl from '../assets/owl.png';

const HelpComponent = () => {
  const faqs = [
    {
      question: 'How do I prioritize tasks in ClarityPro?',
      answer: 'To prioritize tasks, simply assign them a priority level when creating or editing a task. The platform allows you to categorize tasks based on importance, ensuring a focused approach to your work.',

    },
    {
      question:'Can I use ClarityPro for personal task management, or is it only for teams?',
      answer:" ClarityPro caters to both individual users and teams. Whether you're managing personal tasks or collaborating with a team, the platform is adaptable to your specific needs."
    },
    {
      question: "How does the AI analytics feature work?",
      answer: "ClarityPro's AI analytics assess your individual productivity hours, providing insights into your work habits. This data helps you make informed adjustments to optimize efficiency and improve overall productivity."
    },
    {
      question: "Is my data secure on ClarityPro?",
      answer: "Yes, we take data security seriously. ClarityPro employs robust security measures to safeguard your information, ensuring it is protected and confidential."
    },
    {
      question: "Can ClarityPro help with tight project deadlines?",
      answer: "Absolutely. ClarityPro is designed to assist in delivering projects on tight deadlines. The platform's task prioritization and efficient collaboration features empower users to meet deadlines with confidence."
    },
    {
      "question": "How can I get support if I encounter issues?",
      "answer": "Our support team is readily available to assist you. You can reach out through our support portal, and our team will promptly address any issues or concerns you may have."
    },
    {
      "question": "Is there a mobile version of ClarityPro?",
      "answer": "Yes, ClarityPro is accessible on mobile devices. Simply download our mobile app from the App Store or Google Play to manage tasks and collaborate with your team on the go."
    }
    // Add more FAQs as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex  justify-center w-full overflow-y-auto '>
      <div className="parent flex flex-row gap-20 p-5 h-screen  ">
        <div className="child1 flex-[0.4]">
          <img src={owl} alt="Owl" />
          

<form class="max-w-md mx-auto bg-neutral-900 p-2 rounded my-5">
<div className="font-bold text-4xl text-orange-400">
            <p>Ask Your Question</p>
          
          </div>
  <div class="relative z-0 w-full mb-5 group">
      
    
<form class="max-w-sm mx-auto">
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a question..."></textarea>
</form>

  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
        <div className="child2 flex-col flex-[0.6]">
          <div className="font-bold text-4xl text-orange-400">
            <p>Frequently asked</p>
            <p>questions</p>
          </div>
          <div className='w-80'>
          <div className="flex flex-col text-left gap-5 my-4">
            {faqs.map((faq, index) => (
              <div key={index} >
                <button
                  type="button"
                  onClick={() => handleOpen(index)}
                  className="inline-flex w-full flex-col  gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  aria-expanded={openIndex === index}
                  aria-haspopup="true"
                >
                  <div className=' flex flex-row justify-between '>  {faq.question}
                  <svg className={`-mr-1 h-5 w-5 text-gray-400 transform ${openIndex === index ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg></div>
                
                  {openIndex === index && (
                  <div className=" bg-white rounded-md my-5">
                    <div className='p-5'>
                      {faq.answer}
                    </div>
                  </div>
                )}
                 
                </button>
            

                
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpComponent;
