
import React, { useState, useMemo } from 'react';
import { PortalFolder, PortalApp, BreadcrumbItem } from './types';
import { mockPortalData } from './services/mockData';
import { FolderIcon, AppIcon, ChevronRight, SearchIcon, getCategoryConfig } from './components/Icon';

// static asset import (handled by Vite)
import logo from './assets/bdo_logo.png';

const App: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState<PortalFolder>(mockPortalData);
  const [path, setPath] = useState<BreadcrumbItem[]>([{ id: 'root', name: 'Home' }]);
  const [searchQuery, setSearchQuery] = useState('');

  // Helper to find a folder by ID in the tree
  const findFolderById = (folder: PortalFolder, id: string): PortalFolder | null => {
    if (folder.id === id) return folder;
    for (const sub of folder.subfolders) {
      const found = findFolderById(sub, id);
      if (found) return found;
    }
    return null;
  };

  const navigateToFolder = (folder: PortalFolder) => {
    setCurrentFolder(folder);
    
    // Update breadcrumb path
    const buildPath = (root: PortalFolder, targetId: string, currentPath: BreadcrumbItem[] = []): BreadcrumbItem[] | null => {
      const nextPath = [...currentPath, { id: root.id, name: root.name }];
      if (root.id === targetId) return nextPath;
      for (const sub of root.subfolders) {
        const found = buildPath(sub, targetId, nextPath);
        if (found) return found;
      }
      return null;
    };

    const newPath = buildPath(mockPortalData, folder.id);
    if (newPath) setPath(newPath);
    setSearchQuery('');
  };

  const handleBreadcrumbClick = (id: string) => {
    const target = findFolderById(mockPortalData, id);
    if (target) navigateToFolder(target);
  };


  const filteredApps = useMemo(() => {
    if (!searchQuery) return currentFolder.applications;
    
    // Basic local search
    const results: PortalApp[] = [];
    const traverse = (f: PortalFolder) => {
      f.applications.forEach(app => {
        if (app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            app.description.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push(app);
        }
      });
      f.subfolders.forEach(traverse);
    };
    traverse(mockPortalData);
    return results;
  }, [searchQuery, currentFolder]);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="BDO Logo" 
              className="h-8 md:h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="border-l border-slate-200 pl-3 ml-1">
            <h1 className="text-xl font-bold text-slate-900 leading-tight">FSO APPS</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Portal</p>
          </div>
        </div>

        <div className="flex-1 max-w-2xl group">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-bdo-red transition-colors" />
            <input 
              type="text"
              placeholder="Search apps..."
              className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-bdo-red focus:bg-white transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 max-w-7xl mx-auto w-full">
        
        {/* Navigation / Breadcrumbs */}
        {!searchQuery && (
          <nav className="flex items-center gap-2 text-sm text-slate-500 bg-white/50 p-2 rounded-lg inline-flex">
            {path.map((item, idx) => (
              <React.Fragment key={item.id}>
                <button 
                  onClick={() => handleBreadcrumbClick(item.id)}
                  className={`hover:text-bdo-red transition-colors ${idx === path.length - 1 ? 'font-semibold text-slate-900' : ''}`}
                >
                  {item.name}
                </button>
                {idx < path.length - 1 && <ChevronRight className="w-4 h-4" />}
              </React.Fragment>
            ))}
          </nav>
        )}



        {/* Section Title */}
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : currentFolder.name}
          </h2>
          <p className="text-slate-500">
            {searchQuery 
              ? `Found ${filteredApps.length} applications matching your query.` 
              : `Explore ${currentFolder.subfolders.length} categories and ${currentFolder.applications.length} tools.`
            }
          </p>
        </div>

        {/* Subfolders Grid */}
        {!searchQuery && currentFolder.subfolders.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentFolder.subfolders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => navigateToFolder(folder)}
                className="group flex items-center gap-4 bg-white p-5 rounded-3xl border border-slate-200 hover:border-bdo-red/30 hover:shadow-xl hover:shadow-bdo-red/5 transition-all text-left"
              >
                <div className="bg-slate-50 p-3 rounded-2xl group-hover:bg-bdo-red/5 group-hover:text-bdo-red transition-colors">
                  <FolderIcon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 truncate">{folder.name}</h3>
                  <p className="text-xs text-slate-500">{folder.subfolders.length + folder.applications.length} items</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-bdo-red/50 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
          </div>
        )}

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => {
              const config = getCategoryConfig(app.category);
              return (
                <a
                  key={app.id}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-bdo-red/40 hover:shadow-2xl hover:shadow-bdo-red/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${config.bg} ${config.color} p-4 rounded-2xl ${config.hoverBg} group-hover:text-white transition-all duration-300`}>
                      <AppIcon className="w-8 h-8" />
                    </div>
                    <span className={`${config.badge} text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full group-hover:opacity-90 transition-opacity`}>
                      {app.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-bdo-red transition-colors">{app.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                    {app.description}
                  </p>
                  <div className={`flex items-center text-sm font-bold ${config.color.includes('indigo') ? config.color.replace('indigo', 'bdo-red') : config.color.includes('red') ? config.color.replace('red', 'bdo-red') : config.color}`}>
                    Launch Application
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none ${config.color}`}>
                    <AppIcon className="w-24 h-24" />
                  </div>
                </a>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <SearchIcon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No applications found</h3>
              <p className="text-slate-500">Try adjusting your search or navigate using the folders above.</p>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer / Info */}
      <footer className="bg-white border-t border-slate-200 px-8 py-4 text-center">
        <p className="text-xs text-slate-400 font-medium">
          &copy; 2024 BDO FSO APPS PORTAL &bull; Enterprise Application Gateway &bull; <span className="text-bdo-red">Powered by Gemini AI</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
