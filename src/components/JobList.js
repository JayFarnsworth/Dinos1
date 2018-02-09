import React from 'react';

export default function JobList({ jobs }){
    return (
    <div>
      <h2>Job Listings</h2>
      <ul id="job-listings">
        {jobs.map(job=> <li key={job.id}><h4>{job.title}</h4></li>)}
      </ul>
    </div>)
}
