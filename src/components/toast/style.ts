import { createGlobalStyle } from 'styled-components'
import { layout, colors } from 'src/styles'

export const ToastStyle = createGlobalStyle`
.Toastify__toast-container {
  height: auto;
}

.Toastify__toast {
  border-radius: ${layout.borderRadius}px;
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${colors.shadows.md};
  color: ${colors.colors.black};
}

@media only screen and (max-width: 480px){
  .Toastify__toast {
    border-radius: 0;
  }
}

.Toastify__toast--success,
.Toastify__toast--warning,
.Toastify__toast--error,
.Toastify__toast--info {
  color: ${colors.colors.white};
}

.Toastify__toast--success {
  background: ${colors.colors.successGreen};
}

.Toastify__toast--warning {
  background: ${colors.colors.warningOrange};
}

.Toastify__toast--error {
  background: ${colors.colors.errorRed};
}


.Toastify__toast--default {
  color: ${colors.colors.black};
}

.Toastify__progress-bar--success,
.Toastify__progress-bar--warning,
.Toastify__progress-bar--error,
.Toastify__progress-bar--info {
  background: ${colors.colors.white} !important;
}

.Toastify__progress-bar--default {
  background: ${colors.colors.orange} !important;
}

`
