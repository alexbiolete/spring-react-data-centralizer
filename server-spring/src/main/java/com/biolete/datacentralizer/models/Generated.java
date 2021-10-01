package com.biolete.datacentralizer.models;

import javax.persistence.*;

@Entity
@Table(name = "generated_data")
public class Generated {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generated_sequence")
    @SequenceGenerator(name = "generated_sequence", sequenceName = "generated_sequence", initialValue = 1, allocationSize = 1)

    @Column(name = "id")
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "name")
    private String name;

    @Column(name = "required_experience")
    private int requiredExperience;

    @Column(name = "experience")
    private int experience;

    @Column(name = "budget")
    private long budget;

    @Column(name = "expected_salary")
    private long expectedSalary;

    @Column(name = "availability")
    private float availability;

    public Generated() {

    }

    public Generated(
            long id,
            String title,
            String name,
            int requiredExperience,
            int experience,
            long budget,
            long expectedSalary,
            float availability
    ) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.requiredExperience = requiredExperience;
        this.experience = experience;
        this.budget = budget;
        this.expectedSalary = expectedSalary;
        this.availability = availability;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRequiredExperience() {
        return requiredExperience;
    }

    public void setRequiredExperience(int requiredExperience) {
        this.requiredExperience = requiredExperience;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public long getBudget() {
        return budget;
    }

    public void setBudget(long budget) {
        this.budget = budget;
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
        return "Generated{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", name='" + name + '\'' +
                ", requiredExperience=" + requiredExperience +
                ", experience=" + experience +
                ", budget=" + budget +
                ", expectedSalary=" + expectedSalary +
                ", availability=" + availability +
                '}';
    }
}
