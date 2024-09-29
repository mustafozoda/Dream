package dev.mustafozoda.todo.repository;

import dev.mustafozoda.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository  extends JpaRepository<Todo, Long> {
}
