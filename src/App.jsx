import Articles from "./composants/blog/Articles"
import Confiance from "./composants/sectionProducteurs/Confiance"
import Producteurs from "./composants/sectionProducteurs/Producteurs"
import SectionNous from "./composants/sectionProducteurs/SectionNous"

function App() {
  return (
   <div>
    
    <div>
      <Producteurs />
      <Confiance />
      <SectionNous />
    </div>
    {/* Nos articles */}
    <div>
      <Articles />
    </div>
   </div>
  )
}

export default App
