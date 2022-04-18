import MainPage from "./components/MainPage.js"

export default function App({root}){
  this.route = () => {
    if (location.pathname === "/"){
      new MainPage({target : root}).render();
    }
  }
  this.route();
}