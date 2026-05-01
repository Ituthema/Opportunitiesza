import { Link } from "react-router-dom";
import guidesData from "../data/guides.json";
import { type Guide } from "../types";

export default function Guides() {
  const guides = guidesData as Guide[];

  return (
    <div>
      <section className="bg-sa-cloud py-12 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-sa-ink mb-4">
            SETA & Career Guides
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Understand how the South African skills development system works, learn how to prepare your applications, and discover tips for career success.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map(guide => (
            <article key={guide.id} className="bg-white border text-left border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-mono tracking-wider text-sa-green uppercase mb-3 block">
                  {guide.category.replace("-", " ")}
                </span>
                <h2 className="text-xl font-heading font-bold text-sa-ink mb-3 group-hover:text-sa-green transition-colors">
                  <Link to={`/seta-guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                  {guide.intro}
                </p>
                <Link to={`/seta-guides/${guide.slug}`} className="text-sm font-semibold text-sa-green mt-auto">
                  Read Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
