package com.biolete.datacentralizer.helpers;

import org.springframework.web.multipart.MultipartFile;

import java.util.Objects;

public class FileHandlingHelper {
    public static boolean checkFormat(MultipartFile file) {
        return Objects.equals(file.getContentType(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") || Objects.equals(file.getContentType(), "application/vnd.ms-excel");
    }
}
