package com.example.xe_khach_management.service;

import com.example.xe_khach_management.dto.ILoaiXe;
import com.example.xe_khach_management.dto.XeDTO;
import com.example.xe_khach_management.dto.XeUpdateDTO;
import com.example.xe_khach_management.model.Xe;
import com.example.xe_khach_management.repository.IXeReponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class XeServiceImpl implements IXeService {
    @Autowired
    IXeReponsitory iXeReponsitory;

    @Override
    public List<XeDTO> getListXe() {
        return iXeReponsitory.getListXe();
    }

    @Override
    public List<ILoaiXe> getLoaiXe() {
        return iXeReponsitory.getLoaiXe();
    }

    @Override
    public void addXe(int id, String tenNhaXe, String diemDi, String diemDen, String sdt, String email, String gioDi, String gioDen) {
        iXeReponsitory.addXe(id, tenNhaXe, diemDi, diemDen, sdt, email, gioDi, gioDen);
    }

    @Override
    public void removeXe(int id) {
        iXeReponsitory.removeXe(id);
    }

    @Override
    public XeUpdateDTO findByIdXe(int id) {
        return iXeReponsitory.findByIdXe(id);
    }

    @Override
    public void updateXe(int idLoaiXe, String tenNhaXe, String diemDi, String diemDen, String sdt, String email, String gioDi, String gioDen,int id) {
        iXeReponsitory.updateXe(idLoaiXe,tenNhaXe,diemDi,diemDen,sdt,email,gioDi,gioDen,id);
    }


    @Override
    public Page<Xe> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Xe> findById(int id) {
        return Optional.empty();
    }

    @Override
    public void save(Xe xe) {

    }

    @Override
    public void remove(int id) {

    }
}
