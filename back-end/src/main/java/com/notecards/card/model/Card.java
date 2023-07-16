package com.notecards.card.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.notecards.user.model.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@Table(name = "TB_CARD")
public class Card implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank(message = "The field cannot be empty.")
    @Column(nullable = false, length = 100)
    private String title;

    @NotBlank(message = "The field cannot be empty.")
    @Column(nullable = false, length = 240)
    private String description;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    @Column(nullable = false)
    private Date creation;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
    
}