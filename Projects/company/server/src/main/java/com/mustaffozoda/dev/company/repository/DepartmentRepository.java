package com.mustaffozoda.dev.company.repository;

import com.mustaffozoda.dev.company.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
