package com.biolete.datacentralizer.services;

import com.biolete.datacentralizer.helpers.FirstHelper;
import com.biolete.datacentralizer.repositories.FirstRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import com.biolete.datacentralizer.models.First;

@Service
public class FirstService {
    @Autowired
    FirstRepository firstRepository;

    public List<First> getList() {
        return firstRepository.findAll();
    }

    public void importToDatabase(MultipartFile file) {
        try {
            List<First> firstList = FirstHelper.readDataFromFile(file.getInputStream());
            firstRepository.saveAll(firstList);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store data! " + e.getMessage());
        }
    }

    public ByteArrayInputStream exportToFile() {
        List<First> firstList = getList();

        return FirstHelper.writeDataToFile(firstList);
    }
}
