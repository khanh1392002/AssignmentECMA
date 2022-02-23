import { signup } from "../api/user";
import footer from "../components/footer";
import header from "../components/header";
import signupList from "../components/signupList";

const Signup = {
    print() {
        return /* html */ `
            <header>
                ${header.print()}
            </header>
            <div class="signup">
                ${signupList.print()}
            </div>
            <footer>
                ${footer.print()}
            </footer>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
                RepeatPassword: document.querySelector("#RepeatPassword").value,
            });
        });
    },
};

export default Signup;