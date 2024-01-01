'use client'
import * as Form from '@radix-ui/react-form'
import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { UpdateAnQuestion } from '@/apis/topics'
import { Button } from '@/components/button'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'
import { useSpecificQuestion, useTopicsList } from '@/hooks/api/topics'
import { QuestionOption } from '@/types'

const EditQuestion = () => {
  const { data: topicsList, error1 } = useTopicsList()

  const pathname = usePathname()
  const splitTexts = pathname?.split('/')
  const id = splitTexts[splitTexts.length - 1]

  const { data: questionData, error } = useSpecificQuestion(`questions/${id}`)

  if (error) <h2>{error.message}</h2>
  const [newOptionText, setNewOptionText] = useState<string>('')
  const [newOptionCheckbox, setNewOptionCheckbox] = useState<boolean>(false)
  const [questionOptions, setQuestionOptions] = useState<QuestionOption[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number>(null)
  const [title, setTitle] = useState<string>('')
  const [questionId, setQuestionId] = useState(null)
  useEffect(() => {
    const data = questionData?.data ? questionData.data[0] : {}
    if (data.title) {
      setTitle(data.title)
    }
    if (data.categoryId) {
      setSelectedCategory(data.categoryId)
    }
    if (data.options) {
      setQuestionOptions(data.options)
    }
    if (data.id) {
      setQuestionId(data.id)
    }
  }, [questionData])
  const { push } = useRouter()
  const { handleSubmit } = useForm({})
  const mutation = useMutation({
    mutationFn: async (event: any) => {
      const requestBodyInput = {
        title: title,
        options: questionOptions,
        categoryId: selectedCategory
      }
      await UpdateAnQuestion(requestBodyInput, questionId)
      // if (data.isInserted) {
      // queryClient.invalidateQueries({ queryKey: ['questions'], exact: true })
      push(`/questions/showQuestionsAdmin/${selectedCategory}`)
      // }
    },
    queryKey: ['addQuestions'],
    onError: (error: any) => {
      console.log(error, '@@@@@@error')
    },
    onSuccess: () => {}
  })

  const onSubmit = (formData: any) => {
    mutation.mutate(formData)
  }
  const addQuestionOption = () => {
    if (newOptionText !== '') {
      const options = questionOptions
      options.push({ title: newOptionText, isCorrect: newOptionCheckbox })
      setQuestionOptions(options)
      setNewOptionText('')
      setNewOptionCheckbox(false)
    }
  }
  const deleteQuestionOption = (questionOption: {
    title: string
    isCorrect: boolean
  }) => {
    const options = questionOptions.filter(
      (questionOpt) => questionOpt?.title !== questionOption.title
    )
    setQuestionOptions(options)
  }

  console.log(title, '@@title')
  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <Form.Root
          className=" m-auto w-[600px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            for="countries"
            className="mt-5 block mb-2 text-sm font-medium "
          >
            Select a Category
          </label>
          <select
            id="categories"
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(parseInt(event.target.value))
            }
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Category</option>
            {topicsList?.map((topic) => (
              <option value={topic?.id}>{topic?.title}</option>
            ))}
          </select>
          <label for="title" className="mt-3 block mb-2 text-sm font-medium ">
            Title
          </label>
          <input
            className={`box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6`}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label
              for="questionOptions"
              className="mt-3 block mb-2 text-sm font-medium "
            >
              Question Options:
            </label>
            <div className="">
              {questionOptions?.map((questionOption) => (
                <>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <input
                        checked={questionOption.isCorrect}
                        disabled
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </span>
                    <input
                      type="text"
                      id={`${questionOption.title}-editTitle`}
                      disabled
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Add New Option"
                      value={questionOption.title}
                    />
                    <button
                      onClick={() => deleteQuestionOption(questionOption)}
                      type="button"
                      className="py-1 mx-2 px-1 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Delete
                    </button>
                  </div>
                </>
              ))}
            </div>

            <div className="flex mt-5">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <input
                  checked={newOptionCheckbox}
                  onChange={() =>
                    setNewOptionCheckbox((prevState) => !prevState)
                  }
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add New Option"
                value={newOptionText}
                onChange={(e) => setNewOptionText(e.target.value)}
              />
            </div>
            <button
              onClick={() => addQuestionOption()}
              type="button"
              className="py-2 mt-3  px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add
            </button>
          </div>

          <Button type="submit" color="gray" className="mt-5">
            UPDATE
          </Button>
        </Form.Root>
      </Container>
      <CustomFooter></CustomFooter>
    </>
  )
}
export default EditQuestion
