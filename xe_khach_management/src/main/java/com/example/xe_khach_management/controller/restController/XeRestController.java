package com.example.xe_khach_management.controller.restController;

import com.example.xe_khach_management.dto.ILoaiXe;
import com.example.xe_khach_management.dto.XeDTO;
import com.example.xe_khach_management.dto.XeDTO1;
import com.example.xe_khach_management.dto.XeUpdateDTO;
import com.example.xe_khach_management.model.LoaiXe;
import com.example.xe_khach_management.model.Xe;
import com.example.xe_khach_management.service.IXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api-xe")
@CrossOrigin("*")
public class XeRestController {
    @Autowired
    private IXeService xeService;

    @GetMapping("/listXe")
    public ResponseEntity<List<XeDTO>> getListXe() {
        List<XeDTO> xeDTOList = xeService.getListXe();
        if (xeDTOList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(xeDTOList, HttpStatus.OK);
    }

    @GetMapping("/listLoaiXe")
    public ResponseEntity<List<ILoaiXe>> getListLoaiXe() {
        List<ILoaiXe> loaiXeList = xeService.getLoaiXe();
        if (loaiXeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(loaiXeList, HttpStatus.OK);
    }

    @PostMapping("/createXe")
    public ResponseEntity createXe(@RequestBody XeDTO1 xeDTO1) {
        xeService.addXe(xeDTO1.getLoaiXe().getId(), xeDTO1.getTenNhaXe(), xeDTO1.getDiemDi(), xeDTO1.getDiemDen(), xeDTO1.getSdt(), xeDTO1.getEmail(), xeDTO1.getGioDi(), xeDTO1.getGioDen());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping("/update/{id}")
    public ResponseEntity updateXe(@RequestBody XeDTO1 xeDTO1){
        
        xeService.updateXe(xeDTO1.getLoaiXe().getId(), xeDTO1.getTenNhaXe(), xeDTO1.getDiemDi(), xeDTO1.getDiemDen(),xeDTO1.getSdt(),xeDTO1.getEmail(),xeDTO1.getGioDi(),xeDTO1.getGioDen(),xeDTO1.getId() );
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/detailXe/{id}")
    public ResponseEntity<XeDTO> getXe(@PathVariable("id") int id) {
        XeUpdateDTO xeUpdateDTO = xeService.findByIdXe(id);
        Xe xe = new Xe();

        xe.setId(xeUpdateDTO.getId());
        xe.setLoaiXe(new LoaiXe(Integer.parseInt(xeUpdateDTO.getIdLoaiXe()),xeUpdateDTO.getTenLoaiXe()));
        xe.setTenNhaXe(xeUpdateDTO.getTenNhaXe());
        xe.setDiemDi(xeUpdateDTO.getDiemDi());
        xe.setDiemDen(xeUpdateDTO.getDiemDen());
        xe.setSdt(xeUpdateDTO.getSdt());
        xe.setEmail(xeUpdateDTO.getEmail());
        xe.setGioDi(xeUpdateDTO.getGioDi());
        xe.setGioDen(xeUpdateDTO.getGioDen());
        if (xe == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity(xe, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Xe> deleteXe(@PathVariable("id") int id) {
        xeService.removeXe(id);
        return new ResponseEntity<Xe>(HttpStatus.OK);
    }


}