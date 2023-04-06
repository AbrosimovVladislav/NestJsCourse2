import {Injectable} from "@nestjs/common";
import {CreateQuizDto} from "./dto/CreateQuizDto";
import {Quiz} from "./quiz.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class QuizService {
  constructor(
      @InjectRepository(Quiz)
      private quizRepository: Repository<Quiz>,
  ) {
  }

  findAll(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  saveQuiz(createQuizRequest: CreateQuizDto): Promise<Quiz> {
    let quizData = new Quiz();
    quizData.title = createQuizRequest.title;
    quizData.description = createQuizRequest.description;
    return this.quizRepository.save(quizData);
  }
}
