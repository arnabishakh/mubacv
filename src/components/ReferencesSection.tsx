
const ReferencesSection = () => {
  return (
    <section className="py-8" id="references">
      <div className="container">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2">REFERENCES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold">Dr. Muhammad Morshed Alam</h3>
            <p className="text-gray-700">
              Assistant Professor, Department of Electrical & Electronics Engineering,<br />
              American International University-Bangladesh<br />
              Email: <a href="mailto:dr.malam@aiub.edu" className="text-blue-600 hover:underline">dr.malam@aiub.edu</a><br />
              Relationship: Course and Research Instructor
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold">Dr. Md. Asraf Ali</h3>
            <p className="text-gray-700">
              Professor, Department of Computer Science,<br />
              American International University-Bangladesh<br />
              Email: <a href="mailto:asrafali@aiub.edu" className="text-blue-600 hover:underline">asrafali@aiub.edu</a><br />
              Relationship: Course Instructor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
