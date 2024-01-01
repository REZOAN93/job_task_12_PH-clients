'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { BlogsContainer } from './styles'

import { AddAnQuizAnswers } from '@/apis/topics'
import { Button } from '@/components/button'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'
import { useQuestionsList } from '@/hooks/api/topics'
import { IQuestion, IQuestionApiResponse, Option } from '@/types'
// import { useBlog } from '@/hooks/api/blogs'

const ShowCategory = () => {
  const pathname = usePathname()
  const splitTexts = pathname?.split('/')
  const id = splitTexts[splitTexts.length - 1]
  const { data: questionData, error } = useQuestionsList(
    `questions?category=${id}`
  )
  const [answers, setAnswers] = useState<IQuestion[]>([])

  const [questionsData, setQuestionsData] = useState<IQuestionApiResponse>({
    data: [],
    questionIds: [],
    categoryId: '',
    categoryTitle: '',
    categoryDescription: ''
  })

  useEffect(() => {
    console.log(questionData, 'DDDDDDDDDDDDData')
    if (questionData?.data) {
      setAnswers(questionData.data)
    }
    setQuestionsData(questionData)
  }, [questionData])

  if (error) <h2>{error.message}</h2>

  const updateAnswerOptions = (option: Option) => {
    const updatedAnswers = []
    for (let i = 0; i < answers.length; i++) {
      if (answers[i]?.id === option.questionId) {
        const updatedOptions = []
        for (let j = 0; j < answers[i]?.options?.length; j++) {
          if (answers[i].options[j].id === option.id) {
            updatedOptions.push({ ...option, isCorrect: !option.isCorrect })
          } else {
            updatedOptions.push(answers[i].options[j])
          }
        }
        // eslint-disable-next-line security/detect-object-injection
        updatedAnswers.push({ ...answers[i], options: updatedOptions })
      } else {
        updatedAnswers.push(answers[i])
      }
    }
    setAnswers(updatedAnswers)
  }

  const submitAnswers = async () => {
    const requestBodyInput = {
      answers: answers,
      questionIds: questionsData.questionIds,
      categoryId: questionsData.categoryId,
      userId: 1
    }

    const data = await AddAnQuizAnswers(requestBodyInput)
    window.alert(`you Got ${data.data} marks.`)
    console.log(data, '@@@@@@@@@@@@@data')
  }

  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <BlogsContainer>
          {answers?.map((answer, index) => (
            <>
              <h3 className="mb-4 mt-4 font-semibold text-gray-900 dark:text-white">
                {index + 1}. {answer.title}
              </h3>
              <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {answer?.options?.map((option, index) => (
                  <li
                    key={`${index}-${option.id}`}
                    className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                  >
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        checked={option.isCorrect}
                        onChange={() => updateAnswerOptions(option)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="vue-checkbox"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {option?.title}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ))}

          <Button
            type="submit"
            color="gray"
            className="mt-5"
            onClick={submitAnswers}
          >
            SUBMIT
          </Button>
        </BlogsContainer>
      </Container>
      <CustomFooter></CustomFooter>
    </>
  )
}
export default ShowCategory
