export type Exercise = {
  id: string;
  correctAnswer: string;
  exercisesForLessonId: string;
  option1: string;
  option2: string;
  option3: string;
  question: string;
};

export type ExercisePageContentful = {
  checkButtonLabel: string;
  correctAnswer: string;
  headerTitle: string;

  lessonType: string;
  nextButtonLabel: string;
  nextStep: string;
  wrongAnswer: string;
};
