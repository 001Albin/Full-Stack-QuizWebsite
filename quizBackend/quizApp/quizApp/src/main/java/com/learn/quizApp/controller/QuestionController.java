package com.learn.quizApp.controller;

import com.learn.quizApp.model.Question;
import com.learn.quizApp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin(origins = {"http://localhost:5173/", "https://quizforprogrammers.netlify.app/"})
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @GetMapping("/allQuestions")
    public ResponseEntity<List<Question>> getAllQuestions(@RequestParam(required = false) String pass) {

        if (pass == null || !pass.equals("mysql202411")) {
            System.out.println("Unauthorized access attempt. Invalid or missing password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        System.out.println("Authorized request. Fetching all questions...");
        return questionService.getAllQuestions();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable String category) {
        System.out.println("Fetching questions for category: " + category);
        return questionService.getQuestionsByCategory(category);
    }

    @PostMapping("/addBulk")
    public ResponseEntity<String> addQuestions(@RequestBody List<Question> questions) {
        System.out.println("Received bulk question upload: " + questions.size() + " questions.");
        return questionService.addQuestions(questions);
    }
}
