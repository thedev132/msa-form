'use client';
import Image from 'next/image'
import Datepicker from "tailwind-datepicker-react"
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
	const [show, setShow] = useState(false)
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [date, setDate] = useState(`${localISOTime.split('T')[0]}`)
  const [grade, setGrade] = useState("")
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("")
  const [questions, setQuestions] = useState("")

  const form = useRef<HTMLFormElement>(null);

  const sendFormResponse = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (form.current) {

        setFirstName("")
        setLastName("")
        setEmail("")
        setTopic("")
        setQuestions("")
    };
  }
  const handleChange = (selectedDate: Date) => {
    setDate(selectedDate.toISOString().split('T')[0])
	}

  const handleClose = (state: boolean) => {
		setShow(state)
	}
 


  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4 mt-12 md:p-24">
          {/* create a form with tailwind css taking in a name, email,question, and comments value with a submit button */}
          <div className="w-full max-w-sm">
            <form ref={form} onSubmit={sendFormResponse} className="bg-gray-800 shadow-lg rounded px-6 pt-6 pb-8 mb-4 bg-opacity-75" data-form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-1/2 px-3 ">
                  <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="first-name">
                    First Name
                  </label>
                  <input value={firstname} onChange={(e) => setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200  text-gray-800 border rounded-lg py-2 px-4 mb-3 leading-tight focus:outline-none" id="first-name" type="text" placeholder="Jane"/>
                </div>
                <div className="w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="last-name">
                    Last Name
                  </label>
                  <input value={lastname} onChange={(e) => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-800 border rounded-lg py-2 px-4 leading-tight focus:outline-none" id="last-name" type="text" placeholder="Doe"/>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Email
                </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Date
                </label>
                <Datepicker onChange={handleChange} show={show} setShow={handleClose}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Grade Level
                </label>
                <select value={grade} onChange={(e) => setGrade(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected value="">Choose your grade level</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  What is a topic would you like us to cover?
                </label>
                <textarea value={topic} onChange={(e) => setTopic(e.target.value)} className="shadow appearance-none border h-full rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="topic"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Question / Feedback?
                </label>
                <textarea value={questions} onChange={(e) => setQuestions(e.target.value)} className="shadow appearance-none border h-full rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="topic"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <a href={`https://docs.google.com/forms/d/e/1FAIpQLSeCfdwdBm_IzEJ_hokjJ2DXK3ogPi6KNfgyK97K8juTSDL5dw/formResponse?usp=pp_url&entry.262991998=${firstname}&entry.58491877=${lastname}&entry.1834523469=${date}&entry.779669393=${grade}&entry.1181796196=${email}&entry.63049956=${topic}&entry.63049956=${questions}`}>
                  <p onSubmit={sendFormResponse} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline" data-form-btn>
                    Submit
                  </p>
                </a>
              </div>
            </form>
          </div>
      </main>
  )
}