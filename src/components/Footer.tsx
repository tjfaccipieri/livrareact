import {
  Copyright,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react';

function Footer() {
  return (
    <div className="bg-purple-700 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 py-4 gap-4 items-center">
        <h2 className="text-center flex gap-2 items-center text-lg">
          Todos os direitos reservados: LivraReact <Copyright weight="fill" /> -
          2023
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <p>Acesse nossas redes sociais:</p>
          <div className="flex gap-8">
            <LinkedinLogo
              size={32}
              weight="fill"
              className="hover:text-purple-400 cursor-pointer"
            />
            <InstagramLogo
              size={32}
              weight="fill"
              className="hover:text-purple-400 cursor-pointer"
            />
            <TwitterLogo
              size={32}
              weight="fill"
              className="hover:text-purple-400 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center">
            Cadastre-se na nossa newsletter de promoções:
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Seu melhor e-mail aqui"
              className="w-full border-2 rounded-lg border-purple-900 py-1 text-black px-4 font-medium"
            />
            <button className="bg-teal-500 px-4 rounded-lg hover:bg-teal-600">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
