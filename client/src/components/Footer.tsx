
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-black-200 mt-12">
      <div className="container">
        <div className="text-center text-black-600">
          <p>© {currentYear} Mubashir Mohsin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
