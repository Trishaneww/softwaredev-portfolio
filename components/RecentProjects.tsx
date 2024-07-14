import { projects } from 
import React from 'react'

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
            A small selection of {''}
            <span className="text-purple">Recent Projects</span>
        </h1>

        <div className="flex flex-wrap items-center justofy-center p-4 gap-16 mt-10">
            {projects.map((project) => (
                <div>
                    {project.title}
                </div>
            ))}
        </div>

    </div>
  )
}

export default RecentProjects