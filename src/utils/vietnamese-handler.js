// utils/vietnamese-handler.js
// Utility hoàn chỉnh để xử lý mapping tiếng Việt trong toàn bộ dự án

/**
 * COLUMN MAPPING CONFIGURATION
 * Map giữa tên field trong code (không dấu) và header trong Google Sheets (có dấu)
 */
export const COLUMN_MAPPING = {
  // Sheet: Khách Hàng
  khachHang: {
    maKhachHang: "Mã Khách Hàng",
    hoTen: "Họ Tên", 
    soDienThoai: "Số Điện Thoại",
    namSinh: "Năm Sinh",
    tenThuongGoi: "Tên Thường Gọi",
    diaChi: "Địa Chỉ",
    trangThai: "Trạng Thái",
    ngayTao: "Ngày Tạo",
    ghiChu: "Ghi Chú"
  },
  
  // Sheet: Nhân Viên
  nhanVien: {
    maNhanVien: "Mã Nhân Viên",
    hoTen: "Họ Tên",
    email: "Email",
    chucVu: "Chức Vụ",
    soDienThoai: "Số Điện Thoại",
    soCMND: "Số CMND/CCCD",
    diaChi: "Địa Chỉ",
    tyLeHoaHong: "Tỷ Lệ Hoa Hồng (%)",
    ngayVaoLam: "Ngày Vào Làm",
    trangThai: "Trạng Thái"
  },
  
  // Sheet: Sản Phẩm  
  sanPham: {
    maSanPham: "Mã Sản Phẩm",
    tenSanPham: "Tên Sản Phẩm",
    donViTinh: "Đơn Vị Tính",
    giaBan: "Giá Bán",
    giaVon: "Giá Vốn",
    tonKho: "Tồn Kho",
    moTa: "Mô Tả",
    danhMuc: "Danh Mục",
    trangThai: "Trạng Thái"
  },
  
  // Sheet: Dịch Vụ
  dichVu: {
    maDichVu: "Mã Dịch Vụ",
    tenDichVu: "Tên Dịch Vụ",
    donViTinh: "Đơn Vị Tính",
    giaDichVu: "Giá Dịch Vụ",
    thoiGian: "Thời Gian (phút)",
    moTa: "Mô Tả",
    tyLeHoaHong: "Tỷ Lệ Hoa Hồng (%)",
    trangThai: "Trạng Thái"
  },
  
  // Sheet: Đơn Hàng
  donHang: {
    maDonHang: "Mã Đơn Hàng",
    maKhachHang: "Mã Khách Hàng",
    tenKhachHang: "Tên Khách Hàng",
    ngayLap: "Ngày Lập",
    tongTien: "Tổng Tiền",
    giamGia: "Giảm Giá",
    thanhTien: "Thành Tiền",
    maNhanVien: "Mã Nhân Viên",
    tenNhanVien: "Tên Nhân Viên",
    trangThai: "Trạng Thái",
    tinhTrangThanhToan: "Tình Trạng Thanh Toán",
    ghiChu: "Ghi Chú"
  },
  
  // Sheet: Chi Tiết Đơn Hàng
  chiTietDonHang: {
    maChiTiet: "Mã Chi Tiết",
    maDonHang: "Mã Đơn Hàng",
    loaiHangHoa: "Loại Hàng Hóa", // "Sản Phẩm" hoặc "Dịch Vụ"
    maHangHoa: "Mã Hàng Hóa",
    tenHangHoa: "Tên Hàng Hóa",
    soLuong: "Số Lượng",
    donGia: "Đơn Giá",
    thanhTien: "Thành Tiền"
  },
  
  // Sheet: Liệu Trình
  lieuTrinh: {
    maLieuTrinh: "Mã Liệu Trình",
    maKhachHang: "Mã Khách Hàng",
    tenKhachHang: "Tên Khách Hàng",
    maDichVu: "Mã Dịch Vụ",
    tenDichVu: "Tên Dịch Vụ",
    maNhanVien: "Mã Nhân Viên",
    tenNhanVien: "Tên Nhân Viên",
    ngayBatDau: "Ngày Bắt Đầu",
    tongSoBuoi: "Tổng Số Buổi",
    soBuoiDaSuDung: "Số Buổi Đã Sử Dụng",
    soBuoiConLai: "Số Buổi Còn Lại",
    trangThai: "Trạng Thái",
    ghiChu: "Ghi Chú"
  },
  
  // Sheet: Lịch Sử Điều Trị
  lichSuDieuTri: {
    maLichSu: "Mã Lịch Sử",
    maLieuTrinh: "Mã Liệu Trình",
    maKhachHang: "Mã Khách Hàng",
    tenKhachHang: "Tên Khách Hàng",
    maDichVu: "Mã Dịch Vụ",
    tenDichVu: "Tên Dịch Vụ",
    ngayDieuTri: "Ngày Điều Trị",
    gioDieuTri: "Giờ Điều Trị",
    maNhanVien: "Mã Nhân Viên",
    tenNhanVien: "Tên Nhân Viên",
    tinhTrang: "Tình Trạng",
    ghiChu: "Ghi Chú"
  },
  
  // Sheet: Thu Chi
  thuChi: {
    maGiaoDich: "Mã Giao Dịch",
    loaiGiaoDich: "Loại Giao Dịch", // "Thu" hoặc "Chi"
    ngayGiaoDich: "Ngày Giao Dịch",
    soTien: "Số Tiền",
    danhMuc: "Danh Mục",
    moTa: "Mô Tả",
    maNhanVien: "Mã Nhân Viên",
    tenNhanVien: "Tên Nhân Viên",
    phuongThucThanhToan: "Phương Thức Thanh Toán"
  }
};

