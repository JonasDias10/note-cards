package com.notecards.user.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.notecards.card.model.Card;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@Table(name = "TB_USER")
public class User implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank(message = "The field cannot be empty.")
    @Column(nullable = false, length = 100)
    private String name;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotBlank(message = "The field cannot be empty.")
    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotBlank(message = "The field cannot be empty.")
    @Column(nullable = false, length = 46)
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE})
    private List<Card> cards;

}