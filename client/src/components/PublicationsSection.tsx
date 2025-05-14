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

// Fallback publications
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
  const [googleScholarPublications, setGoogleScholarPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3001/api/publications");
        const data = await res.json();
        setGoogleScholarPublications(data);
      } catch (err) {
        console.error("Error fetching publications:", err);
        setError("Could not load publications. Showing fallback data.");
        setGoogleScholarPublications(PublishedWorks);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return (
    <section className="py-8" id="publications">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 uppercase border-b pb-2 dark:text-white dark:border-gray-700">
          PUBLISHED WORKS
        </h2>

        {isLoading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ) : (
          <>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <ul className="list-disc pl-6 space-y-2 text-justify text-gray-700 dark:text-gray-300">
              {googleScholarPublications.map((pub) => (
                <li key={pub.id}>
                  "<strong>{pub.title}</strong>",{pub.authors},  {pub.journal}, {pub.year}.
                  {pub.doi && (
                    <> DOI: <a href={pub.doi} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{pub.doi}</a></>
                  )}
                  {pub.url && !pub.doi && (
                    <> <a href={pub.url} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">[Link]</a></>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        <h2 className="text-xl font-bold mb-4 mt-8 uppercase border-b pb-2 dark:text-white dark:border-gray-700">
          UNPUBLISHED WORKS
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-justify text-gray-700 dark:text-gray-300">
          {UnpublishedWorks.map((pub) => (
            <li key={pub.id}>
              "<strong>{pub.title}</strong>",{pub.authors},  {pub.journal}.
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PublicationsSection;