/**
 * STATUS OPTIONS - Các trạng thái trong hệ thống
 */
export const STATUS_OPTIONS = {
  khachHang: {
    active: "Đang Hoạt Động",
    inactive: "Ngừng Hoạt Động",
    vip: "VIP",
    blacklist: "Danh Sách Đen"
  },
  
  donHang: {
    pending: "Chờ Xử Lý",
    confirmed: "Đã Xác Nhận",
    completed: "Hoàn Thành",
    cancelled: "Đã Hủy"
  },
  
  thanhToan: {
    unpaid: "Chưa Thanh Toán",
    partial: "Thanh Toán Một Phần",
    paid: "Đã Thanh Toán"
  },
  
  lieuTrinh: {
    active: "Đang Điều Trị",
    paused: "Tạm Ngưng",
    completed: "Hoàn Thành",
    expired: "Hết Hạn"
  }
};

/**
 * FORM LABELS - Labels cho form fields
 */
export const FORM_LABELS = {
  common: {
    search: "Tìm Kiếm",
    filter: "Lọc",
    create: "Thêm Mới",
    edit: "Chỉnh Sửa",
    delete: "Xóa",
    save: "Lưu",
    cancel: "Hủy",
    confirm: "Xác Nhận",
    export: "Xuất Excel",
    import: "Nhập Excel",
    print: "In",
    refresh: "Làm Mới"
  },
  
  validation: {
    required: "Vui lòng nhập {{field}}",
    invalid: "{{field}} không hợp lệ",
    minLength: "{{field}} phải có ít nhất {{min}} ký tự",
    maxLength: "{{field}} không được quá {{max}} ký tự",
    phoneNumber: "Số điện thoại không hợp lệ",
    email: "Email không hợp lệ"
  }
};

/**
 * UTILITY FUNCTIONS
 */

/**
 * Chuyển đổi chuỗi tiếng Việt có dấu sang không dấu
 */
