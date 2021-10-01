package com.biolete.datacentralizer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import com.biolete.datacentralizer.models.Second;
import com.biolete.datacentralizer.helpers.SecondHelper;
import com.biolete.datacentralizer.repositories.SecondRepository;

@Service
public class SecondService {
    @Autowired
    SecondRepository secondRepository;

    public List<Second> getList() {
        return secondRepository.findAll();
    }

    public void importToDatabase(MultipartFile file) {
        try {
            List<Second> secondList = SecondHelper.readDataFromFile(file.getInputStream());
            secondRepository.saveAll(secondList);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store data! " + e.getMessage());
        }
    }

    public ByteArrayInputStream exportToFile() {
        List<Second> secondList = getList();

        return SecondHelper.writeDataToFile(secondList);
    }
}
