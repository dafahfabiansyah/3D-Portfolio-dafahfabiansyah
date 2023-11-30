import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Punya proyek yang lagi pikirkan?
        <br className="sm:block hidden" />
        Mari kita buat sesuatu bersama!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
