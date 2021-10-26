import React from 'react'
import Toast from 'react-native-toast-message'
import ToDoList from '@modules/ToDoList'
import CustomToast from '@components/Toast'

const toastConfig = {
  default: ({ text1, props }) => <CustomToast text1={text1} props={props} />
}

const App = () => (
  <>
    <ToDoList />
    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
  </>
)

export default App
