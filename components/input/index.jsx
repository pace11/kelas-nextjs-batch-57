import { useState } from "react"
// import styles from './Input.module.css'

export default function Input() {
    const [active, setActive] = useState(false)
    return (
        <>
        <h1>Isikan Nama</h1>
        <input className={`${active ? 'input_container_red' : 'input_container_blue'}`} type="text" />
        <button onClick={() => setActive(!active)}>click me</button>
        <style jsx>{`
        .input_container_red {
            background-color: red;
        }
        
        .input_container_blue {
            background-color: blue;
        }
      `}</style>
        </>
    )
}