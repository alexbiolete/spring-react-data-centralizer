package com.biolete.datacentralizer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import com.biolete.datacentralizer.helpers.FileHandlingHelper;
import com.biolete.datacentralizer.messages.ResponseMessage;
import com.biolete.datacentralizer.models.Second;
import com.biolete.datacentralizer.services.SecondService;

@RestController
@CrossOrigin
@RequestMapping("/api/second")
public class SecondController {
    @Autowired
    SecondService secondService;

    @GetMapping
    public ResponseEntity<List<Second>> viewRoute() {
        try {
            List<Second> secondList = secondService.getList();

            if (secondList.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(secondList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/import")
    public ResponseEntity<ResponseMessage> importRoute(@RequestParam("file") MultipartFile file) {
        String message = "";

        if (FileHandlingHelper.checkFormat(file)) {
            try {
                secondService.importToDatabase(file);

                message = file.getOriginalFilename() + " (" + file.getContentType() + ") was successfully imported.";

                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = file.getOriginalFilename() + " (" + file.getOriginalFilename() + ") can not be imported!";

                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }

        message = "Please, use a file with a valid format!";

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @GetMapping("/export")
    public ResponseEntity<Resource> exportRoute() {
        String fileName = "data_second.xlsx";
        InputStreamResource file = new InputStreamResource(secondService.exportToFile());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName)
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(file);
    }
}
