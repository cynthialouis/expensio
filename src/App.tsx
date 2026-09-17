import { MyButton } from "@/ui/MyButton/MyButton.tsx";
import { MyBadge } from "@/ui/MyBadge/MyBadge.tsx";
import { MySpinner } from "@/ui/MySpinner/MySpinner.tsx";
import './App.css'

function App() {
  return (
      <>
        <MyButton variant="primary" onClick={() => console.log('clicked')}>
          Valider
        </MyButton>

        <MyBadge status={'rejected'}></MyBadge>

        <MySpinner />
      </>
)
}

export default App
