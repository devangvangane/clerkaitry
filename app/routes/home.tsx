import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'en'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'hi'
                ? 'bg-orange-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Switch to Hindi"
          >
            हि
          </button>
          <button
            onClick={() => setLanguage('gu')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'gu'
                ? 'bg-green-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Switch to Gujarati"
          >
            ગુ
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="fixed top-4 left-4 z-50">
        <div className="flex gap-2">
          <Link
            to="/language"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {t('language.select')}
          </Link>
          <Link
            to="/standards"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            {t('standards.select')}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Welcome />
      </main>
    </div>
  );
}