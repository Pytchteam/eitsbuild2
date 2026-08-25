import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PROJECTS_DATA, PARISHES_JAMAICA } from '../data/mockData';
import { ProjectItem } from '../types';
import { 
  MapPin, Clock, ArrowRight, X, Sparkles, CheckCircle2, 
  ExternalLink, Building, Home, Hammer, ShieldCheck, Filter
} from 'lucide-react';

interface ProjectsPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedParish, setSelectedParish] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Villas' },
    { id: 'commercial', label: 'Commercial & Retail' },
    { id: 'renovation', label: 'Luxury Remodels' },
    { id: 'exterior', label: 'Exterior & Patios' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCat = activeCategory === 'all' || proj.category === activeCategory;
    const matchesParish = selectedParish === 'all' || proj.parish.toLowerCase().includes(selectedParish.toLowerCase());
    return matchesCat && matchesParish;
  });

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader
        badge="Portfolio of Works"
        title="Featured Jamaican"
        highlightedWord="Projects"
        description="Browse our portfolio of completed luxury residential villas, commercial plazas, turnkey renovations, and specialized exterior developments across Jamaica."
        currentPage="Projects"
        onNavigate={onNavigate}
        ctaText="Start Your Project"
        onCtaClick={() => onOpenQuote()}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                      : 'gloss-block text-gray-300 hover:text-white hover:border-red-500/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Parish Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-red-500 shrink-0" />
              <select
                value={selectedParish}
                onChange={(e) => setSelectedParish(e.target.value)}
                className="neomorph-input text-xs text-white px-3.5 py-2 rounded-xl outline-none"
              >
                <option value="all">All Parishes</option>
                {PARISHES_JAMAICA.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="clay-card rounded-[32px] overflow-hidden group hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image View */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-black/30" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 gloss-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                    {project.categoryLabel}
                  </div>

                  {/* Parish Tag */}
                  <div className="absolute top-4 right-4 gloss-block px-3 py-1 rounded-full text-[10px] font-extrabold text-amber-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>{project.location}</span>
                  </div>

                  {/* Completion badge */}
                  <div className="absolute bottom-3 right-4 gloss-block px-2.5 py-1 rounded-lg text-[10px] font-bold text-gray-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-500" />
                    <span>Turnaround: {project.completionTime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-red-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-white/5 mb-6">
                      {project.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="gloss-block flex-1 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-white hover:border-red-500/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-3 h-3 text-red-500" />
                    </button>
                    <button
                      onClick={() => onOpenQuote(project.categoryLabel)}
                      className="red-gloss px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-1 cursor-pointer hover:scale-105 transition-transform"
                      title="Quote similar project"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="clay-card p-12 text-center my-8">
              <p className="text-gray-400 text-sm">No projects found matching the selected filters.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedParish('all');
                }}
                className="mt-4 red-gloss px-6 py-2.5 rounded-full text-xs font-bold text-white uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Project Consultation Banner */}
          <div className="mt-16 clay-card p-8 sm:p-12 rounded-[32px] text-center border border-red-500/30 bg-gradient-to-b from-[#141418] to-[#0A0A0C]">
            <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-2">
              Have an Architectural Drawing or Project in Mind?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
              Bring Your Blueprint to Life with E.I.T.S
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
              From Kingston high-rises to beachfront villas in Ocho Rios and Montego Bay, our experienced builders ensure structural integrity and flawless luxury finishing.
            </p>
            <button
              onClick={() => onOpenQuote()}
              className="red-gloss px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Get an Itemized Project Estimate
            </button>
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="clay-card max-w-2xl w-full p-6 sm:p-8 relative border border-white/20 my-8 shadow-2xl rounded-[32px] overflow-hidden">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full gloss-block flex items-center justify-center text-gray-300 hover:text-white hover:border-red-500 transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden border-b border-white/10">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6">
                <span className="gloss-block px-3 py-1 rounded-full text-[10px] font-black uppercase text-white">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <strong>Location:</strong> {activeModalProject.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-red-500" />
                  <strong>Turnaround:</strong> {activeModalProject.completionTime}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="pt-3 border-t border-white/10">
                <h4 className="text-xs font-black uppercase tracking-wider text-white mb-2">
                  Key Scope &amp; Architectural Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.highlights.map((hl, i) => (
                    <div key={i} className="gloss-block p-2.5 rounded-xl flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onOpenQuote(`Project Inquiry: ${title}`);
                  }}
                  className="red-gloss w-full py-4 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/30 hover:scale-[1.02] transition-transform"
                >
                  <span>Request Quote for Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
