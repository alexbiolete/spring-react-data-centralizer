package com.biolete.datacentralizer.helpers;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.biolete.datacentralizer.models.Generated;
import com.biolete.datacentralizer.models.First;
import com.biolete.datacentralizer.models.Second;

public class GeneratedHelper {
    static String SHEET1_TITLE = "Sheet1";
    static String[] SHEET1_COLUMN_TITLES = {
            "Title\n",
            "Name\n",
            "Required Experience\n",
            "Experience\n",
            "Budget\n",
            "Expected Salary\n",
            "Availability\n"
    };

    static String SHEET2_TITLE = "Sheet2";
    static String[] SHEET2_COLUMN_TITLES = {
            "Positions\n",
            "Candidate Count\n"
    };

    public static List<Generated> getSummaryData(List<First> firstList, List<Second> secondList) {
        List<Generated> generatedList = new ArrayList<Generated>();

        Generated generated = new Generated();

        generated.setTitle(secondList.get(0).getTitle());
        generated.setName(firstList.get(0).getName());

        generatedList.add(generated);

        return generatedList;
    }

    public static ByteArrayInputStream writeDataToFile(List<Generated> generatedList) {
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
            Sheet sheet1 = workbook.createSheet(SHEET1_TITLE);
            // Create header
            Row headerRow1 = sheet1.createRow(0);

            for (int i = 0; i < SHEET1_COLUMN_TITLES.length; i++) {
                Cell cell = headerRow1.createCell(i);
                cell.setCellValue(SHEET1_COLUMN_TITLES[i]);
            }

            int rowIndex = 1;

//            for (Generated generated : generatedList) {
//                Row row = sheet1.createRow(rowIndex++);
//
//                row.createCell(0).setCellValue(generated.getTitle());
//                row.createCell(1).setCellValue(generated.getName());
//                row.createCell(2).setCellValue(generated.getRequiredExperience());
//                row.createCell(3).setCellValue(generated.getExperience());
//                row.createCell(4).setCellValue(generated.getBudget());
//                row.createCell(5).setCellValue(generated.getExpectedSalary());
//                row.createCell(6).setCellValue(generated.getAvailability());
//            }

            Sheet sheet2 = workbook.createSheet(SHEET2_TITLE);
            // Create header
            Row headerRow2 = sheet2.createRow(0);

            for (int i = 0; i < SHEET2_COLUMN_TITLES.length; i++) {
                Cell cell = headerRow2.createCell(i);
                cell.setCellValue(SHEET2_COLUMN_TITLES[i]);
            }

            rowIndex = 1;
//
            workbook.write(out);

            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("Failed to write data! " + e.getMessage());
        }
    }
}
