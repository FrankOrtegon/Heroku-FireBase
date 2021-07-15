package com.sofka.series.repository;

import com.sofka.series.model.Categoria;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoriaRepositorio extends MongoRepository<Categoria,String> {
}
