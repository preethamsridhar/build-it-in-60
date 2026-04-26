
import { NotificationProvider } from "./components/notification-bar";
import { useNotification } from "./hooks";
import "./styles.css";

export default function App() {

  const {state, showNotification, removeNotification} = useNotification();

  const onSuccessClick = () => {
    showNotification({
      type: 'success',
      message: 'Show Success Notification'
    })
  }

  const onInfoClick = () => {
    showNotification({
      type: 'info',
      message: 'Show Info Notification'
    })
  }

  const onWarningClick = () => {
    showNotification({
      type: 'warning',
      message: 'Show Warning Notification'
    })
  }

  const onErrorClick = () => {
    showNotification({
      type: 'error',
      message: 'Show Error Notification'
    })
  }
  return (
    <div className="App">
      <div className="button__container">
        <button style={{background: 'lightskyblue'}} onClick={onInfoClick}>Info</button>
        <button style={{background: 'green'}} onClick={onSuccessClick}>Success</button>
        <button style={{background: 'red'}} onClick={onErrorClick}>Error</button>
        <button style={{background: 'orange'}} onClick={onWarningClick}>Warning</button>
      </div>
      <NotificationProvider state={state} removeNotification={removeNotification}/>
    </div>
  );
}
