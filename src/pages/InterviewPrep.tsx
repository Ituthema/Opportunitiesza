import { useState } from "react";
import { Helmet } from "react-helmet-async";

const questions = [
  {
    q: "Tell me about yourself.",
    tip: "Don't recite your whole life story. Focus on your education, a bit about your personality (e.g. hard-working, eager to learn), and why you are currently looking for an opportunity.",
    example: "I recently completed my Matric in Gauteng. I am a dedicated person who loves problem-solving. Right now, I'm looking for a way to gain practical experience while studying further."
  },
  {
    q: "Why do you want to join this learnership / internship?",
    tip: "Employers want to know you actually care about their specific program, not just that you need money. Mention the skills you want to learn.",
    example: "I applied for this IT Learnership because I want to build a career in tech. I know this program offers practical network training, bridging the gap between what I learned in school and what the workplace requires."
  },
  {
    q: "Why should we choose you over other candidates?",
    tip: "Focus on your reliability, work ethic, and willingness to learn. You don't need to have experience to answer this well.",
    example: "You should choose me because I am highly committed. If I am given this opportunity, I will show up on time every day, absorb as much knowledge as possible, and not take it for granted."
  },
  {
    q: "What are your strengths and weaknesses?",
    tip: "For strengths, pick things relevant to work (punctuality, quick learner). For weaknesses, pick a real weakness but explain how you manage it.",
    example: "My strength is that I am highly organised. My weakness is that I sometimes lack confidence speaking in front of large groups, but I am volunteering to present group tasks to improve this."
  },
  {
    q: "Where do you see yourself in 3 to 5 years?",
    tip: "They want to see that you are ambitious and view this opportunity as a stepping stone. Don't say 'having your job'.",
    example: "In 3 years, I hope to have completed my NQF level 5 qualification and be permanently employed in a role where I can take on independent projects within this industry."
  }
];

export default function InterviewPrep() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  return (
    <>
      <Helmet>
        <title>Interview Prep Simulator | OpportunitiesZA</title>
        <meta name="description" content="Prepare for your learnership or internship interview with our free interactive flashcards and tips." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-teal-100 p-3 rounded-full border border-teal-200 mb-4">
            <span className="text-3xl">🎤</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Interview Simulator</h1>
          <p className="text-gray-600">
            Practice answering the most common questions you will be asked in a learnership or internship interview.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border text-center border-gray-200 rounded-xl p-8 md:p-12 shadow-sm min-h-[350px] flex flex-col justify-center">
            
            <div className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">
              Question {currentIndex + 1} of {questions.length}
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-sa-ink mb-8">
              "{questions[currentIndex].q}"
            </h2>

            {!showAnswer ? (
              <div className="mt-auto">
                 <p className="text-gray-500 mb-6 text-sm">Practice your answer out loud, then click below to see how to approach it.</p>
                 <button 
                  onClick={() => setShowAnswer(true)}
                  className="bg-sa-ink text-white font-bold px-8 py-3 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Show Tips & Example Answer
                </button>
              </div>
            ) : (
              <div className="mt-4 text-left border-t border-gray-100 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="mb-6">
                   <h3 className="font-bold text-sa-ink mb-2">💡 Expert Tip:</h3>
                   <p className="text-gray-700 bg-teal-50 p-4 rounded-md border border-teal-100">{questions[currentIndex].tip}</p>
                 </div>
                 <div>
                   <h3 className="font-bold text-sa-ink mb-2">✅ Example Answer:</h3>
                   <p className="text-gray-700 italic border-l-4 border-sa-green pl-4 py-1">{questions[currentIndex].example}</p>
                 </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="text-gray-600 font-semibold hover:text-sa-green flex items-center gap-2"
            >
              ← Previous
            </button>
            <button 
              onClick={handleNext}
              className="text-gray-600 font-semibold hover:text-sa-green flex items-center gap-2"
            >
              Next Question →
            </button>
          </div>

          <div className="mt-16 bg-amber-50 border border-amber-200 p-6 rounded-lg">
             <h3 className="font-heading font-bold text-amber-900 mb-3">General Interview Advice</h3>
             <ul className="list-disc pl-5 text-amber-800 text-sm space-y-2">
                <li><strong>Dress neatly:</strong> Even if the workplace is casual, dress smartly (e.g. collared shirt, neat trousers/skirt) for the interview.</li>
                <li><strong>Arrive 15 minutes early:</strong> Being late to an interview, no matter the excuse, is a major red flag for employers.</li>
                <li><strong>Bring your documents:</strong> Always bring a printed copy of your CV and certified ID/qualifications to the interview, even if you emailed them.</li>
                <li><strong>Ask a question:</strong> When they say "Do you have any questions for us?", ask something like "What typical tasks does a learner do here on a daily basis?"</li>
             </ul>
          </div>
        </div>
      </div>
    </>
  );
}
