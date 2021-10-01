package com.biolete.datacentralizer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import com.biolete.datacentralizer.models.Generated;
import com.biolete.datacentralizer.helpers.GeneratedHelper;
import com.biolete.datacentralizer.repositories.GeneratedRepository;
import com.biolete.datacentralizer.models.First;
import com.biolete.datacentralizer.models.Second;

@Service
public class GeneratedService {
    @Autowired
    GeneratedRepository generatedRepository;

    public List<Generated> getList() {
        return generatedRepository.findAll();
    }

    public List<Generated> generateReport(List<First> firstList, List<Second> secondList) {
        List<Generated> generatedList = GeneratedHelper.getSummaryData(firstList, secondList);
        generatedRepository.saveAll(generatedList);

        return getList();
    }

    public ByteArrayInputStream exportToFile() {
        List<Generated> generatedList = getList();

        return GeneratedHelper.writeDataToFile(generatedList);
    }
}
