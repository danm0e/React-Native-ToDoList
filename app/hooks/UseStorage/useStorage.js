import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState([])
  const [updated, setUpdated] = useState(false)

  const getValue = async () => {
    let value = defaultValue

    try {
      const raw = await AsyncStorage.getItem(key)
      value = JSON.parse(raw)
    } catch (e) {
      return {
        error: 'STORAGE_GET_ERROR',
        message: 'Data could not be retrieved'
      }
    } finally {
      console.log({ getStoring: value })
      setStoredValue(value)
      setUpdated(true)
    }
  }

  const setValue = async goals => {
    let value

    try {
      value = JSON.stringify(goals)
      await AsyncStorage.setItem(key, value)

      return {
        status: 'success'
      }
    } catch (e) {
      return {
        error: 'STORAGE_SET_ERROR',
        message: 'Data could not be stored'
      }
    } finally {
      console.log('SETTING')
      setStoredValue(goals)
    }
  }

  // useEffect(getValue, [])
  useEffect(() => {
    console.log({ storedValue })
    getValue()
  }, [updated])

  return [storedValue, setValue]
}

export default useStorage
