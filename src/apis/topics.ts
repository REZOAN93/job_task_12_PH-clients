import { api } from './index'

import { IAnswersApiRequest, IQuestion } from '@/types'

export const Topicslist = async () => {
  try {
    const response = await api.get('categories')
    const topicsData = response.data.data
    console.log('Blog added successfully:', topicsData)
    return topicsData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}

export const Questionslist = async (queryKey: string) => {
  try {
    const response = await api.get(queryKey)
    const topicsData = response.data.data
    console.log('Blog added successfully:', topicsData)
    return topicsData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}
export const DeleteAnQuesiton = async (queryKey: string) => {
  try {
    const response = await api.get(queryKey)
    const topicsData = response.data.data
    console.log('Blog added successfully:', topicsData)
    return topicsData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}

export const AddAnQuestion = async (question: IQuestion) => {
  try {
    const response = await api.post('questions/addQuestion', question)
    const questionData = response.data.data
    console.log('Question added successfully:', questionData)
    return questionData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}

export const UpdateAnQuestion = async (
  question: IQuestion,
  questionId: string
) => {
  try {
    const response = await api.post(
      `questions/updateQuestion/${questionId}`,
      question
    )
    const questionData = response.data.data
    return questionData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}
export const AddAnQuizAnswers = async (question: IAnswersApiRequest) => {
  try {
    const response = await api.post('answers', question)
    const questionData = response.data.data
    console.log('Question added successfully:', questionData)
    return questionData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}

export const Quizeslist = async (userId: number) => {
  try {
    const response = await api.get(`quiz?userId=1`)
    const topicsData = response.data.data.data
    console.log('Blog added successfully:', topicsData)
    return topicsData
  } catch (e) {
    console.error('Error adding blog:', e)
  }
}
