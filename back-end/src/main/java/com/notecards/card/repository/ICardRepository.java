package com.notecards.card.repository;

import com.notecards.card.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface ICardRepository extends JpaRepository<Card, UUID> {

    List<Card> findByUserId(UUID id);

}