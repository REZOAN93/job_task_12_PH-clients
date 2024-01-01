'use client'
import * as Form from '@radix-ui/react-form'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AddAnQuestion } from '@/apis/topics'
import { Button } from '@/components/button'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'
import Input from '@/components/input/input'
import { useTopicsList } from '@/hooks/api/topics'
import { QuestionOption } from '@/types'

const AddBlog = () => {
  const { data: topicsList, error } = useTopicsList()

  const [newOptionText, setNewOptionText] = useState<string>('')
  const [newOptionCheckbox, setNewOptionCheckbox] = useState<boolean>(false)
  const [questionOptions, setQuestionOptions] = useState<QuestionOption[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({})
  const { push } = useRouter()
  const mutation = useMutation({
    mutationFn: async (event: any) => {
      const requestBodyInput = {
        title: event.title,
        options: questionOptions,
        categoryId: selectedCategory
      }
      const data = await AddAnQuestion(requestBodyInput)
      if (data?.id > 0) {
        push(`/questions/showQuestionsAdmin/${selectedCategory}`)
      }
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

  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <Form.Root
          className=" m-auto w-[600px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label for="countries" className="block mb-2 text-sm font-medium ">
            Select a Category
          </label>
          <select
            id="categories"
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

          <Input
            label="title"
            keyName="title"
            register={register}
            required
            inputType="text"
          />
          <div>
            <label for="countries" className="block mb-2 text-sm font-medium ">
              Question Options:
            </label>
            <div className=" my-2">
              {questionOptions?.map((questionOption) => (
                <>
                  {/* <p className="px-3 py-1 bg-gray-200 rounded-lg border border-gray-400">
                    {questionOption.title}
                    <button
                      onClick={() => deleteQuestionOption(questionOption)}
                      type="button"
                      className="py-1 mx-2 px-1 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      -
                    </button>
                  </p> */}
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
                      id={`${questionOption.title}-addTitle`}
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

            <div className="flex">
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
            Add
          </Button>
        </Form.Root>
      </Container>
      <CustomFooter></CustomFooter>
    </>
  )
}
export default AddBlog
