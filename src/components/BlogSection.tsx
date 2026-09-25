import React, { useState } from 'react';
import { BookOpen, ArrowRight, X, Calendar, Clock, Terminal } from 'lucide-react';
import { cvData, TechnicalArticle } from '../data/cvData';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TechnicalArticle | null>(null);

  return (
    <section id="blog" className="py-20 border-b border-neutral-800/80 bg-[#0a0c12]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Technical Notes & Engineering Updates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Writing & Engineering Notes
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Articles and field logs on Natural Language Processing architectures, model serving with FastAPI, and systems programming.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvData.blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="bg-[#0e1017] border border-neutral-800 hover:border-neutral-700 transition-all p-6 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 uppercase tracking-wider">{post.category}</span>
                  <span className="text-neutral-500">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-sans group-hover:text-emerald-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">{post.date}</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {selectedArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedArticle.title}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div className="relative w-full max-w-2xl bg-[#0e1017] border border-neutral-800 shadow-2xl my-8 overflow-hidden max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#12151e]">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                  <Terminal className="w-4 h-4" />
                  <span>{selectedArticle.category}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                  className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span>{selectedArticle.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedArticle.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400">Furkan Yavuz</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {selectedArticle.title}
                  </h3>
                </div>

                <div className="p-4 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <span className="text-emerald-400">SUMMARY: </span>
                  {selectedArticle.summary}
                </div>

                <div className="space-y-4 text-sm text-neutral-300 font-sans leading-relaxed">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-2 text-xs font-mono">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 border-t border-neutral-800 bg-[#12151e] flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-1.5 text-xs font-mono uppercase bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
