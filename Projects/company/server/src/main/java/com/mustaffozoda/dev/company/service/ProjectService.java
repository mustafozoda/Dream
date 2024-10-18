package com.mustaffozoda.dev.company.service;

import com.mustaffozoda.dev.company.model.Project;
import com.mustaffozoda.dev.company.repository.ProjectRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // Get all projects
    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    // Get a project by ID
    public Optional<Project> getProjectById(Long id){
        return projectRepository.findById(id);
    }

    // Save or update a project
    public Project saveProject(Project project){
        return projectRepository.save(project);
    }

    // Delete a project by ID
    public void deleteProject(Long id){
        Optional<Project> project = projectRepository.findById(id);
        if (project.isPresent()) {
            projectRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Project with ID " + id + " not found.");
        }
    }
}
