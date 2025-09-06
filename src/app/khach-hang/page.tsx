'use client';

import { useState, useEffect } from 'react';
import CustomerTable from '@/components/khach-hang/CustomerTable';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface Customer {
  id: string;
  ten: string;
  sdt: string;
  diaChi: string;
  ngayTao: string;
  trangThai: string;
}

export default function KhachHangPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Load customers from Google Sheets
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Quản lý Khách Hàng</h1>
          <Link
            href="/khach-hang/them-moi"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Thêm Khách Hàng
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <CustomerTable 
            customers={customers}
            loading={loading}
            onRefresh={() => {
              // TODO: Refresh data
            }}
          />
        </div>
      </div>
    </div>
  );
}