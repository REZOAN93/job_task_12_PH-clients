'use client'
import React from 'react'

import { BlogsContainer } from './styles'

import CategoryCard from '@/components/categoryCard'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'
import { useTopicsList } from '@/hooks/api/topics'

const Home = () => {
  const { data: topicsList, error } = useTopicsList()

  if (error) <h2>{error.message}</h2>

  return (
    <>
      <CustomHeader></CustomHeader>
      <Container>
        <BlogsContainer>
          {topicsList?.map(
            (data: unknown, index: React.Key | null | undefined) => (
              <CategoryCard data={data} index={index} key={index} />
            )
          )}
        </BlogsContainer>
      </Container>
      <CustomFooter />
    </>
  )
}

export default Home
