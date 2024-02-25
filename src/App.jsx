
import './App.css'
// import Header from './components/Header'
import Navbarr from './components/Navbarr'
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import Slide from './components/Slide';
import Serve from './components/Serve';
import Videos from './components/Videos';
import Footer from './components/Footer';


function App() {
  const donutList = [
    { images: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg", title: "Chocolate Donuts" },
    { images: "https://preppykitchen.com/wp-content/uploads/2022/02/Old-Fashioned-Donuts-Recipe.jpg", title: "Old Fashioned Donuts" },
    { images: "https://www.goodforyouglutenfree.com/wp-content/uploads/2019/12/gluten-free-jelly-donuts-header.png", title: "Jelly Donuts" },
    { images: "https://thebakermama.com/wp-content/uploads/2020/04/IMG_3943.jpg", title: "Blueberry Cake Donuts" },
    { images: "https://i0.wp.com/www.russianfilipinokitchen.com/wp-content/uploads/2015/07/Easy-Homemade-Glazed-Donuts-01.jpg", title: " Glazed Doughnut" },
    { images: "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Glazed-Donuts.png", title: "Flavoured Donuts" },

  ]

  return (
    <>
      <div className='App vh-100 '>
        <Navbarr />
        <ImageOne />
        <Serve listIs={donutList} />
        <ImageTwo />
        <Slide />
        <Videos />
        <Footer />
      </div>


    </>
  )
}

export default App
