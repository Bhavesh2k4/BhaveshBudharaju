import React from "react"
import pingIcon from '../../assets/images/text.png'
import { useSelector } from "react-redux";

function Welcome() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const intros = portfolioData && portfolioData.intros;
  const { firstName = '', lastName = '', caption = '', description = '', profilePictureUrl = '',resumeUrl='' } = intros || {};
  const handleResumeClick = () => {
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start pt-24 gap-28 relative">
      <div className="flex items-center">
        <div>
          <h1 className="text-5xl sm:text-2xl font-mono text-secondary font-semibold pb-12">
            {firstName || ''} {lastName || ''}
          </h1>
          <h1 className="text-3xl sm:text-xl text-secondary pb-8">{caption || ''}</h1>
          <p className="text-tertiary w-1/2 pb-4">
            {description || ''}
          </p>
          <button onClick={handleResumeClick}className="border-2 border-teal-400 text-teal-500 px-10 py-3 rounded-2xl flex items-center">
            Resume <img src={pingIcon} alt="Ping Icon" className="h-5" />
          </button>
        </div>
        <div className=" absolute right-10 top-24">
          <div className="relative w-64 h-80">
            {profilePictureUrl && (
              <img
                src={profilePictureUrl}
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full"
              />
            )}
            <div className="absolute inset-0 rounded-full border-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome