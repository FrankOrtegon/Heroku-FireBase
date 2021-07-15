package com.sofka.series.controller;

import com.sofka.series.dto.RecomendarCategoriaDTO;
import com.sofka.series.service.ServicioRecomendar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categoria")
public class ControladorRecomendarCategoria {

    @Autowired
    ServicioRecomendar servicioRecomendar;

    @GetMapping("/listserie/{id}")
    public ResponseEntity<RecomendarCategoriaDTO> listarPorCategoria(@PathVariable("id") String id){
        var repuesta = servicioRecomendar.consultarPorCategoria(id);
        if(repuesta.getSeriesCategoria().size() == 0){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(repuesta, HttpStatus.OK);
    }
}
