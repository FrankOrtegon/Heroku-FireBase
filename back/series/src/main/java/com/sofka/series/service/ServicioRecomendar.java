package com.sofka.series.service;

import com.sofka.series.dto.RecomendarCategoriaDTO;
import com.sofka.series.mapper.SerieMapper;
import com.sofka.series.repository.CategoriaRepositorio;
import com.sofka.series.repository.SerieRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicioRecomendar {

    @Autowired
    CategoriaRepositorio categoriaRepositorio;
    @Autowired
    SerieRepositorio serieRepositorio;

    SerieMapper serieMapper = new SerieMapper();

    public RecomendarCategoriaDTO consultarPorCategoria(String categoriaId){
        RecomendarCategoriaDTO recomendarCategoriaDTO = new RecomendarCategoriaDTO();
        var categoria = categoriaRepositorio.findById(categoriaId).get();
        var listSeries = serieRepositorio.findSeriesBycategoriaId(categoriaId);
        recomendarCategoriaDTO.setCategoria(categoria.getNombreCategoria());
        recomendarCategoriaDTO.setSeriesCategoria(serieMapper.fromCollectionList(listSeries));

        return recomendarCategoriaDTO;
    }
}
