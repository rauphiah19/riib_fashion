import MainNavigation from '@/components/common/MainNavigation';
import CMSDashboardContent from './components/CMSDashboardContent';

export const metadata = {
  title: 'CMS Admin Dashboard - RIIB Fashion',
  description: 'Content management dashboard for RIIB Fashion website. Manage products, collections, and site content.'
};

export default function CMSAdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <CMSDashboardContent />
    </div>
  );
}
