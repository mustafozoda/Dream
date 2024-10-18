package com.mustaffozoda.dev.company.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "projects")
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;
    private String projectName;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    private java.sql.Date startDate;
    private java.sql.Date endDate;
}
