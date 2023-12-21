package com.notecards.controllers;

import com.notecards.card.model.Card;
import com.notecards.card.service.ICardService;
import java.util.UUID;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/note-cards/card")
public class CardController {

    private final ICardService cardService;

    public CardController(ICardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping("/")
    public ResponseEntity<Object> saveCard(@RequestBody Card card) {
        return cardService.saveCard(card);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateCard(@RequestBody Card card) {
        return cardService.updateCard(card);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCard(@PathVariable @NotNull UUID id) {
        return cardService.deleteCard(id);
    }

    @GetMapping("/userCards/{id}")
    public ResponseEntity<Object> getUserCards(@PathVariable @NotNull UUID id) {
        return cardService.getAllCardsByUserId(id);
    }

}