export const removeVietnameseAccents = (str) => {
  if (!str) return '';
  
  const accentsMap = {
    'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
    'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
    'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
    'đ': 'd',
    'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
    'ê': 'e', 'ề': 'e', 'ế': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
    'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
    'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
    'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
    'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
    'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
    'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
    'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
    'À': 'A', 'Á': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
    'Ă': 'A', 'Ằ': 'A', 'Ắ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
    'Â': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
    'Đ': 'D',
    'È': 'E', 'É': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
    'Ê': 'E', 'Ề': 'E', 'Ế': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
    'Ì': 'I', 'Í': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
    'Ò': 'O', 'Ó': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
    'Ô': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
    'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
    'Ù': 'U', 'Ú': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
    'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
    'Ỳ': 'Y', 'Ý': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y'
  };
  
  return str.split('').map(char => accentsMap[char] || char).join('');
};

/**
 * Chuyển đổi string sang camelCase (tiếng Việt không dấu)
 */
export const toCamelCase = (str) => {
  if (!str) return '';
  
  const noAccents = removeVietnameseAccents(str);
  return noAccents
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};

/**
 * Chuyển đổi string sang PascalCase
 */
export const toPascalCase = (str) => {
  if (!str) return '';
  
  const noAccents = removeVietnameseAccents(str);
  return noAccents
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

/**
 * Chuyển đổi string sang kebab-case
 */
export const toKebabCase = (str) => {
  if (!str) return '';
  
  const noAccents = removeVietnameseAccents(str);
  return noAccents
    .split(' ')
    .map(word => word.toLowerCase())
    .join('-');
};

/**
 * Lấy tên header từ field name
 */
export const getHeaderName = (fieldName, sheetName) => {
  if (!fieldName || !sheetName) return fieldName;
  
  const mapping = COLUMN_MAPPING[sheetName];
  if (!mapping) return fieldName;
  
  return mapping[fieldName] || fieldName;
};

/**
 * Lấy field name từ header
 */
export const getFieldName = (headerName, sheetName) => {
  if (!headerName || !sheetName) return toCamelCase(headerName);
  
  const mapping = COLUMN_MAPPING[sheetName];
  if (!mapping) return toCamelCase(headerName);
  
  const fieldName = Object.keys(mapping).find(key => mapping[key] === headerName);
  return fieldName || toCamelCase(headerName);
};

/**
 * Chuyển đổi object từ field names sang headers
 * Dùng khi gửi data lên Google Sheets
 */
export const toSheetRow = (data, sheetName) => {
  if (!data || !sheetName) return data;
  
  const mapping = COLUMN_MAPPING[sheetName];
  if (!mapping) return data;
  
  const result = {};
  Object.keys(data).forEach(fieldName => {
    const headerName = mapping[fieldName] || fieldName;
    result[headerName] = data[fieldName];
  });
  
  return result;
};

/**
 * Chuyển đổi object từ headers sang field names
 * Dùng khi nhận data từ Google Sheets
 */
export const fromSheetRow = (row, sheetName) => {
  if (!row || !sheetName) return row;
  
  const mapping = COLUMN_MAPPING[sheetName];
  if (!mapping) return row;
  
  const result = {};
  Object.keys(row).forEach(headerName => {
    const fieldName = getFieldName(headerName, sheetName);
    result[fieldName] = row[headerName];
  });
  
  return result;
};

/**
 * Chuyển đổi array of objects
 */
export const toSheetRows = (dataArray, sheetName) => {
  if (!Array.isArray(dataArray)) return [];
  return dataArray.map(item => toSheetRow(item, sheetName));
};

export const fromSheetRows = (rowArray, sheetName) => {
  if (!Array.isArray(rowArray)) return [];
  return rowArray.map(row => fromSheetRow(row, sheetName));
};

/**
 * Format số tiền VND
 */
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

/**
 * Format ngày tháng
 */
export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) return '';
  
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  
  switch(format) {
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'DD/MM/YYYY HH:mm':
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    default:
      return `${day}/${month}/${year}`;
  }
};

/**
 * Format số điện thoại
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as: 0901 234 567
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
};

/**
 * Validate số điện thoại Việt Nam
 */
