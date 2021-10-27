import AsyncStorage from '@react-native-async-storage/async-storage'
import dataStore from './dataStore'

jest.mock('@react-native-async-storage/async-storage')

const mockData = [
  { id: 'some-id-1', value: 'some value 1', isComplete: true },
  { id: 'some-id-2', value: 'some value 2', isComplete: false }
]

describe('Data Store Service', () => {
  describe('Get', () => {
    describe('When get item is successful', () => {
      test('It should return the correct data', async () => {
        AsyncStorage.getItem.mockResolvedValue(JSON.stringify(mockData))

        const result = await dataStore.get()

        expect(result).toEqual(mockData)
      })
    })

    describe('When get item fails', () => {
      test('It should return an error', async () => {
        AsyncStorage.getItem.mockResolvedValue(new Error())

        const result = await dataStore.get()

        expect(result.error).toBe('DATA_GET_ERROR')
        expect(result).toHaveProperty('message')
      })
    })
  })

  describe('Set', () => {
    describe('When set item is successful', () => {
      test('It should return the correct status', async () => {
        AsyncStorage.getItem.mockResolvedValue(mockData)

        const result = await dataStore.set(mockData)

        expect(result.status).toEqual('success')
      })
    })

    describe('When set item fails', () => {
      test('It should return an error', async () => {
        AsyncStorage.setItem.mockImplementation(() => {
          throw new Error()
        })

        const result = await dataStore.set(mockData)

        expect(result.error).toBe('DATA_SET_ERROR')
        expect(result).toHaveProperty('message')
      })
    })
  })
})
