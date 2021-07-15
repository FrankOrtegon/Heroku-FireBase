package com.sofka.series.service;

import com.sofka.series.dto.CategoriaDTO;
import com.sofka.series.dto.SerieDTO;
import com.sofka.series.mapper.CategoriaMapper;
import com.sofka.series.mapper.SerieMapper;
import com.sofka.series.model.Categoria;
import com.sofka.series.model.Series;
import com.sofka.series.repository.CategoriaRepositorio;
import com.sofka.series.repository.SerieRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioCRUD {

    @Autowired
    SerieRepositorio serieRepositorio;
    @Autowired
    CategoriaRepositorio categoriaRepositorio;

    SerieMapper serieMapper = new SerieMapper();
    CategoriaMapper categoriaMapper = new CategoriaMapper();


    // CRUD del model Series
    public List<SerieDTO> getAllSerie(){
        List<Series> seriesList = (List<Series>) serieRepositorio.findAll();
        return serieMapper.fromCollectionList(seriesList);
    }

    public SerieDTO createSerie(SerieDTO serieDTO){
        Series series = serieMapper.fromDTO(serieDTO);
        return serieMapper.fromModel(serieRepositorio.save(series));
    }

    public SerieDTO updateSerie(SerieDTO serieDTO){
        Series series = serieMapper.fromDTO(serieDTO);
        serieRepositorio.findById(series.getId()).orElseThrow(()-> new RuntimeException("Serie no encontrada"));
        return serieMapper.fromModel(serieRepositorio.save(series));
    }

    public void deleteSerie(String id){
        serieRepositorio.deleteById(id);
    }

    // CRUD del model Categoria

    public List<CategoriaDTO> getAllCategoria(){
        List<Categoria> categoriaList = (List<Categoria>) categoriaRepositorio.findAll();
        return categoriaMapper.fromCollectionList(categoriaList);
    }

    public CategoriaDTO createCategoria(CategoriaDTO categoriaDTO){
        Categoria categoria = categoriaMapper.fromDTO(categoriaDTO);
        return categoriaMapper.fromModel(categoriaRepositorio.save(categoria));
    }

    public CategoriaDTO updateCategoria(CategoriaDTO categoriaDTO) {
        Categoria categoria = categoriaMapper.fromDTO(categoriaDTO);
        categoriaRepositorio.findById(categoria.getCategoriaId()).orElseThrow(() -> new RuntimeException("Categoria no encontrada"));
        return categoriaMapper.fromModel(categoriaRepositorio.save(categoria));
    }

    public void deleteCategoria(String id){
        categoriaRepositorio.deleteById(id);
    }

}
