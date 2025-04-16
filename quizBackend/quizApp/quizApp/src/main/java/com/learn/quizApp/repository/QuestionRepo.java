package com.learn.quizApp.repository;

import com.learn.quizApp.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepo extends JpaRepository<Question,Integer> {
    List<Question> findByCategory(String category);

   @Query(value = "SELECT DISTINCT ON (q.content) q.* FROM question q WHERE q.category = :category ORDER BY q.content, RANDOM() LIMIT :numQ", nativeQuery = true)

    List<Question> findRandomQuestionsByCategory(String category, int numQ);
}