export const isValidPhoneNumber = (phone) => {
  if (!phone) return false;
  const cleaned = phone.replace(/\D/g, '');
  const vietnamPhoneRegex = /^(0)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-46-9])[0-9]{7}$/;
  return vietnamPhoneRegex.test(cleaned);
};

/**
 * Validate email
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Generate mã tự động
 */
export const generateCode = (prefix, number) => {
  const paddedNumber = String(number).padStart(5, '0');
  return `${prefix}${paddedNumber}`;
};

/**
 * Search tiếng Việt (có dấu và không dấu)
 */
export const searchVietnamese = (text, searchTerm) => {
  if (!text || !searchTerm) return false;
  
  const normalizedText = removeVietnameseAccents(text.toLowerCase());
  const normalizedSearch = removeVietnameseAccents(searchTerm.toLowerCase());
  
  return normalizedText.includes(normalizedSearch);
};

/**
 * Sort tiếng Việt
 */
export const sortVietnamese = (arr, key, order = 'asc') => {
  return arr.sort((a, b) => {
    const aValue = removeVietnameseAccents(String(a[key] || ''));
    const bValue = removeVietnameseAccents(String(b[key] || ''));
    
    if (order === 'asc') {
      return aValue.localeCompare(bValue);
    }
    return bValue.localeCompare(aValue);
  });
};

/**
 * Create filter function cho danh sách
 */
export const createFilter = (filters) => {
  return (item) => {
    return Object.keys(filters).every(key => {
      const filterValue = filters[key];
      const itemValue = item[key];
      
      if (!filterValue || filterValue === '') return true;
      
      // Text search
      if (typeof itemValue === 'string') {
        return searchVietnamese(itemValue, filterValue);
      }
      
      // Exact match
      return itemValue === filterValue;
    });
  };
};

/**
 * Export helper class for Google Sheets integration
 */
export class VietnameseSheetHelper {
  constructor(sheetName) {
    this.sheetName = sheetName;
    this.mapping = COLUMN_MAPPING[sheetName] || {};
  }
  
  // Get headers array for creating new sheet
  getHeaders() {
    return Object.values(this.mapping);
  }
  
  // Get field names array
  getFieldNames() {
    return Object.keys(this.mapping);
  }
  
  // Convert single row
  toSheet(data) {
    return toSheetRow(data, this.sheetName);
  }
  
  fromSheet(row) {
    return fromSheetRow(row, this.sheetName);
  }
  
  // Convert multiple rows
  toSheetBatch(dataArray) {
    return toSheetRows(dataArray, this.sheetName);
  }
  
  fromSheetBatch(rowArray) {
    return fromSheetRows(rowArray, this.sheetName);
  }
  
  // Create empty row with default values
  createEmptyRow() {
    const emptyRow = {};
    Object.keys(this.mapping).forEach(field => {
      emptyRow[field] = '';
    });
    return emptyRow;
  }
  
  // Validate row has all required fields
  validateRow(row) {
    const errors = [];
    const requiredFields = this.getRequiredFields();
    
    requiredFields.forEach(field => {
      if (!row[field] || row[field] === '') {
        errors.push(`${this.mapping[field]} là bắt buộc`);
      }
    });
    
    return {
      valid: errors.length === 0,
      errors
    };
  }
  
  // Override in subclasses to define required fields
  getRequiredFields() {
    return [];
  }
}

// Export all for easy import
export default {
  COLUMN_MAPPING,
  STATUS_OPTIONS,
  FORM_LABELS,
  removeVietnameseAccents,
  toCamelCase,
  toPascalCase,
  toKebabCase,
  getHeaderName,
  getFieldName,
  toSheetRow,
  fromSheetRow,
  toSheetRows,
  fromSheetRows,
  formatCurrency,
  formatDate,
  formatPhoneNumber,
  isValidPhoneNumber,
  isValidEmail,
  generateCode,
  searchVietnamese,
  sortVietnamese,
  createFilter,
  VietnameseSheetHelper
};