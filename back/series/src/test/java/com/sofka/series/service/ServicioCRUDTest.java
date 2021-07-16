package com.sofka.series.service;

import com.sofka.series.dto.SerieDTO;
import com.sofka.series.model.Series;
import com.sofka.series.repository.CategoriaRepositorio;
import com.sofka.series.repository.SerieRepositorio;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.ArgumentMatchers.any;
import java.util.ArrayList;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ServicioCRUDTest {

    @MockBean
    private SerieRepositorio serieRepositorio;
    @Autowired
    private ServicioCRUD servicioCRUD;

    @Test
    public void getAllSeries() {
        var series = new Series();
        series.setId("12");
        series.setNombre("Dark");
        series.setCategoriaId("1");
        series.setNumeroTemporadas("3");
        series.setUrlImagen("Aqui va la imagen");

        var series2 = new Series();
        series2.setId("14");
        series2.setNombre("Nanatsu no Taiza");
        series2.setCategoriaId("3");
        series2.setNumeroTemporadas("5");
        series2.setUrlImagen("Aqui va la imagen");

        var lista = new ArrayList<Series>();
        lista.add(series);
        lista.add(series2);
        Mockito.when(serieRepositorio.findAll()).thenReturn(lista);
        var resultado = servicioCRUD.getAllSerie();

        Assertions.assertEquals(2,resultado.size());
        Assertions.assertEquals(series.getNombre(), resultado.get(0).getNombre());
        Assertions.assertEquals(series2.getNombre(), resultado.get(1).getNombre());
    }

    @Test
    public void createSeries(){
        var series = new Series();
        series.setId("12");
        series.setNombre("Dark");
        series.setCategoriaId("1");
        series.setNumeroTemporadas("3");
        series.setUrlImagen("Aqui va la imagen");

        var series2 = new SerieDTO();
        series2.setId("12");
        series2.setNombre("Dark");
        series2.setCategoriaId("1");
        series2.setNumeroTemporadas("3");
        series2.setUrlImagen("Aqui va la imagen");

        Mockito.when(serieRepositorio.save(any())).thenReturn(series);
        var resultado = servicioCRUD.createSerie(series2);

        Assertions.assertEquals(series.getNombre(),resultado.getNombre());
        Assertions.assertEquals(series.getId(),resultado.getId());
        Assertions.assertEquals(series.getCategoriaId(),resultado.getCategoriaId());
    }

}