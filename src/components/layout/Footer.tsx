export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <p className="footer-lead">
          Web3, AI и рабочие сервисы — в одном месте. Я собрал их, чтобы ты
          не рылся в очередном «топе»: зашёл, нашёл нужное, поехал дальше.
        </p>
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
