package com.example.xe_khach_management.model;

import javax.persistence.*;

@Entity
public class Xe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @ManyToOne
    LoaiXe loaiXe;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String tenNhaXe;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String diemDi;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String diemDen;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String sdt;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String email;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String gioDi;
    @Column(columnDefinition = ("NVARCHAR(255)"))
    String gioDen;

    public Xe() {
    }

    public Xe(int id, LoaiXe loaiXe, String tenNhaXe, String diemDi, String diemDen, String sdt, String email, String gioDi, String gioDen) {
        this.id = id;
        this.loaiXe = loaiXe;
        this.tenNhaXe = tenNhaXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.sdt = sdt;
        this.email = email;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
    }

    public Xe(LoaiXe loaiXe, String tenNhaXe, String diemDi, String diemDen, String sdt, String email, String gioDi, String gioDen) {
        this.loaiXe = loaiXe;
        this.tenNhaXe = tenNhaXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.sdt = sdt;
        this.email = email;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LoaiXe getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(LoaiXe loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }
}
