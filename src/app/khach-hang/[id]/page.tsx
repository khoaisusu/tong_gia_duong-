'use client';

import { useState, useEffect } from 'react';
import CustomerForm from '@/components/khach-hang/CustomerForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

interface Customer {
  id: string;
  ten: string;
  sdt: string;
  diaChi: string;
  ngayTao: string;
  trangThai: string;
}

export default function ChiTietKhachHangPage() {
  const router = useRouter();
  const params = useParams();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Load customer data from Google Sheets
    if (params.id) {
      // Mock data for now
      setCustomer({
        id: params.id as string,
        ten: '',
        sdt: '',
        diaChi: '',
        ngayTao: '',
        trangThai: 'active'
      });
      setLoading(false);
    }
  }, [params.id]);

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Update customer in Google Sheets
      console.log('Updating customer:', data);
      router.push('/khach-hang');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Đang tải...</div>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold text-gray-800">Chi Tiết Khách Hàng</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <CustomerForm 
            initialData={customer}
            onSubmit={handleSubmit}
            isEdit={true}
          />
        </div>
      </div>
    </div>
  );
}