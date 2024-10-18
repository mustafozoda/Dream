package dev.mustafozoda.todo;

import dev.mustafozoda.todo.model.Todo;
import dev.mustafozoda.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public void run(String... args) throws Exception {
//        loadData();
    }

//    private void loadData() throws ParseException {
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//        Date dueDate = dateFormat.parse("2024-12-31");
//        Todo todo1 = new Todo("First Todo", "This is my first todo item", dueDate, false, "Note for first todo", "Work", "high");
//        todoRepository.save(todo1);
//    }
}
