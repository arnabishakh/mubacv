
const ExperienceSection = () => {
  return (
    <section className="py-8" id="experience">
      <div className="container">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2">ADDITIONAL EXPERIENCE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <h3 className="font-semibold">IT Consultant, BM Abroad Dreamers, Dhaka, Bangladesh</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-black-700">
              <li>Ensured seamless IT operation and planning</li>
              <li>Managed information systems securely</li>
              <li>Advised on efficient business strategy</li>
            </ul>
          </div>
          <div className="text-black-600 md:text-right">
            Jan 2022 – Jun 2022
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <h3 className="font-semibold">Junior Graphic Designer, Fabritex Ventures, Dhaka, Bangladesh</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-black-700">
              <li>Crafted the official logo, designed posters, images, and social media posts</li>
              <li>Contributed to a visually compelling brand presence.</li>
            </ul>
          </div>
          <div className="text-black-600 md:text-right">
            Jun 2022 – Nov 2023
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h3 className="font-semibold">Undergraduate Research Intern, AIUB, Dhaka, Bangladesh</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-black-700">
              <li>Conducted research on AI, ML, DL related fields, collaborating with the supervisor to analyze data and interpret results, contributing to the understanding of Cybersecurity, Healthcare, and AI Ethics.</li>
            </ul>
          </div>
          <div className="text-black-600 md:text-right">
            Sep 2023 – Jan 2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
