import Head from 'next/head'
import ValidationForm from './components/ValidationForm/page'
import SocialSection from './components/socialSection/page'
export default function Home() {
  return (
    <>
      <Head>
        <title>Validación de Formulario con Cards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white p-10">
        <div className="container mx-auto max-w-6xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Formularios de Validación #1</h1>
          <p className="text-center mb-8">
            Este proyecto presenta técnicas de validación de formularios para
            garantizar entradas precisas y mejorar la experiencia del usuario.
            Implementaremos un formulario intuitivo que ofrece retroalimentación
            clara sobre la validez de los datos ingresados.
          </p>
          <ValidationForm />
        </div>
        <SocialSection />
      </main>
    </>
  )
}