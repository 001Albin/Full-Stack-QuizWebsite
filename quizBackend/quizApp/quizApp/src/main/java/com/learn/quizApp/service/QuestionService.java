package com.learn.quizApp.service;

import com.learn.quizApp.model.Question;
import com.learn.quizApp.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class QuestionService {

    @Autowired
    QuestionRepo questionrepo;

    public ResponseEntity<List<Question>> getAllQuestions() {
        try{
            return new ResponseEntity<>(questionrepo.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<List<Question>>getQuestionsByCategory(String category) {
        try {
            return new ResponseEntity<>(questionrepo.findByCategory(category),HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> addQuestion(Question question) {
         questionrepo.save(question);
         return new ResponseEntity<>("success",HttpStatus.CREATED);
    }
}
