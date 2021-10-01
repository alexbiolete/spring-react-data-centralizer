package com.biolete.datacentralizer.models;

import javax.persistence.*;

@Entity
@Table(name = "second_data")
public class Second {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "second_sequence")
    @SequenceGenerator(name = "second_sequence", sequenceName = "second_sequence", initialValue = 1, allocationSize = 1)

    @Column(name = "id")
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "required_experience")
    private int requiredExperience;

    @Column(name = "budget")
    private long budget;

    public Second() {

    }

    public Second(
            long id,
            String title,
            int requiredExperience,
            long budget
    ) {
        this.id = id;
        this.title = title;
        this.requiredExperience = requiredExperience;
        this.budget = budget;
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

    public int getRequiredExperience() {
        return requiredExperience;
    }

    public void setRequiredExperience(int requiredExperience) {
        this.requiredExperience = requiredExperience;
    }

    public long getBudget() {
        return budget;
    }

    public void setBudget(long budget) {
        this.budget = budget;
    }

    @Override
    public String toString() {
        return "Second{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", requiredExperience=" + requiredExperience +
                ", budget=" + budget +
                '}';
    }
}
