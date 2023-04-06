import {IsNotEmpty} from "class-validator";

export class CreateQuizDto {
  @IsNotEmpty({message:'Quiz should have a title'})
  title: string;
  @IsNotEmpty({message:'Quiz should have a description'})
  description: string;
}
