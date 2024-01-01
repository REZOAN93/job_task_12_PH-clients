'use client'

import { useAtom } from 'jotai'
import Link from 'next/link'

import {
  CardContainer,
  DescriptionPTag,
  NameAndDescriptionContainer,
  NamePTag
} from './styles'

import { Category, LoggedUserAtom } from '@/atoms'

interface CategoryCardProps {
  data: Category
  index: number
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  const [loggedUser] = useAtom(LoggedUserAtom)
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
        <NamePTag>{data.title}</NamePTag>
        <DescriptionPTag>{data.description}</DescriptionPTag>

        <div>
          {!loggedUser.isAdmin ? (
            <Link href={`questions/showQuestions/${data.id}`} shallow={true}>
              <NamePTag>Attend In a Quiz</NamePTag>
            </Link>
          ) : (
            <Link
              href={`questions/showQuestionsAdmin/${data.id}`}
              shallow={true}
            >
              <NamePTag>View</NamePTag>
            </Link>
          )}
        </div>
      </NameAndDescriptionContainer>
    </CardContainer>
  )
}

export default CategoryCard
