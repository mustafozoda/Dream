package com.mustaffozoda.dev.company.service;

import com.mustaffozoda.dev.company.exception.GlobalExceptionHandler;
import com.mustaffozoda.dev.company.model.Department;
import com.mustaffozoda.dev.company.repository.DepartmentRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {
    private final DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Optional<Department> getDepartmentById(Long id){
        return departmentRepository.findById(id);
    }

    public Department saveDepartment(Department department){
        return departmentRepository.save(department);
    }

    public void deleteDepartment(Long id){
        Optional<Department> department = departmentRepository.findById(id);
        if (department.isPresent()) {
            departmentRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Department with ID " + id + " not found.");
        }
    }
}
