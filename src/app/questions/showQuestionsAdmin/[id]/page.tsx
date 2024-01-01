'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { BlogsContainer } from './styles'

import { DeleteAnQuesiton, Questionslist } from '@/apis/topics'
import { Button } from '@/components/button'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'
import { useQuestionsList } from '@/hooks/api/topics'
// import { useBlog } from '@/hooks/api/blogs'

const ShowQuestionsAdmin = () => {
  const pathname = usePathname()
  const splitTexts = pathname?.split('/')
  const id = splitTexts[splitTexts.length - 1]
  const { data: questionData, error } = useQuestionsList(
    `questions/admin/list?category=${id}`
  )
  const [questionDat, setQuestionDat] = useState([])

  useEffect(() => {
    if (questionData?.data) {
      setQuestionDat(questionData.data)
    }
  }, [questionData])

  if (error) <h2>{error.message}</h2>
  const handleDeleteQuestion = async (questionId: number) => {
    const data = await DeleteAnQuesiton(
      `questions/deleteQuestion/${questionId}`
    )
    if (data?.count === 1) {
      const categoryQuestion = await Questionslist(
        `questions/admin/list?category=${id}`
      )
      // eslint-disable-next-line no-console
      console.log(categoryQuestion, 'category question')
      if (categoryQuestion?.data) {
        setQuestionDat(categoryQuestion.data)
      }
    }
  }
  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <BlogsContainer>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-1">
                    Question ID
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {questionDat &&
                  questionDat?.map((question) => (
                    <tr className="mt-4 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {question?.id}
                      </th>
                      <td className="px-6 py-1">{question?.title}</td>

                      <td className="px-6 py-1">
                        <div>
                          <Link
                            href={`/questions/editQuestion/${question?.id}`}
                          >
                            Edit
                          </Link>
                        </div>
                      </td>
                      <td className="px-6 ">
                        <Button
                          type="submit"
                          color="gray"
                          className=""
                          onClick={() => handleDeleteQuestion(question.id)}
                        >
                          Delete
                        </Button>{' '}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </BlogsContainer>
      </Container>
      <CustomFooter></CustomFooter>
    </>
  )
}
export default ShowQuestionsAdmin
