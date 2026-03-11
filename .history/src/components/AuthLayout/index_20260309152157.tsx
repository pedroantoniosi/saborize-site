export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-left">{/* imagem ou branding */}</div>

      <div className="auth-right">{children}</div>
    </div>
  );
}
