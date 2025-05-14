
const EducationSection = () => {
  return (
    <section className="py-8" id="education">
      <div className="container">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2">EDUCATIONAL BACKGROUND</h2>
        <div className="mt-4">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="font-semibold text-lg">
              American International University-Bangladesh: BSc Computer Science and Engineering
            </h3>
            <span className="text-black-600">Jan 2020 - Jun 2024</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-black-700">
            <li>Major: Information Systems</li>
            <li>Grade: CGPA 3.81 (Out of 4.00)</li>
            <li>
              Major Courses: Introduction to Data Science, Data Warehouse and Data Mining, Machine Learning, 
              Computer Vision and Pattern Recognition, and Management Information Systems.
            </li>
            <li>
              Relevant Modules: Object Oriented Programming, Advanced Programming in Python and R, Research Methodology, 
              Computational Theory, Data Structure & Algorithms, Statistics and Probability, Numerical Methods for 
              Scientific Computation, Calculus & Algebra, Computer Networking, Computer Graphics, Engineering Ethics, 
              Engineering Management, Business Intelligence, Computer Aided Design, Software & Web Development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
