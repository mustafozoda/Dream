package dev.mustafozoda.internet_shop.service;

import dev.mustafozoda.internet_shop.model.Product;
import dev.mustafozoda.internet_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Fetch all products
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    // Find a product by ID
    public Product findById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // Save a single product
    public Product save(Product product) {
        return productRepository.save(product);
    }

    // Save multiple products (bulk save)
    public List<Product> saveAll(List<Product> products) {
        return productRepository.saveAll(products);
    }

    // Delete a product by ID
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}
