'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function FilterPanel({ 
  categories, 
  sortOptions, 
  selectedCategory, 
  selectedSort, 
  onCategoryChange, 
  onSortChange,
  onSearchChange,
  searchQuery 
}) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-24">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full flex items-center justify-center gap-12 px-24 py-18 bg-card border border-border rounded-md font-caption font-medium text-text-primary transition-smooth hover:bg-muted focus-ring"
          aria-label="Open filters"
        >
          <Icon name="AdjustmentsHorizontalIcon" size={20} />
          <span>Filters & Sort</span>
        </button>
      </div>
      {/* Desktop Filter Panel */}
      <div className="hidden md:block bg-card rounded-lg shadow-warm p-24 md:p-32 lg:p-36 mb-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-32">
          {/* Search */}
          <div className="space-y-12">
            <label className="font-caption text-sm font-medium text-text-primary">
              Search Products
            </label>
            <div className="relative">
              <Icon 
                name="MagnifyingGlassIcon" 
                size={20} 
                className="absolute left-18 top-1/2 -translate-y-1/2 text-text-secondary"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                placeholder="Search by name..."
                className="w-full pl-48 pr-18 py-12 bg-input border border-border rounded-md font-body text-base text-text-primary placeholder:text-text-secondary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-12">
            <label className="font-caption text-sm font-medium text-text-primary">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e?.target?.value)}
              className="w-full px-18 py-12 bg-input border border-border rounded-md font-body text-base text-text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6B6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '20px'
              }}
            >
              {categories?.map((category) => (
                <option key={category?.value} value={category?.value}>
                  {category?.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="space-y-12">
            <label className="font-caption text-sm font-medium text-text-primary">
              Sort By
            </label>
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e?.target?.value)}
              className="w-full px-18 py-12 bg-input border border-border rounded-md font-body text-base text-text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6B6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '20px'
              }}
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Mobile Filter Slide-out Panel */}
      {isMobileFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/95 z-200 md:hidden"
            onClick={() => setIsMobileFilterOpen(false)}
          ></div>
          
          <div className="fixed top-0 right-0 bottom-0 w-[320px] bg-card shadow-warm-2xl z-200 md:hidden overflow-y-auto">
            <div className="p-24 space-y-32">
              {/* Header */}
              <div className="flex items-center justify-between pb-18 border-b border-border">
                <h3 className="font-heading text-h5 font-semibold text-text-primary">
                  Filters & Sort
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-12 -mr-12 transition-smooth hover:bg-muted rounded-md focus-ring"
                  aria-label="Close filters"
                >
                  <Icon name="XMarkIcon" size={24} className="text-text-primary" />
                </button>
              </div>

              {/* Search */}
              <div className="space-y-12">
                <label className="font-caption text-sm font-medium text-text-primary">
                  Search Products
                </label>
                <div className="relative">
                  <Icon 
                    name="MagnifyingGlassIcon" 
                    size={20} 
                    className="absolute left-18 top-1/2 -translate-y-1/2 text-text-secondary"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e?.target?.value)}
                    placeholder="Search by name..."
                    className="w-full pl-48 pr-18 py-12 bg-input border border-border rounded-md font-body text-base text-text-primary placeholder:text-text-secondary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-12">
                <label className="font-caption text-sm font-medium text-text-primary">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e?.target?.value)}
                  className="w-full px-18 py-12 bg-input border border-border rounded-md font-body text-base text-text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6B6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '20px'
                  }}
                >
                  {categories?.map((category) => (
                    <option key={category?.value} value={category?.value}>
                      {category?.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="space-y-12">
                <label className="font-caption text-sm font-medium text-text-primary">
                  Sort By
                </label>
                <select
                  value={selectedSort}
                  onChange={(e) => onSortChange(e?.target?.value)}
                  className="w-full px-18 py-12 bg-input border border-border rounded-md font-body text-base text-text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6B6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '20px'
                  }}
                >
                  {sortOptions?.map((option) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full px-32 py-18 bg-accent text-accent-foreground rounded-md font-caption font-medium text-base transition-smooth hover:bg-accent/90 shadow-warm hover:shadow-warm-md press-scale focus-ring"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

FilterPanel.propTypes = {
  categories: PropTypes?.arrayOf(
    PropTypes?.shape({
      value: PropTypes?.string?.isRequired,
      label: PropTypes?.string?.isRequired
    })
  )?.isRequired,
  sortOptions: PropTypes?.arrayOf(
    PropTypes?.shape({
      value: PropTypes?.string?.isRequired,
      label: PropTypes?.string?.isRequired
    })
  )?.isRequired,
  selectedCategory: PropTypes?.string?.isRequired,
  selectedSort: PropTypes?.string?.isRequired,
  onCategoryChange: PropTypes?.func?.isRequired,
  onSortChange: PropTypes?.func?.isRequired,
  onSearchChange: PropTypes?.func?.isRequired,
  searchQuery: PropTypes?.string?.isRequired
};