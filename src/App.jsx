import Card from "./composants/Card/Card";
import Graine from "./composants/Graine/Graine";

function App() {
  return (
    <div>
      {/* partie card */}
      <h2 className="text-center p-5 text-xl md:text-4xl">Les valeurs</h2>

      <div className="flex flex-col sm:flex-row items-center justify-evenly gap-5 p-5">
        <Card titre="Qualité" propriete="Nous nous engageons à fournir des produits de haute qualité." />
        <Card titre="Local" propriete="Nous soutenons les producteurs locaux et l'économie locale." />
        <Card titre="Durabilité" propriete="Nous adoptons des pratiques respectueuses de l'environnement." />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-evenly gap-5 p-5">
        <Card titre="Innovation" propriete="Nous cherchons constamment à innover pour le mieux." />
        <Card titre="Confiance" propriete="Nous construisons des relations basées sur la confiance." />
        <Card titre="Engagement" propriete="Nous sommes engagés à répondre aux besoins de nos clients." />
      </div>
      {/* partie Prenez-en de la graine */}
      <h2 className="text-center p-5 text-xl md:text-4xl">Prenez-en de la graine</h2>
      <Graine/>
    </div>
  );
}

export default App;
