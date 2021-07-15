package com.sofka.series.dto;

import java.util.List;

public class RecomendarCategoriaDTO {
    private String categoria;
    private List<SerieDTO> seriesCategoria;

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public List<SerieDTO> getSeriesCategoria() {
        return seriesCategoria;
    }

    public void setSeriesCategoria(List<SerieDTO> seriesCategoria) {
        this.seriesCategoria = seriesCategoria;
    }
}
