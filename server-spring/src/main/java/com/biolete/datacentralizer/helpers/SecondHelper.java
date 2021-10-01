package com.biolete.datacentralizer.helpers;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.biolete.datacentralizer.models.Second;

public class SecondHelper {
    static String SHEET_TITLE = "Sheet1";
    static String[] COLUMN_TITLES = {
            "Title\n",
            "Required Experience\n",
            "Budget\n"
    };

    public static List<Second> readDataFromFile(InputStream inputStream) {
        try {
            Workbook workbook = new XSSFWorkbook(inputStream);
            // Get the second sheet of the document (it should be called Sheet1)
            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rows = sheet.iterator();
            List<Second> secondList = new ArrayList<Second>();

            int rowNumber = 0;

            while (rows.hasNext()) {
                Row currentRow = rows.next();

                // Skip header
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cellsInRow = currentRow.iterator();
                Second second = new Second();

                int cellIndex = 0;

                while (cellIndex < COLUMN_TITLES.length) {
                    Cell currentCell = cellsInRow.next();

                    switch (cellIndex) {
                        case 0:
                            second.setTitle((String) currentCell.getStringCellValue());
                            break;
                        case 1:
                            if (currentCell.getCellType() != CellType.NUMERIC)
                                break;
                            second.setRequiredExperience((int) currentCell.getNumericCellValue());
                            break;
                        case 2:
                            if (currentCell.getCellType() != CellType.NUMERIC)
                                break;
                            second.setBudget((long) currentCell.getNumericCellValue());
                            break;
                        default:
                            break;
                    }
                    cellIndex++;
                }

                secondList.add(second);
            }

            workbook.close();

            return secondList;
        } catch (IOException e) {
            throw new RuntimeException("Failed to read data! " + e.getMessage());
        }
    }

    public static ByteArrayInputStream writeDataToFile(List<Second> secondList) {
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
            Sheet sheet = workbook.createSheet(SHEET_TITLE);
            // Create header
            Row headerRow = sheet.createRow(0);

            for (int i = 0; i < COLUMN_TITLES.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(COLUMN_TITLES[i]);
            }

            int rowIndex = 1;

            for (Second second : secondList) {
                Row row = sheet.createRow(rowIndex++);

                row.createCell(0).setCellValue(second.getTitle());
                row.createCell(1).setCellValue(second.getRequiredExperience());
                row.createCell(2).setCellValue(second.getBudget());
            }

            workbook.write(out);

            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("Failed to write data! " + e.getMessage());
        }
    }
}
