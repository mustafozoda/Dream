package com.mustaffozoda.dev.company.service;

import com.mustaffozoda.dev.company.exception.GlobalExceptionHandler;
import com.mustaffozoda.dev.company.model.Employee;
import com.mustaffozoda.dev.company.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //             ----------------------
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }
    //             ----------------------

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if (employee.isPresent()) {
            employeeRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Employee with ID " + id + " not found.");
        }
    }
}
