import AsyncStorage from '@react-native-async-storage/async-storage'

const dataStore = {
  get: async () => {
    try {
      const response = await AsyncStorage.getItem('goals')
      return JSON.parse(response)
    } catch (e) {
      return {
        error: 'DATA_GET_ERROR',
        message: 'Data could not be retrieved'
      }
    }
  },

  set: async goals => {
    try {
      await AsyncStorage.setItem('goals', JSON.stringify(goals))
      return {
        status: 'success'
      }
    } catch (e) {
      return {
        error: 'DATA_SET_ERROR',
        message: 'Data could not be stored'
      }
    }
  }
}

export default dataStore
