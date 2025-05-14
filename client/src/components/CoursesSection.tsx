
const CoursesSection = () => {
  const courses = [
    {
      name: "Technical Support Fundamentals by Google, Coursera",
      link: "Link",
      date: "Jul 2020"
    },
    {
      name: "Cisco IT Essentials, Cisco Networking Academy",
      details: "Netacad ID: 1005989521",
      date: "Jul 2020"
    },
    {
      name: "Tableau Fundamentals, DataCamp",
      link: "Link",
      date: "Oct 2022"
    },
    {
      name: "Data Analyst Track, DataCamp",
      link: "Link",
      date: "Nov 2022"
    }
  ];
  
  return (
    <section className="py-8" id="courses">
      <div className="container">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2">ADDITIONAL COURSES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <p className="font-medium">
                  {course.name} 
                  {course.link && <a href="#" className="ml-1 text-blue-600 hover:underline">({course.link})</a>}
                </p>
                {course.details && <p className="text-sm text-black-600">{course.details}</p>}
              </div>
              <span className="text-black-600 text-right whitespace-nowrap">{course.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
