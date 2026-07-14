export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <p className="footer-email">
          По вопросам сотрудничества, предложениям и обратной связи: info@alltools.tools
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} alltools
        </p>
      </div>
    </footer>
  );
}
