export default function Header() {
    return(
        <div className="bg-blue-500 flex items-center p-6 mb-3">
            <h1 className="font-bold text-2xl">Job Matcher</h1>
            <div className="ml-auto">
                <a href="https://github.com/aishyuu/job-matcher" target="_blank"
                    className="text-xl hover:underline"
                >
                    Source
                </a>
            </div>
        </div>
    )
}