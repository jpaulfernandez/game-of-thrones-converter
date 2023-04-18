import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [textInput, setTextInput] = useState("");
  const [isDisable, setDisable] = useState(false);
  const [result, setResult] = useState("The result shall be made known here.");

  async function handleSubmit(e) {

    e.preventDefault();
    setDisable(true);
    if(textInput == '') {
      setTextInput("I don't know what to say");
    }
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({text: textInput})
      });

      const data = await res.json();

      setResult(data.result);
      setDisable(false);
    } catch(error) {
      console.log(error);
    }
  }

  function handleCopy() {
    const toCopy = document.getElementById("convertedText");
    const copyButton = document.getElementById("copy-button");

    copyButton.innerHTML = "Copied!";
    navigator.clipboard.writeText(toCopy.innerHTML);
  }

  return (
    <>
    <div className="mx-10 min-h-screen">
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Maester&apos;s Manual</h1>
        <p className="text-xl text-center mb-8">
        Transform your words into the language of the Seven Kingdoms with just one click! Input any sentence, and watch as it's styled to sound like it was spoken in Game of Thrones.
        </p>
        <form className='place-content-center' onSubmit={handleSubmit}>
          <input
            className="block w-full px-4 py-2 mb-4 rounded-lg bg-white border-none shadow"
            type="text"
            placeholder="Example: Call me your king"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button
            disabled={isDisable}
            className="block w-full px-4 py-2 rounded-lg bg-indigo-700 text-white font-bold hover:bg-indigo-800 disabled:bg-gray-500"
            type="submit"
          >
            Convert
          </button>
        </form>
        <div className='mt-10 mb-2 rounded-xl px-10 py-10 bg-orange-500'>
          <p id="convertedText" className='text-white text-lg'>{result}</p>
        </div>
        <button id="copy-button"
            className="block w-50 px-4 py-2 rounded-lg bg-indigo-700 text-white font-bold hover:bg-indigo-800"
            onClick={handleCopy}
          >Copy</button>
      </div>
    </div>
  </>
  )
}
