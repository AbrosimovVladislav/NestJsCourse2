import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {QuizService} from "./quiz.service";
import {Quiz} from "./quiz.entity";
import {CreateQuizDto} from "./dto/CreateQuizDto";

@Controller('quiz')
export class QuizController {

  constructor(private readonly quizService: QuizService) {
  }

  @Get('/')
  async getQuizes(){
    return await this.quizService.findAll();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async saveQuiz(@Body() createQuizRequest: CreateQuizDto) {
    const quizData: Quiz = await this.quizService.saveQuiz(createQuizRequest);
    return quizData;
  }

}
