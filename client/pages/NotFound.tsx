import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-preto-impacto flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/482589099ce5474d17384d2810a979d0fdacad48?width=322"
          alt="Eduque Logo"
          className="h-15 w-auto mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-verde-energia mb-4">404</h1>
        <p className="text-xl text-branco-classico mb-6">
          Oops! Página não encontrada
        </p>
        <p className="text-branco-classico mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="bg-roxo-inovacao text-verde-energia font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity inline-block"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
