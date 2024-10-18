package dev.mustafozoda.todo.service;


import dev.mustafozoda.todo.exception.ResourceNotFoundException;
import dev.mustafozoda.todo.model.Todo;
import dev.mustafozoda.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Long id, Todo todo) {
        if (todoRepository.existsById(id)) {
            todo.setId(id);
            return todoRepository.save(todo);
        } else {
            throw new ResourceNotFoundException("Todo not found with id " + id);
        }
    }

    public void deleteTodo(Long id) {
        if (todoRepository.existsById(id)) {
            todoRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Todo not found with id " + id);
        }
    }
}

