import { MyButton } from "@/ui/MyButton/MyButton.tsx";
import { MyBadge } from "@/ui/MyBadge/MyBadge.tsx";
import './App.css'

function App() {
  return (
      <>
        <MyButton variant="primary" onClick={() => console.log('clicked')}>
          Valider
        </MyButton>

        <MyBadge status={'rejected'}></MyBadge>
      </>
)
}

export default App
