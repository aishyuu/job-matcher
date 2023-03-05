import { useState } from "react";

export default function Matcher() {
    const [data, setData] = useState(null);
    const [resume, setResume] = useState('');

    async function btnHandle() {
        const querySafe = resume.replaceAll("[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+", "").toLowerCase();
        const queryDouble = querySafe.replaceAll(" ", "_")
        const queryTriple = queryDouble.replaceAll("/", "_and_")
        const response = await fetch(`/api/jobs/${queryTriple}`);
        const final = await response.json()
        setData(final.answer)
    }

    return(
        <div className="container mx-auto">
            <div>
                <p className="font-bold underline text-2xl mb-2">Paste Resume Here</p>
                <textarea name="" id="" cols="auto" rows="10" onChange={(e) => setResume(e.target.value)} className="w-full mb-2" />
                <button onClick={btnHandle} className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-900">
                    Get Job Matches
                </button>
                <p>{data}</p>
            </div>
        </div>
    )
}