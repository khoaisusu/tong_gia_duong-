'use client';

import CustomerForm from '@/components/khach-hang/CustomerForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ThemKhachHangPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Submit to Google Sheets
      console.log('Submitting customer data:', data);
      router.push('/khach-hang');
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/khach-hang"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Thêm Khách Hàng Mới</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <CustomerForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}