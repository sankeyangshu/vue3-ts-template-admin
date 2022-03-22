/*
 * @Description: Excel导入工具函数
 * @Author: 王振
 * @Date: 2022-03-22 19:28:43
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 19:37:18
 */
import XLSX from 'xlsx';

/**
 * @description: 获取表头（通用方式）
 * @param {XLSX.WorkSheet} sheet 表格数据
 * @return {string[]} 表头
 */
export const getHeaderRow = (sheet: XLSX.WorkSheet) => {
  const headers = [];
  const range = XLSX.utils.decode_range(sheet['!ref'] as string);
  let C;
  const R = range.s.r;
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
    /* find the cell in the first row */
    let hdr = 'UNKNOWN ' + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    headers.push(hdr);
  }
  return headers;
};

/**
 * @description: 判断文件是否是Excel
 * @param {File} file 文件
 * @return {boolean} 判断结果
 */
export const isExcel = (file: File) => {
  return /\.(xlsx|xls|csv)$/.test(file.name);
};
