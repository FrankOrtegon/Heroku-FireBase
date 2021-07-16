package com.sofka.series.controller;

import com.sofka.series.dto.CategoriaDTO;
import com.sofka.series.dto.SerieDTO;
import com.sofka.series.service.ServicioCRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/series")
public class ControladorCRUD {

    @Autowired
    ServicioCRUD servicioCRUD;

    //Controlado del modelo Serie
    @GetMapping()
    public ResponseEntity<List<SerieDTO>> findAll() {
        return new ResponseEntity<>(servicioCRUD.getAllSerie(), HttpStatus.OK);
    }

    @PostMapping("/createserie")
    public ResponseEntity<SerieDTO> create(@RequestBody SerieDTO serieDTO){
            return new ResponseEntity<>(servicioCRUD.createSerie(serieDTO), HttpStatus.CREATED);

        }

    @PutMapping("/updateserie")
    public ResponseEntity<SerieDTO> update(@RequestBody SerieDTO serieDTO){
        if(serieDTO.getId() != null){
            return new ResponseEntity<>(servicioCRUD.updateSerie(serieDTO), HttpStatus.ACCEPTED);

        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/deleteserie/{id}")
    public ResponseEntity delete(@PathVariable("id") String id){
        try {
            servicioCRUD.deleteSerie(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception error){
            System.out.println(error.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}


