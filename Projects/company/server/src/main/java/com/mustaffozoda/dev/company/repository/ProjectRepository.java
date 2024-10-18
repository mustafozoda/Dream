package com.mustaffozoda.dev.company.repository;

import com.mustaffozoda.dev.company.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
