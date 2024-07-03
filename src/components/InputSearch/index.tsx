import * as z from 'zod'
import { InputSearchContainer } from './styles'
import { useContext } from 'react'
import { IssueContext } from '../../context/issuesContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function InputSearch() {
  const { issuesSearchData, fetchSearchIssueInfo } = useContext(IssueContext)
  
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchRepository(data: SearchFormInputs) {
    fetchSearchIssueInfo(data.query)
  }

  return (
    <InputSearchContainer onSubmit={handleSubmit(handleSearchRepository)}>
      <header>
        <strong>Publicações</strong>
        <span>{issuesSearchData.length} publicações</span>
      </header>
      <input type="text" placeholder='Buscar conteúdo' {...register('query')} />
    </InputSearchContainer>
  )
}