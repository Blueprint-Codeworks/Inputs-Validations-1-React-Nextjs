import { Twitter, Github , Instagram, Facebook, Youtube } from 'lucide-react';
const CustomTikTokIcon = () => (
    <svg 
      fill="#000000" 
      width="24px"  // Ajusta el tamaño según lo que necesites
      height="24px" 
      viewBox="0 0 512 512" 
      xmlns="http://www.w3.org/2000/svg"
 className="w-8 h-8 fill-current text-black dark:text-white"
    >
      <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
    </svg>
  );

const SocialSection = () => {
    return (
        <div className="social-section mt-[80px]">
        <h1 className="blueprint-title text-3xl font-bold text-center mb-4 dark:text-white">
          Blueprint Codeworks
        </h1>
        <p className="social-text text-center text-gray-600 mb-6 dark:text-gray-300">
          Síguenos en nuestras redes sociales
        </p>
        <div className="social-icons flex justify-center space-x-6">
          <a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <Twitter className="icon w-8 h-8 text-blue-500 dark:text-blue-400" />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <Github className="icon w-8 h-8 text-gray-900 dark:text-gray-100" />
          </a>
          <a
            href="https://www.instagram.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <Instagram className="icon w-8 h-8 text-pink-500 dark:text-pink-400" />
          </a>
          <a
            href="https://www.tiktok.com/@tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <CustomTikTokIcon />
          </a>
          <a
            href="https://www.facebook.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <Facebook className="icon w-8 h-8 text-blue-600 dark:text-blue-500" />
          </a>
          <a
            href="https://www.youtube.com/c/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <Youtube className="icon w-8 h-8 text-red-600 dark:text-red-500" />
          </a>
        </div>
      </div>
      
    );
};

export default SocialSection;
