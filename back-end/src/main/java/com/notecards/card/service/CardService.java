package com.notecards.card.service;

import com.notecards.card.model.Card;
import com.notecards.card.repository.ICardRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.UUID;

@Service
public class CardService implements ICardService {

    private final ICardRepository cardRepository;

    public CardService(ICardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @Override
    public ResponseEntity<Object> saveCard(Card card) {
        card.setCreation(new Date());

        return ResponseEntity.status(HttpStatus.OK)
            .body(cardRepository.save(card));
    }

    @Override
    public ResponseEntity<Object> deleteCard(UUID id) {
        if (!cardRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("The card doesn't exist.");
        }
        cardRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK)
            .body("Card successfully deleted.");
    }

    @Override
    public ResponseEntity<Object> updateCard(Card card) {
        Card cardUpdate = cardRepository.getReferenceById(card.getId());

        cardUpdate.setTitle(card.getTitle());
        cardUpdate.setDescription(card.getDescription());
        cardUpdate.setCreation(new Date());

        return ResponseEntity.status(HttpStatus.OK)
            .body(cardRepository.save(cardUpdate));
    }

    @Override
    public ResponseEntity<Object> getAllCardsByUserId(UUID id) {
        return ResponseEntity.status(HttpStatus.OK)
            .body(cardRepository.findByUserId(id));
    }

}