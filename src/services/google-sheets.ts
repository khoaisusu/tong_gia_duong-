const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL;

interface SheetData {
  success: boolean;
  data?: any;
  error?: string;
}

class GoogleSheetsService {
  async fetchData(sheetName: string): Promise<any> {
    try {
      const response = await fetch(
        `${SCRIPT_URL}?sheet=${encodeURIComponent(sheetName)}&action=read`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data: SheetData = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  async createRecord(sheetName: string, recordData: any): Promise<SheetData> {
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheet: sheetName,
          action: 'create',
          row: recordData
        })
      });
      
      const data: SheetData = await response.json();
      
      if (data.success) {
        return data;
      } else {
        throw new Error(data.error || 'Failed to create record');
      }
    } catch (error) {
      console.error('Error creating record:', error);
      throw error;
    }
  }
  
  async updateRecord(sheetName: string, recordData: any): Promise<SheetData> {
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheet: sheetName,
          action: 'update',
          row: recordData
        })
      });
      
      const data: SheetData = await response.json();
      
      if (data.success) {
        return data;
      } else {
        throw new Error(data.error || 'Failed to update record');
      }
    } catch (error) {
      console.error('Error updating record:', error);
      throw error;
    }
  }
  
  async deleteRecord(sheetName: string, recordId: string | number): Promise<SheetData> {
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheet: sheetName,
          action: 'delete',
          row: { id: recordId }
        })
      });
      
      const data: SheetData = await response.json();
      
      if (data.success) {
        return data;
      } else {
        throw new Error(data.error || 'Failed to delete record');
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      throw error;
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();