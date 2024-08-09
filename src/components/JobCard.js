import React from 'react';

const JobCard = ({ job }) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  };

  // Format the posted date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="job-card bg-white shadow-lg p-6 rounded-lg mb-6 ">
      <div className="flex items-center mb-4">
       
      
        <div>
          <h1 className="text-xl font-bold">{job.title}</h1>
          <h2 className="text-lg font-medium text-gray-700">{job.company.display_name}</h2>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{job.location.display_name}</p>
      <p className="text-sm text-gray-700 mb-4">
        {truncateDescription(job.description, 150)}
      </p>
      <div className="flex justify-between items-center">
        <a href={job.redirect_url} className="text-blue-500 hover:underline">View Details</a>
        <span className="text-xs text-gray-500">
          Posted: {formatDate(job.created)}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
