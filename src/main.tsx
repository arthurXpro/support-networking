
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Tajawal font to the body for proper Arabic support
document.body.classList.add('font-tajawal');

createRoot(document.getElementById("root")!).render(<App />);
