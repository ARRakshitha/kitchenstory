package com.example.kitchenstory.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.kitchenstory.entities.Product;

@Repository
public interface ProductRepo extends MongoRepository<Product, String>{
	public Product findByName(String name);
	public Iterable<Product> findByNameContainingIgnoreCase(String name);
}
