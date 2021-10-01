package com.biolete.datacentralizer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import com.biolete.datacentralizer.models.Generated;
import com.biolete.datacentralizer.services.GeneratedService;
import com.biolete.datacentralizer.models.First;
import com.biolete.datacentralizer.models.Second;

@RestController
@CrossOrigin
@RequestMapping("/api/generated")
public class GeneratedController {
    @Autowired
    GeneratedService generatedService;

    private final RestTemplate restTemplate;

    public GeneratedController(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @GetMapping
    public ResponseEntity<List<Generated>> viewRoute() {
        try {
            List<Generated> generatedList = generatedService.getList();

            if (generatedList.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(generatedList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/generate")
    public ResponseEntity<List<Generated>> generateRoute() {
        try {
            // TO DO: Fix fetching data from 2 other microservices
            List<First> firstList = this.restTemplate.getForObject("http://localhost:8080/api/first", List.class);
            List<Second> secondList = this.restTemplate.getForObject("http://localhost:8080/api/second", List.class);
            List<Generated> generatedList = generatedService.generateReport(firstList, secondList);

            if (generatedList.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(generatedList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/export")
    public ResponseEntity<Resource> exportRoute() {
        String fileName = "data_generated.xlsx";
        InputStreamResource file = new InputStreamResource(generatedService.exportToFile());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName)
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(file);
    }
}
