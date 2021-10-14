import useSWR from 'swr'
import { fetcher } from 'utils/axiosHelpers'

const usePosts = ({ pageIndex = 0 }) => {
  const { data, error } = useSWR(`/api/posts?page=${pageIndex}`, fetcher)

  return
}

export default usePosts
