import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    state: "",
    agreeToEmails: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-preto-impacto">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="mb-8 sm:mb-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/482589099ce5474d17384d2810a979d0fdacad48?width=322"
                alt="Eduque Logo"
                className="h-12 sm:h-15 w-auto mx-auto lg:mx-0"
              />
            </div>

            {/* Hero Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-verde-energia font-semibold text-base sm:text-lg lg:text-xl">
                  E-book: Gamificação Aplicada em sala de aula
                </p>
                <h1 className="text-white font-bold text-xl sm:text-2xl lg:text-4xl leading-tight">
                  Transforme suas aulas em uma aventura e veja o engajamento dos
                  seus alunos decolar.
                </h1>
                <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                  Baixe gratuitamente nosso guia gratuito de Gamificação e
                  descubra técnicas f��ceis de aplicar em qualquer matéria.
                </p>
              </div>

              <button className="bg-roxo-inovacao text-verde-energia font-bold px-6 py-3 text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto">
                QUERO GARANTIR O MEU
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/77b130cb811a194f49194c619f67404a46fc43ce?width=784"
              alt="Mockup do ebook"
              className="w-64 sm:w-80 lg:w-96 h-auto mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/24fcafdc6edc9baa86ff2db2a967e372c36f243d?width=840"
              alt="Aula de matemática com voluntários"
              className="w-full max-w-sm sm:w-80 lg:w-[420px] h-auto rounded-lg mx-auto"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-3xl order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-branco-classico font-bold text-xl sm:text-2xl lg:text-4xl leading-tight mb-4 sm:mb-6">
              Com nosso guia, você vai entender tudo o que precisa para começar
              a aplicar a Gamificação:
            </h2>

            <div className="space-y-3 sm:space-y-4 text-branco-classico text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                <span className="font-bold">O que é Gamificação:</span> Desvende
                o conceito de forma clara, entendendo a ciência por trás do
                engajamento e por que ele funciona tão bem na educação.
              </p>
              <p>
                <span className="font-bold">Como aplicar (Passo a Passo):</span>{" "}
                Um método prático que te leva do zero à sua primeira atividade
                gamificada, adaptável para qualquer disciplina e turma.
              </p>
              <p>
                <span className="font-bold">
                  Dicas e ferramentas essenciais:
                </span>{" "}
                Descubra truques e ferramentas para economizar tempo e
                potencializar suas aulas.
              </p>
              <p>
                <span className="font-bold">Casos reais para se inspirar:</span>{" "}
                Veja exemplos práticos de como usar a gamificação para
                transformar suas aulas e motivar os alunos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
        <div className="bg-branco-classico rounded-2xl p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
            {/* Left Content */}
            <div className="flex-1 max-w-xl text-center lg:text-left">
              <p className="text-roxo-inovacao font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">
                Garanta o seu E-Book gratuito
              </p>
              <h3 className="text-preto-impacto font-bold text-xl sm:text-2xl lg:text-4xl leading-tight mb-4 sm:mb-6">
                Pronto para destravar o potencial das suas aulas?
              </h3>
              <p className="text-preto-impacto text-base sm:text-lg lg:text-2xl leading-relaxed">
                Baixe o guia agora e seja o primeiro a saber da ferramenta que
                vai revolucionar a forma como você planeja. Ao se inscrever,
                você entra na nossa lista exclusiva para o lançamento do Portal
                Eduque.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Insira seu Nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border-2 border-roxo-inovacao rounded-sm bg-branco-classico focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Insira seu melhor e-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border-2 border-roxo-inovacao rounded-sm bg-branco-classico focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Qual a sua área de Ocupação?
                  </label>
                  <select
                    value={formData.occupation}
                    onChange={(e) =>
                      handleInputChange("occupation", e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-roxo-inovacao rounded-sm bg-branco-classico focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm text-cinza-2"
                  >
                    <option value="">Selecione sua área de ocupação</option>
                    <option value="professor">Professor</option>
                    <option value="coordenador">Coordenador</option>
                    <option value="diretor">Diretor</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Qual a seu Estado
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="w-full px-3 py-2 border-2 border-roxo-inovacao rounded-sm bg-branco-classico focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm text-cinza-2"
                  >
                    <option value="">Selecione seu Estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="RS">Rio Grande do Sul</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeEmails"
                    checked={formData.agreeToEmails}
                    onChange={(e) =>
                      handleInputChange("agreeToEmails", e.target.checked)
                    }
                    className="mt-1 w-4 h-4 border border-cinza-2 rounded-sm"
                  />
                  <label
                    htmlFor="agreeEmails"
                    className="text-preto-impacto text-xs leading-tight"
                  >
                    Estou de acordo em receber e-mails do Portal Eduque com
                    conteúdos educacionais, notícias e informações sobre a
                    plataforma.
                  </label>
                </div>

                <p className="text-preto-impacto text-xs leading-relaxed">
                  Respeitamos sua privacidade. Seus dados estão seguros conosco
                  e você não receberá spam.
                </p>

                <button
                  type="submit"
                  className="w-full bg-roxo-inovacao text-verde font-bold py-3 px-6 rounded-sm hover:opacity-90 transition-opacity text-sm"
                >
                  Receber meu E-book gratuitamente
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-verde-energia py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c141d3e24ef0552c191896bb254447e9f171bf29?width=272"
              alt="Eduque Logo"
              className="h-10 sm:h-12 w-auto"
            />

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* LinkedIn */}
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4886 2.42493H4.51266C3.08632 2.42493 1.92918 3.58207 1.92918 5.00841V31.9843C1.92918 33.4106 3.08632 34.5678 4.51266 34.5678H31.4886C32.9149 34.5678 34.072 33.4106 34.072 31.9843V5.00841C34.072 3.58207 32.9149 2.42493 31.4886 2.42493ZM31.4886 31.9964C13.4966 31.9923 4.50061 31.9883 4.50061 31.9843C4.50463 13.9923 4.50864 4.99636 4.51266 4.99636C22.5046 5.00037 31.5006 5.00439 31.5006 5.00841C31.4966 23.0004 31.4926 31.9964 31.4886 31.9964ZM6.69436 14.4745H11.4636V29.8147H6.69436V14.4745ZM9.08097 12.3772C10.6037 12.3772 11.8453 11.1397 11.8453 9.61287C11.8453 9.24986 11.7738 8.89041 11.6348 8.55503C11.4959 8.21965 11.2923 7.91492 11.0356 7.65823C10.7789 7.40154 10.4742 7.19792 10.1388 7.05901C9.80343 6.92009 9.44398 6.84859 9.08097 6.84859C8.71796 6.84859 8.3585 6.92009 8.02312 7.05901C7.68774 7.19792 7.38301 7.40154 7.12632 7.65823C6.86963 7.91492 6.66602 8.21965 6.5271 8.55503C6.38818 8.89041 6.31668 9.24986 6.31668 9.61287C6.31266 11.1397 7.55016 12.3772 9.08097 12.3772ZM19.218 22.2249C19.218 20.224 19.5997 18.2874 22.0787 18.2874C24.5216 18.2874 24.5578 20.5736 24.5578 22.3535V29.8147H29.3229V21.4013C29.3229 17.2709 28.431 14.0928 23.6055 14.0928C21.2872 14.0928 19.7323 15.3664 19.0935 16.5718H19.0292V14.4745H14.4528V29.8147H19.218V22.2249Z"
                  fill="#7230FE"
                />
              </svg>

              {/* Instagram */}
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.999 10.2537C13.4387 10.2537 9.75834 13.934 9.75834 18.4943C9.75834 23.0546 13.4387 26.7349 17.999 26.7349C22.5592 26.7349 26.2396 23.0546 26.2396 18.4943C26.2396 13.934 22.5592 10.2537 17.999 10.2537ZM17.999 23.8501C15.0499 23.8501 12.6432 21.4434 12.6432 18.4943C12.6432 15.5452 15.0499 13.1385 17.999 13.1385C20.9481 13.1385 23.3548 15.5452 23.3548 18.4943C23.3548 21.4434 20.9481 23.8501 17.999 23.8501ZM26.5771 7.99562C25.5124 7.99562 24.6525 8.85545 24.6525 9.92018C24.6525 10.9849 25.5124 11.8447 26.5771 11.8447C27.6418 11.8447 28.5016 10.9889 28.5016 9.92018C28.502 9.66735 28.4524 9.41695 28.3558 9.18331C28.2592 8.94967 28.1174 8.73738 27.9387 8.55861C27.7599 8.37983 27.5476 8.23808 27.314 8.14148C27.0803 8.04487 26.8299 7.99531 26.5771 7.99562ZM34.0624 18.4943C34.0624 16.2764 34.0825 14.0787 33.9579 11.8648C33.8333 9.29339 33.2467 7.01125 31.3664 5.13089C29.482 3.24652 27.2039 2.66393 24.6325 2.53938C22.4146 2.41482 20.2168 2.43491 18.003 2.43491C15.7851 2.43491 13.5874 2.41482 11.3735 2.53938C8.80209 2.66393 6.51995 3.25054 4.63959 5.13089C2.75522 7.01527 2.17263 9.29339 2.04807 11.8648C1.92352 14.0827 1.94361 16.2804 1.94361 18.4943C1.94361 20.7081 1.92352 22.9099 2.04807 25.1237C2.17263 27.6952 2.75923 29.9773 4.63959 31.8577C6.52397 33.7421 8.80209 34.3246 11.3735 34.4492C13.5914 34.5737 15.7891 34.5537 18.003 34.5537C20.2208 34.5537 22.4186 34.5737 24.6325 34.4492C27.2039 34.3246 29.486 33.738 31.3664 31.8577C33.2508 29.9733 33.8333 27.6952 33.9579 25.1237C34.0865 22.9099 34.0624 20.7121 34.0624 18.4943ZM30.5266 27.9684C30.2333 28.6996 29.8798 29.2461 29.3133 29.8086C28.7467 30.3751 28.2043 30.7287 27.4731 31.022C25.3597 31.8617 20.3414 31.6729 17.999 31.6729C15.6566 31.6729 10.6342 31.8617 8.52084 31.026C7.78959 30.7327 7.24316 30.3791 6.68066 29.8126C6.11414 29.2461 5.76057 28.7037 5.46727 27.9724C4.63156 25.855 4.82039 20.8367 4.82039 18.4943C4.82039 16.1519 4.63156 11.1296 5.46727 9.01616C5.76057 8.28491 6.11414 7.73848 6.68066 7.17598C7.24718 6.61348 7.78959 6.25589 8.52084 5.96259C10.6342 5.12688 15.6566 5.31571 17.999 5.31571C20.3414 5.31571 25.3637 5.12688 27.4771 5.96259C28.2083 6.25589 28.7548 6.60946 29.3173 7.17598C29.8838 7.7425 30.2374 8.28491 30.5307 9.01616C31.3664 11.1296 31.1775 16.1519 31.1775 18.4943C31.1775 20.8367 31.3664 25.855 30.5266 27.9684Z"
                  fill="#7230FE"
                />
              </svg>

              {/* Facebook */}
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7863 2.42493H3.2149C2.50374 2.42493 1.92918 2.99948 1.92918 3.71064V33.2821C1.92918 33.9932 2.50374 34.5678 3.2149 34.5678H32.7863C33.4975 34.5678 34.072 33.9932 34.072 33.2821V3.71064C34.072 2.99948 33.4975 2.42493 32.7863 2.42493ZM31.5006 31.9964H24.1037V22.1205H28.2823L28.9091 17.2709H24.1037V14.1731C24.1037 12.7669 24.4935 11.8106 26.5064 11.8106H29.0738V7.47136C28.6278 7.41109 27.1051 7.2785 25.3292 7.2785C21.6247 7.2785 19.0895 9.54055 19.0895 13.691V17.2669H14.9028V22.1164H19.0935V31.9964H4.50061V4.99636H31.5006V31.9964Z"
                  fill="#7230FE"
                />
              </svg>
            </div>
          </div>

          <div className="text-center mt-4 sm:mt-6">
            <p className="text-preto-impacto text-sm sm:text-base lg:text-lg font-medium">
              2025 TODOS DIREITOS RESERVADOS DESENVOLVIDO POR ESTÚDIO NOH
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
