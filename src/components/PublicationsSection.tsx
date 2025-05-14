
import { useState, useEffect } from "react";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  url?: string;
  citations?: number;
}

// Fallback publications if the API doesn't work
const PublishedWorks: Publication[] = [
  {
    id: 1,
    title: "A Comparative Analysis of Medical IoT Device Attacks Using Machine Learning Models",
    authors: "M. Mohsin and A. I. Jony",
    journal: "Malaysian J. Sci. Adv. Tech., vol. 4, no. 4, pp. 429–439",
    year: "Sep. 2024",
    doi: "https://doi.org/10.56532/mjsat.v4i4.318"
  },
  {
    id: 2,
    title: "Data Privacy Preservation with Federated Learning: A Systematic Review",
    authors: "A. I. Jony and M. Mohsin",
    journal: "International Journal of Data Science and Big Data Analytics, vol. 4, no. 1, pp. 1–16",
    year: "2024",
    doi: "https://doi.org/10.51483/IJDSBDA.4.1.2024.1-16"
  }
];

const UnpublishedWorks: Publication[] = [
  {
    id: 1,
    title: "Vision BotNet: Leveraging Adversarial Samples and Generative Adversarial Networks for Enhancing BotNet Attack Detection",
    authors: "M. Mohsin and A. I. Jony",
    journal: "(Submitted in International Journal of Computing on Oct 22, 2024)",
    year: "2024"
  },
  {
    id: 2,
    title: "Towards AI Ethics: Disclosing Key Factors of AI Ethical Measures in Higher Education",
    authors: "M. Mohsin and A. I. Jony",
    journal: "(Under review in STEM Education)",
    year: "2024"
  },
  {
    id: 3,
    title: "SynergGAN: A Synergetic Approach to GANs and Deep Learning for Adversarial Defense in Breast Cancer Histopathology",
    authors: "M. Mohsin, S. B. Alam, S. A. Saifee, S. S. Bishal, and A. I. Jony",
    journal: "(Under review in Neural Computing and Applications)",
    year: "2024"
  }
];

const PublicationsSection = () => {
  const [googleScholarPublications, setGoogleScholarPublications] = useState<Publication[]>(PublishedWorks);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch publications from Google Scholar
  useEffect(() => {
    // For this demo, we're using a timeout to simulate an API call
    // In a real application, you would make a server-side request to the Google Scholar API
    // as client-side requests would be blocked by CORS
    const fetchPublications = async () => {
      setIsLoading(true);
      try {
        // In a real application, you'd fetch from an API endpoint
        // that proxies requests to Google Scholar
        // const response = await fetch('/api/google-scholar?user=L6Esq54AAAAJ');
        // const data = await response.json();

        // For now, we'll use the hardcoded data with a delay to simulate a fetch
        setTimeout(() => {
          console.log("Fetched publications from Google Scholar (simulated)");
          setGoogleScholarPublications(PublishedWorks);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Error fetching Google Scholar data:", err);
        setError("Failed to load publications. Using backup data.");
        setGoogleScholarPublications(PublishedWorks);
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return (
    <section className="py-8" id="publications">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2 dark:text-white dark:border-gray-700">PUBLISHED WORKS</h2>
        
        {isLoading ? (
          <div className="space-y-4">
            <div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 mb-4">{error}</div>
        ) : (
          <div className="space-y-4">
            {googleScholarPublications.map((pub) => (
              <div 
                key={pub.id} 
                className="pb-2 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-md"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  [{pub.id}] {pub.authors}, "{pub.title}," {pub.journal}, {pub.year}.
                  {pub.doi && (
                    <> DOI: <a href={pub.doi} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{pub.doi}</a></>
                  )}
                  {pub.citations && (
                    <span className="ml-2 text-gray-500 dark:text-gray-400">Citations: {pub.citations}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        )}

        <h2 className="text-xl font-bold mb-4 mt-8 uppercase border-b pb-2 dark:text-white dark:border-gray-700">UNPUBLISHED WORKS</h2>
        <div className="space-y-4">
          {UnpublishedWorks.map((pub) => (
            <div 
              key={pub.id} 
              className="pb-2 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-md"
            >
              <p className="text-gray-700 dark:text-gray-300">
                [{pub.id}] {pub.authors}, "{pub.title}," {pub.journal}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
