import "../styles/Footer.css";
import Links from './Links'

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} A1ngell</p>
        <Links/>
      </div>
    </footer>
  );
};