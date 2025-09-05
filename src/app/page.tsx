export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Tống Gia Đường
        </h1>
        <p className="text-center text-gray-600">
          Hệ thống quản lý phòng khám vật lý trị liệu
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <a href="/khach-hang" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Khách Hàng</h2>
            <p className="text-gray-600">Quản lý thông tin khách hàng</p>
          </a>
          
          <a href="/don-hang" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Đơn Hàng</h2>
            <p className="text-gray-600">Tạo và quản lý đơn hàng</p>
          </a>
          
          <a href="/lieu-trinh" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Liệu Trình</h2>
            <p className="text-gray-600">Theo dõi liệu trình điều trị</p>
          </a>
        </div>
      </div>
    </div>
  )
}