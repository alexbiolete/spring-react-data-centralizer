package com.biolete.datacentralizer.models;

import javax.persistence.*;

@Entity
@Table(name = "first_data")
public class First {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "first_sequence")
    @SequenceGenerator(name = "first_sequence", sequenceName = "first_sequence", initialValue = 1, allocationSize = 1)

    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "experience")
    private int experience;

    @Column(name = "expected_salary")
    private long expectedSalary;

    @Column(name = "availability")
    private float availability;

    public First() {

    }

    public First(
            long id,
            String name,
            int experience,
            long expectedSalary,
            float availability
    ) {
        this.id = id;
        this.name = name;
        this.experience = experience;
        this.expectedSalary = expectedSalary;
        this.availability = availability;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public long getExpectedSalary() {
        return expectedSalary;
    }

    public void setExpectedSalary(long expectedSalary) {
        this.expectedSalary = expectedSalary;
    }

    public float getAvailability() {
        return availability;
    }

    public void setAvailability(float availability) {
        this.availability = availability;
    }

    @Override
    public String toString() {
        return "First{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", experience=" + experience +
                ", expectedSalary=" + expectedSalary +
                ", availability=" + availability +
                '}';
    }
}
