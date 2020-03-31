import { Bounce, toast } from 'react-toastify'
import { colors } from 'src/styles'

export default {
  position: toast.POSITION.BOTTOM_RIGHT, // <toast.POSITION.BOTTOM_RIGHT|toast.POSITION.BOTTOM_CENTER|toast.POSITION.BOTTOM_LEFT|toast.POSITION.TOP_LEFT|toast.POSITION.TOP_CENTER|toast.POSITION.TOP_RIGHT>
  // autoClose: 5000, // <false|number>
  autoClose: 0, // <false|number>
  // closeButton: false, // <React.ReactNode|false>
  transition: Bounce, // <Function>
  hideProgressBar: false, // <boolean>
  pauseOnHover: true, // <boolean>
  pauseOnFocusLoss: true, // <boolean>
  rtl: false, // <boolean>
  closeOnClick: false, // <boolean>
  newestOnTop: false, // <boolean>
  // className: "", // <string|object>
  // style: {}, // <object>
  toastClassName: 'toast', // <string|object>
  // bodyClassName: "", // <string|object>
  // progressClassName: "", // <string|object>
  progressStyle: { background: colors.colors.orange }, // <object>
  draggable: true, // <boolean>
  draggablePercent: 80, // <number>
  enableMultiContainer: false, // <boolean>
  // containerId: "", // <string|number>
  role: 'alert', // <string>
}
