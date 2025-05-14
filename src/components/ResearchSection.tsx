
const ResearchSection = () => {
  return (
    <section className="py-8" id="research">
      <div className="container">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2">RESEARCH EXPERIENCE</h2>
        
        <div className="mt-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="font-semibold">
              Research Intern, Advanced Machine Intelligence Research Lab (AMIR)
            </h3>
            <span className="text-gray-600">Oct 2024 – Present</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              Supervised by Dr. Mohammad Firoz Mridha, Associate Professor, Department of Computer Science, 
              American International University-Bangladesh.
            </li>
            <li>
              Specialized in Reinforcement Learning and Graph Neural Network, with a focus on medical imaging modalities.
            </li>
            <li>
              Conducting research in breast cancer imaging and biomarker detection to publish in peer-reviewed journals.
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="font-semibold">
              Undergraduate Research Assistant, American International University-Bangladesh
            </h3>
            <span className="text-gray-600">Sep 2023 – Oct 2024</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              Supervised by Dr. Akinul Islam Jony, then Department Head of Computer Science.
            </li>
            <li>
              Specialized in AI and data science, with a focus on machine learning, deep learning, and computer vision.
            </li>
            <li>
              Conducted research in key domains: cybersecurity, healthcare, and education systems.
            </li>
            <li>
              Worked on intrusion detection in cybersecurity, analyzed cancer cell pathology images for healthcare, 
              developed an ethical AI framework for education, and explored data privacy and security in federated learning.
            </li>
            <li>
              Published two papers, with three additional papers currently under review.
            </li>
          </ul>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="font-semibold">
              Undergraduate Thesis, American International University-Bangladesh
            </h3>
            <span className="text-gray-600">May 2023 – Jan 2024</span>
          </div>
          <p className="mb-2 font-medium italic">
            Title: "SynergGAN: A Synergetic Approach to GANs and Deep Learning for Adversarial Defense 
            in Breast Cancer Histopathology"
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              Supervised by Dr. Akinul Islam Jony, then Department Head of Computer Science.
            </li>
            <li>
              Developed a framework combining GANs with transfer learning (TL) models to improve 
              resilience against adversarial attacks in breast cancer histology images.
            </li>
            <li>
              Relevant Skills and Tools: Research Methodology, Python Programming (Keras, TensorFlow, PyTorch), 
              Data Processing, Data Augmentation, Data Analysis, Image Processing, Experimental Design, 
              Evaluation Metrics, Explainability in AI, Critical Research Review, Results Evaluation, 
              Citation Management, Report Drafting, LaTeX Editing.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
