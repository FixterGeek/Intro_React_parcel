import {createRoot} from 'react-dom/client'
import Button from './components/Button'

const App = ()=> {
    return (
        <div style={{display:"flex", flexDirection:'column', gap:8}}>
            <h2>Mi componente Button:</h2>
            <Button isDisabled={false}
            isLoading
            >
                Presioname 👀
            </Button>
            <Button isDisabled={true}
            >
                Puchame 🚀
            </Button>
            <Button
            
            >
                Pachurrame 🤖
            </Button>
        </div>
    )
}

const root = createRoot(
    document.querySelector('#root')
)
root.render(<App/>)