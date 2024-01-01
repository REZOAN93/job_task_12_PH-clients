import { useQuery } from '@tanstack/react-query'

import { Questionslist, Quizeslist, Topicslist } from '@/apis/topics'

export const useTopicsList = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: Topicslist,
    staleTime: 10 * 60 * 60 * 1000
  })
}

export const useQuestionsList = (queryKey: string) => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: () => Questionslist(queryKey),
    staleTime: 10 * 60 * 60 * 1000
  })
}

export const useSpecificQuestion = (queryKey: string) => {
  return useQuery({
    queryKey: ['specificQuestions'],
    queryFn: () => Questionslist(queryKey),
    staleTime: 10 * 60 * 60 * 1000
  })
}

export const useQuizesList = (userId: number) => {
  return useQuery({
    queryKey: ['quiz'],
    queryFn: () => Quizeslist(userId),
    staleTime: 10 * 60 * 60 * 1000
  })
}
