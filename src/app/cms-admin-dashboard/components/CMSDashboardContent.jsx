'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function DashboardCard({ title, description, icon, href, stats }) {
  return (
    <Link 
      href={href}
      className="block bg-card rounded-lg p-24 shadow-warm hover:shadow-warm-lg transition-smooth hover-lift border border-border"
    >
      <div className="flex items-start justify-between mb-18">
        <div className="flex-1">
          <h3 className="font-heading text-h5 font-semibold text-text-primary mb-12">
            {title}
          </h3>
          <p className="text-text-secondary text-sm font-body">
            {description}
          </p>
        </div>
        <div className="text-primary text-3xl ml-18">
          {icon}
        </div>
      </div>
      {stats && (
        <div className="mt-18 pt-18 border-t border-border">
          <p className="text-data font-data text-sm text-text-secondary">
            {stats}
          </p>
        </div>
      )}
    </Link>
  );
}

DashboardCard.propTypes = {
  title: PropTypes?.string?.isRequired,
  description: PropTypes?.string?.isRequired,
  icon: PropTypes?.node?.isRequired,
  href: PropTypes?.string?.isRequired,
  stats: PropTypes?.string
};

function QuickAction({ label, onClick, variant = 'primary' }) {
  const baseClasses = "px-24 py-12 rounded-md font-caption font-medium transition-smooth";
  const variantClasses = variant === 'primary' 
    ? "bg-primary text-primary-foreground hover:bg-primary/90"
    : "bg-accent text-accent-foreground hover:bg-accent/90";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {label}
    </button>
  );
}

QuickAction.propTypes = {
  label: PropTypes?.string?.isRequired,
  onClick: PropTypes?.func?.isRequired,
  variant: PropTypes?.oneOf(['primary', 'secondary'])
};

export default function CMSDashboardContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenCMS = () => {
    window.open('/admin/', '_blank');
  };

  const handleViewSite = () => {
    window.open('/home', '_blank');
  };

  if (!mounted) {
    return (
      <div className="container mx-auto px-18 py-48">
        <div className="animate-pulse">
          <div className="h-32 bg-muted rounded w-1/3 mb-24"></div>
          <div className="h-18 bg-muted rounded w-2/3 mb-48"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {[1, 2, 3, 4, 5, 6]?.map((i) => (
              <div key={i} className="h-200 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-18 py-48">
      {/* Header */}
      <div className="mb-48">
        <h1 className="font-heading text-h2 font-bold text-text-primary mb-12">
          Content Management Dashboard
        </h1>
        <p className="text-text-secondary font-body text-lg mb-24">
          Manage your RIIB Fashion website content with ease. Update products, collections, and site information.
        </p>
        <div className="flex flex-wrap gap-12">
          <QuickAction 
            label="Open CMS Editor" 
            onClick={handleOpenCMS}
            variant="primary"
          />
          <QuickAction 
            label="View Live Site" 
            onClick={handleViewSite}
            variant="secondary"
          />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mb-48">
        <DashboardCard
          title="Products"
          description="Add, edit, and manage product listings including images, pricing, and descriptions."
          icon="🛍️"
          href="/admin/#/collections/products"
          stats="Manage product catalog"
        />

        <DashboardCard
          title="Collections"
          description="Organize products into collections and manage category information."
          icon="📦"
          href="/admin/#/collections/collections"
          stats="Organize product groups"
        />

        <DashboardCard
          title="Homepage"
          description="Update hero section, featured collections, and brand story teaser."
          icon="🏠"
          href="/admin/#/collections/homepage"
          stats="Edit homepage content"
        />

        <DashboardCard
          title="About Page"
          description="Edit brand story, founder information, and company values."
          icon="ℹ️"
          href="/admin/#/collections/about"
          stats="Update brand narrative"
        />

        <DashboardCard
          title="Contact Info"
          description="Update contact details, social media links, and business information."
          icon="📞"
          href="/admin/#/collections/settings/contact"
          stats="Manage contact details"
        />

        <DashboardCard
          title="Site Settings"
          description="Configure general site settings, shipping info, and policies."
          icon="⚙️"
          href="/admin/#/collections/settings/general"
          stats="Configure site options"
        />
      </div>

      {/* Getting Started Guide */}
      <div className="bg-card rounded-lg p-32 shadow-warm border border-border">
        <h2 className="font-heading text-h4 font-semibold text-text-primary mb-24">
          Getting Started with Netlify CMS
        </h2>
        
        <div className="space-y-24">
          <div>
            <h3 className="font-heading text-h6 font-semibold text-text-primary mb-12">
              📝 Step 1: Access the CMS
            </h3>
            <p className="text-text-secondary font-body">
              Click "Open CMS Editor" above to access the content management interface. You'll be able to edit all content directly through a user-friendly interface.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-h6 font-semibold text-text-primary mb-12">
              🔐 Step 2: Authentication Setup
            </h3>
            <p className="text-text-secondary font-body mb-12">
              For production use, you'll need to configure Git Gateway authentication through Netlify:
            </p>
            <ul className="list-disc list-inside text-text-secondary font-body space-y-6 ml-12">
              <li>Deploy your site to Netlify</li>
              <li>Enable Identity service in Netlify dashboard</li>
              <li>Enable Git Gateway in Identity settings</li>
              <li>Invite team members via email</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-h6 font-semibold text-text-primary mb-12">
              💾 Step 3: Local Development
            </h3>
            <p className="text-text-secondary font-body mb-12">
              For local testing, the CMS is configured with local backend support:
            </p>
            <ul className="list-disc list-inside text-text-secondary font-body space-y-6 ml-12">
              <li>Run <code className="bg-muted px-6 py-3 rounded text-sm">npx netlify-cms-proxy-server</code> in a separate terminal</li>
              <li>Access CMS at <code className="bg-muted px-6 py-3 rounded text-sm">/admin/</code></li>
              <li>Changes are saved directly to your local files</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-h6 font-semibold text-text-primary mb-12">
              🎨 Step 4: Managing Content
            </h3>
            <p className="text-text-secondary font-body">
              Use the dashboard cards above to navigate to different content sections. Each section provides an intuitive interface for editing with real-time preview capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Content Folders Info */}
      <div className="mt-24 bg-accent/10 rounded-lg p-24 border border-accent/20">
        <h3 className="font-heading text-h6 font-semibold text-text-primary mb-12">
          📁 Content Storage
        </h3>
        <p className="text-text-secondary font-body text-sm">
          All content is stored in the <code className="bg-muted px-6 py-3 rounded text-sm">content/</code> folder as JSON files. 
          Images are uploaded to <code className="bg-muted px-6 py-3 rounded text-sm">public/assets/images/uploads/</code>. 
          Changes are tracked via Git, providing version control and collaboration capabilities.
        </p>
      </div>
    </div>
  );
}
