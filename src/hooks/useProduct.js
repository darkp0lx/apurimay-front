import { useStateValue } from '../store/StateProvider'

export function useProduct (product) {
  const [data, dispatch] = useStateValue()

  const addFavorite = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: product
    })
  }

  return {
    addFavorite
  }
}
