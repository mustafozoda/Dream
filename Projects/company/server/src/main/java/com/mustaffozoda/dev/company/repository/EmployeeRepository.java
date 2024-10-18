package com.mustaffozoda.dev.company.repository;

import com.mustaffozoda.dev.company.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
}
