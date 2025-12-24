'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterPanel from './FilterPanel';
import ProductGrid from './ProductGrid';

export default function CollectionsInteractive({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'hijabs', label: 'Hijabs' },
    { value: 'ready-to-wear', label: 'Ready-to-Wear' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  useEffect(() => {
    filterAndSortProducts();
  }, [selectedCategory, selectedSort, searchQuery, products]);

  const filterAndSortProducts = () => {
    setIsLoading(true);

    setTimeout(() => {
      let filtered = [...products];

      if (selectedCategory !== 'all') {
        filtered = filtered?.filter(product => product?.category === selectedCategory);
      }

      if (searchQuery?.trim()) {
        const query = searchQuery?.toLowerCase();
        filtered = filtered?.filter(product => 
          product?.name?.toLowerCase()?.includes(query) ||
          (product?.description && product?.description?.toLowerCase()?.includes(query))
        );
      }

      switch (selectedSort) {
        case 'newest':
          filtered?.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
          break;
        case 'price-low':
          filtered?.sort((a, b) => a?.price - b?.price);
          break;
        case 'price-high':
          filtered?.sort((a, b) => b?.price - a?.price);
          break;
        case 'featured':
        default:
          filtered?.sort((a, b) => (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0));
          break;
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="space-y-36">
      <FilterPanel
        categories={categories}
        sortOptions={sortOptions}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      <div className="space-y-24">
        <div className="flex items-center justify-between">
          <p className="font-caption text-sm md:text-base text-text-secondary">
            Showing {filteredProducts?.length} of {products?.length} products
          </p>
        </div>

        <ProductGrid 
          products={filteredProducts} 
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

CollectionsInteractive.propTypes = {
  initialProducts: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      description: PropTypes?.string,
      price: PropTypes?.number?.isRequired,
      originalPrice: PropTypes?.number,
      image: PropTypes?.string?.isRequired,
      category: PropTypes?.string?.isRequired,
      badge: PropTypes?.string,
      featured: PropTypes?.bool,
      dateAdded: PropTypes?.string
    })
  )?.isRequired
};