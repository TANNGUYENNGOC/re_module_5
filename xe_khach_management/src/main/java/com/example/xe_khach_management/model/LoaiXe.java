package com.example.xe_khach_management.model;

import javax.persistence.*;

@Entity
public class LoaiXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String tenLoaiXe;

    public LoaiXe() {
    }

    public LoaiXe(int id, String tenLoaiXe) {
        this.id = id;
        this.tenLoaiXe = tenLoaiXe;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenLoaiXe() {
        return tenLoaiXe;
    }

    public void setTenLoaiXe(String tenLoaiXe) {
        this.tenLoaiXe = tenLoaiXe;
    }
}
