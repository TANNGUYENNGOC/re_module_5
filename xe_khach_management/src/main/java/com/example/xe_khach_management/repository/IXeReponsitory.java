package com.example.xe_khach_management.repository;

import com.example.xe_khach_management.dto.ILoaiXe;
import com.example.xe_khach_management.dto.XeDTO;
import com.example.xe_khach_management.dto.XeUpdateDTO;
import com.example.xe_khach_management.model.Xe;
import org.hibernate.annotations.SQLInsert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IXeReponsitory extends JpaRepository<Xe, Integer> {
    @Query(value = "select xe.id, lx.ten_loai_xe as tenLoaiXe, xe.ten_nha_xe as tenNhaXe,xe.diem_di as diemDi,xe.diem_den as diemDen,xe.sdt,xe.email,xe.gio_di as gioDi,xe.gio_den as gioDen from xe join loai_xe lx on lx.id = xe.loai_xe_id",
            nativeQuery = true)
    List<XeDTO> getListXe();

    @Query(value = "select loai_xe.id, loai_xe.ten_loai_xe as tenLoaiXe  from loai_xe",
            nativeQuery = true)
    List<ILoaiXe> getLoaiXe();

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO `xe`(`loai_xe_id`, `ten_nha_xe`,diem_di, `diem_den`,`sdt`, `email`, `gio_di`,`gio_den` ) VALUES (:idLoaiXe,:tenNhaXe,:diemDi,:diemDen,:sdt,:email,:gioDi,:gioDen)",
            nativeQuery = true)
    void addXe(@Param("idLoaiXe") Integer id, @Param("tenNhaXe") String tenNhaXe, @Param("diemDi") String diemDi, @Param("diemDen") String diemDen,
               @Param("sdt") String sdt, @Param("email") String email, @Param("gioDi") String gioDi, @Param("gioDen") String gioDen);

    @Query(value = "select xe.id,lx.id as idLoaiXe ,lx.ten_loai_xe as tenLoaiXe, xe.ten_nha_xe as tenNhaXe,xe.diem_di as diemDi,xe.diem_den as diemDen,xe.sdt,xe.email,xe.gio_di as gioDi,xe.gio_den as gioDen from xe join loai_xe lx on lx.id = xe.loai_xe_id where xe.id = :id",
            nativeQuery = true)
    XeUpdateDTO findByIdXe(@Param("id") int id);


    @Transactional
    @Modifying
    @Query(value = "update xe SET loai_xe_id = :idLoaiXe, ten_nha_xe = :tenNhaXe, diem_di = :diemDi, diem_den = :diemDen, sdt = :sdt, email = :email, gio_di = :gioDi, gio_den = :gioDen WHERE id = :id",
    nativeQuery = true)
    void updateXe(@Param("idLoaiXe") int idLoaiXe, @Param("tenNhaXe")String tenNhaXe, @Param("diemDi") String diemDi, @Param("diemDen") String diemDen, @Param("sdt") String sdt, @Param("email") String email, @Param("gioDi") String gioDi,@Param("gioDen") String gioDen, @Param("id") int id);


    @Transactional
    @Modifying
    @Query(value = "delete from `xe` where id = :id",
    nativeQuery = true)
    void removeXe (@Param("id") int id);
}
