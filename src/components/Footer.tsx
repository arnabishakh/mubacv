
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 mt-12">
      <div className="container">
        <div className="text-center text-gray-600">
          <p>© {currentYear} Mubashir Mohsin. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
