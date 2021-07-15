package com.sofka.series.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Series {

    @Id
    private String id;
    private String nombre;
    private String numeroTemporadas;
    private String categoriaId;
    private String urlImagen;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNumeroTemporadas() {
        return numeroTemporadas;
    }

    public void setNumeroTemporadas(String numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }

    public String getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(String categoriaId) {
        this.categoriaId = categoriaId;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }
}
