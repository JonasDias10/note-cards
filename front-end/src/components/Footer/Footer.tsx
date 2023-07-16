import { Github, Linkedin} from "lucide-react"
import "./footer.css"

export function Footer() {
    return (
        <footer id="home-footer">
            <div id="footer-links">
                <a href="https://github.com/JonasDias10" target="_blank">
                    <Github className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/jonasdias18/" target="_blank">
                    <Linkedin className="icon"/>
                </a>
            </div>
            <p>
                Desenvolvido por Jonas Dias
            </p>
        </footer>
    )
}