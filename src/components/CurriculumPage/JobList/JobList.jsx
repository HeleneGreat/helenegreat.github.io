import JobCard from '../JobCard/JobCard'
import jobs from '../../../datas/jobs'

function JobList() {
    return (
        <div className="page-body">
            <div className="container">
                <h2>Mon parcours</h2>
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default JobList
