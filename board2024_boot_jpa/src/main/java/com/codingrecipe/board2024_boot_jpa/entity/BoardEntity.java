package com.codingrecipe.board2024_boot_jpa.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "board_jpa_pjt")
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30, nullable = false)
    private String boardWriter;

    @Column
    private String boardTitle;
}
