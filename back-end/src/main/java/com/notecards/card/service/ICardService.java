package com.notecards.card.service;

import com.notecards.card.model.Card;
import java.util.UUID;
import org.springframework.http.ResponseEntity;

public interface ICardService {

    ResponseEntity<Object> saveCard(Card card);
    ResponseEntity<Object> deleteCard(UUID id);
    ResponseEntity<Object> updateCard(Card card);
    ResponseEntity<Object> getAllCardsByUserId(UUID id);

}