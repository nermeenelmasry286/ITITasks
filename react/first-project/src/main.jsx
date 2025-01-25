import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from './css/style.module.css'
import { MainLayout } from './layout/mainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(

    <MainLayout />

)
