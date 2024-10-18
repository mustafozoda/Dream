package com.mustaffozoda.dev.company.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "employees")
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;
    private String name;
    private int age;
    private String position;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    private double salary;

}
