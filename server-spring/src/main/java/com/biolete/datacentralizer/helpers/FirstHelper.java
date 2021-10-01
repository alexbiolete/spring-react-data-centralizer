package com.biolete.datacentralizer.helpers;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.biolete.datacentralizer.models.First;

public class FirstHelper {
    static String SHEET_TITLE = "Sheet1";
    static String[] COLUMN_TITLES = {
            "Name\n",
            "Experience\n",
            "Expected Salary\n",
            "Availability\n"
    };

    public static List<First> readDataFromFile(InputStream inputStream) {
        try {
            Workbook workbook = new XSSFWorkbook(inputStream);
            // Get the first sheet of the document (it should be called Sheet1)
            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rows = sheet.iterator();
            List<First> firstList = new ArrayList<First>();

            int rowNumber = 0;

            while (rows.hasNext()) {
                Row currentRow = rows.next();

                // Skip header
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cellsInRow = currentRow.iterator();
                First first = new First();

                int cellIndex = 0;

                while (cellIndex < COLUMN_TITLES.length) {
                    Cell currentCell = cellsInRow.next();

                    switch (cellIndex) {
                        case 0:
                            first.setName((String) currentCell.getStringCellValue());
                            break;
                        case 1:
                            if (currentCell.getCellType() != CellType.NUMERIC)
                                break;
                            first.setExperience((int) currentCell.getNumericCellValue());
                            break;
                        case 2:
                            if (currentCell.getCellType() != CellType.NUMERIC)
                                break;
                            first.setExpectedSalary((long) currentCell.getNumericCellValue());
                            break;
                        case 3:
                            if (currentCell.getCellType() != CellType.NUMERIC)
                                break;
                            first.setAvailability((float) currentCell.getNumericCellValue());
                            break;
                        default:
                            break;
                    }
                    cellIndex++;
                }
                firstList.add(first);
            }

            workbook.close();

            return firstList;
        } catch (IOException e) {
            throw new RuntimeException("Failed to read data! " + e.getMessage());
        }
    }

    public static ByteArrayInputStream writeDataToFile(List<First> firstList) {
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
            Sheet sheet = workbook.createSheet(SHEET_TITLE);
            // Create header
            Row headerRow = sheet.createRow(0);

            for (int i = 0; i < COLUMN_TITLES.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(COLUMN_TITLES[i]);
            }

            int rowIndex = 1;

            for (First first : firstList) {
                Row row = sheet.createRow(rowIndex++);

                row.createCell(0).setCellValue(first.getName());
                row.createCell(1).setCellValue(first.getExperience());
                row.createCell(2).setCellValue(first.getExpectedSalary());
                row.createCell(3).setCellValue(first.getAvailability());
            }

            workbook.write(out);

            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("Failed to write data! " + e.getMessage());
        }
    }
}
