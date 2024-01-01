'use client'
import { useAtom } from 'jotai'
import React from 'react'

import { LoggedUserAtom } from '@/atoms'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'
import QuizCard from '@/components/quizCard'
import { useQuizesList } from '@/hooks/api/topics'
import { Quiz } from '@/types'

const Quizes = () => {
  const [loggedUser] = useAtom(LoggedUserAtom)
  const { data: quizes, error } = useQuizesList(loggedUser.id)

  if (error) <h2>{error.message}</h2>
  console.log(quizes, 'Quizes')
  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <div className="flex w-full">
          {' '}
          {quizes?.map((data: Quiz, index: React.Key | null | undefined) => (
            <QuizCard key={index} quiz={data} index={index}></QuizCard>
          ))}
        </div>
      </Container>
      <CustomFooter />
    </>
  )
}

export default Quizes
