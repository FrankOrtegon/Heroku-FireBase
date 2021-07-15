package com.sofka.series.mapper;

import com.sofka.series.dto.SerieDTO;
import com.sofka.series.model.Series;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class SerieMapper {

    public Series fromDTO(SerieDTO serieDTO){
        Series series = new Series();
        series.setId(serieDTO.getId());
        series.setNombre(serieDTO.getNombre());
        series.setNumeroTemporadas(serieDTO.getNumeroTemporadas());
        series.setCategoriaId(serieDTO.getCategoriaId());
        series.setUrlImagen(serieDTO.getUrlImagen());
        return series;
    }

    public SerieDTO fromModel(Series series) {
        SerieDTO serieDTO = new SerieDTO();
        serieDTO.setId(series.getId());
        serieDTO.setNombre(series.getNombre());
        serieDTO.setNumeroTemporadas(series.getNumeroTemporadas());
        serieDTO.setCategoriaId(series.getCategoriaId());
        serieDTO.setUrlImagen(series.getUrlImagen());
        return serieDTO;
    }

    public List<SerieDTO> fromCollectionList(List<Series> listaSeries ) {
        if(listaSeries == null) {
            return null;
        }
        List<SerieDTO> list = new ArrayList<>(listaSeries.size());
        Iterator listTrack = listaSeries.iterator();

        while (listTrack.hasNext()) {
            Series series = (Series) listTrack.next();
            list.add(fromModel(series));
        }
        return list;
    }

}
