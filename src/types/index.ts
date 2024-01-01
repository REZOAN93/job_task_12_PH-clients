export interface ILoginResponse {
  Success: boolean
  Message: string
  Data: Data
}
interface Data {
  UserID: string
}
export interface Option {
  id: number
  title: string
  isCorrect: boolean
  questionId: number
}
export interface IQuestion {
  title: string
  options: Option[]
  categoryId: string
}

export interface QuestionOption {
  title: string
  isCorrect: boolean
}

export interface IQuestionApiResponse {
  data: IQuestion[]
  questionIds: string[]
  categoryId: string
}
export interface IAnswersApiRequest {
  answers: IQuestion[]
  questionIds: string[]
  categoryId: string
}
export interface ILoggedUserData {
  id: number
  isAdmin: boolean
  userName: string
  email: string
  position: string
  institution: string
  password: string
}

export interface Quiz {
  id: number
  userId: number
  categoryId: number
  marks: number
  categoryTitle: string
  categoryDescription: string
}
