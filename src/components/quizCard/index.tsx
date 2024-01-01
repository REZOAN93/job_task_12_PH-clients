'use client'

import {
  CardContainer,
  DescriptionPTag,
  NameAndDescriptionContainer,
  NamePTag
} from './styles'

import { Quiz } from '@/types'

interface CategoryCardProps {
  quiz: Quiz
  index: number
}

const QuizCard = ({ quiz }: CategoryCardProps) => {
  return (
    <CardContainer>
      <img
        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Bold typography"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: 160,
          backgroundColor: 'var(--gray-5)'
        }}
      />
      <NameAndDescriptionContainer>
        <NamePTag>{quiz?.categoryTitle}</NamePTag>

        <DescriptionPTag>{quiz?.categoryDescription}</DescriptionPTag>
        <DescriptionPTag>Acheived Marks-{quiz?.marks}</DescriptionPTag>
      </NameAndDescriptionContainer>
    </CardContainer>
  )
}

export default QuizCard
