import React, { useEffect, useState } from 'react'
import JobCard from './JobCard';

const app_id='b07687cf';
const app_key='f535af67c8a52f49beecde78637796f1'
const Job=()=>{
  const [jobs,setJobs]=useState([])
const getJobs = async () => {
  const response = await fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${app_id}&app_key=${app_key}`);
  const json = await response.json();
  console.log(json)
 const result=json.results
 
 setJobs(result)
console.log(result)
};

  useEffect(() => {
      getJobs();
      }, []);

  return (
    <div>
{
  jobs.length > 0 ? (
    jobs.map((job)=> <JobCard key={job.id} job={job}/>)
  
  ) : (<h1>No Jobs</h1>)
}
    </div>
  )
}

export default Job