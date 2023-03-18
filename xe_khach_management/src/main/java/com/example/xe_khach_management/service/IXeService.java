package com.example.xe_khach_management.service;

import com.example.xe_khach_management.dto.ILoaiXe;
import com.example.xe_khach_management.dto.XeDTO;
import com.example.xe_khach_management.dto.XeUpdateDTO;
import com.example.xe_khach_management.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IXeService extends IGeneralService<Xe> {
    List<XeDTO> getListXe();

    Page<XeDTO> getAllPageXe(Pageable pageable);


    List<ILoaiXe> getLoaiXe();

    void addXe(int id, String tenNhaXe, String diemDi, String diemDen, String sdt, String email, String gioDi, String gioDen);

    void removeXe(int id);

    XeUpdateDTO findByIdXe(int id);

    void updateXe(int idLoaiXe, String tenNhaXe, String diemDi, String diemDen, String sdt, String email, String gioDi, String gioDen,int id);


}
