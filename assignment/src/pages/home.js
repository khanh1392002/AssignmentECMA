import Banner from "../components/banner";
import Newlist from "../components/newlist";
const HomePage = {
    render() {
        return `<div>${Banner.render()} </div>

                <div>${Newlist.render()} </div>`;
        
    }
};
export default HomePage;