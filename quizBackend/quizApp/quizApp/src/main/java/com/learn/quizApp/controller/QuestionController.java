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
@CrossOrigin(origins = "http://localhost:5173/")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @GetMapping("/allQuestions")
    public ResponseEntity<List<Question>> getAllQuestions(@RequestParam String pass) {//@RequestParam String pass
        if (pass.equals("mysql202411")) {
            return questionService.getAllQuestions();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }



    @GetMapping("/category/{category}")
    public ResponseEntity<List<Question>>getQuestionsByCategory(@PathVariable String category){
        return questionService.getQuestionsByCategory(category);
    }


    @PostMapping("/addBulk")
    public ResponseEntity<String> addQuestions(@RequestBody List<Question> questions) {
        return questionService.addQuestions(questions);
    }


}
