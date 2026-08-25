import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/mockData';
import { MapPin, Clock, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenQuote: (serviceName?: string) => void;
}

type ProjectFilter = 'all' | 'construction' | 'renovation' | 'finishing' | 'exterior' | 'residential' | 'commercial';

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  const filterTabs: { id: ProjectFilter; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'finishing', label: 'Interior Finishing' },
    { id: 'renovation', label: 'Renovations' },
    { id: 'construction', label: 'Construction' },
    { id: 'exterior', label: 'Exterior & Concrete' },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 relative bg-[#09090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-extrabold">
                Portfolio of Distinction
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Featured Jamaican <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl">
              Explore our completed residential villas, luxury retail spaces, and commercial developments across Kingston, St. Andrew, Montego Bay, and St. Ann.
            </p>
          </div>

          <div className="gloss-block px-5 py-3 rounded-2xl text-xs font-bold text-gray-300">
            <span className="text-red-500 font-extrabold">100%</span> Verified Project Portfolio
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                  : 'gloss-block text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="clay-card gloss-block-interactive flex flex-col overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/30" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 red-gloss px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                  {project.categoryLabel}
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-200">
                  <span className="flex items-center gap-1 font-semibold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-gray-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {project.completionTime}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-red-500 group-hover:text-red-400">
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="clay-card max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full gloss-block flex items-center justify-center text-gray-300 hover:text-white hover:border-red-500 transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="red-gloss px-4 py-1.5 rounded-full text-xs font-black uppercase text-white">
                  {selectedProject.categoryLabel}
                </span>
                <span className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {selectedProject.location}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Project Highlights */}
            <div className="bg-white/5 rounded-2xl p-5 mb-6 border border-white/10">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-red-500 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Key Architectural &amp; Finishing Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const pName = selectedProject.title;
                  setSelectedProject(null);
                  onOpenQuote(pName);
                }}
                className="red-gloss flex-1 py-4 rounded-2xl font-black uppercase text-xs tracking-widest text-white text-center cursor-pointer shadow-lg shadow-red-600/30"
              >
                Inquire About Similar Build
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="gloss-block px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-gray-300 hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
