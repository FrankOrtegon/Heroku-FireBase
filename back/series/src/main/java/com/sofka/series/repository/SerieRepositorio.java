package com.sofka.series.repository;

import com.sofka.series.model.Series;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SerieRepositorio extends MongoRepository<Series,String> {
    List<Series> findSeriesBycategoriaId(String categoriaId);
}
