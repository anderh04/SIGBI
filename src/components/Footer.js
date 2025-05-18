import React from 'react';

const Footer = () => {
  // Iconos SVG como componentes
  const EmailIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
    </svg>
  );

  const SocialIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>
    </svg>
  );

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookIcon />
              <h3 className="text-lg font-semibold">Bibliotech CRUBA</h3>
            </div>
            <p className="text-gray-300">
              Sistema de gestión bibliotecaria para la Universidad CRUBA.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <SocialIcon />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <SocialIcon />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <SocialIcon />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <EmailIcon />
                <span>biblioteca@cruba.edu</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <LocationIcon />
                <span>Av. Universidad 123</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <ClockIcon />
                <span>Lunes a Viernes: 8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-center">
                <ClockIcon />
                <span>Sábados: 9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex items-center">
                <ClockIcon />
                <span>Domingos: Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Biblioteca CRUBA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// DONE