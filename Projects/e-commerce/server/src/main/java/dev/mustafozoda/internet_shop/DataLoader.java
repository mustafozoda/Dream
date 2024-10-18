package dev.mustafozoda.internet_shop;

import dev.mustafozoda.internet_shop.model.Product;
import dev.mustafozoda.internet_shop.model.Review; // Ensure the Review class is correctly implemented
import dev.mustafozoda.internet_shop.model.Stock; // Ensure the Stock class is correctly implemented
import dev.mustafozoda.internet_shop.model.Discount; // Ensure the Discount class is correctly implemented
import dev.mustafozoda.internet_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        loadData();
    }

    private void loadData() throws Exception {
        // Define a date formatter
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate validUntilDate = LocalDate.parse("2024-12-31", formatter); // Parse the date string to LocalDate

        Stock stock = new Stock(15, "A1", 2);
        Discount discount = new Discount(10, validUntilDate); // Pass LocalDate to Discount

        // Create Review objects
        Review review1 = new Review("John Doe", "Excellent laptop! Works very fast.", 5);
        Review review2 = new Review("Jane Smith", "Good performance, but the battery life could be better.", 4);

        // Create Product object using the updated constructor
        Product product1 = new Product(
                null, // ID will be generated
                "Laptop",
                1200.99,
                "Electronics",
                "High-performance laptop for gaming and work.",
                stock,
                discount,
                4.5,
                Arrays.asList(review1, review2),
                Arrays.asList("gaming", "high-performance", "laptop"),
                Arrays.asList("laptop-front.jpg", "laptop-back.jpg")
        );

        // Save the product to the database
//        productRepository.save(product1);
    }
}
