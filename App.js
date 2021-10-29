import React from 'react'
import Toast from 'react-native-toast-message'
import ToDoList from '@containers/ToDoList'
import CustomToast from '@components/Toast'

const toastConfig = {
  default: ({ text1, props, ...rest }) => (
    <CustomToast
      icon='error-outline'
      header={text1}
      text={props.text2}
    />
  )
}

const App = () => (
  <>
    <ToDoList />
    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
  </>
)

export default App
