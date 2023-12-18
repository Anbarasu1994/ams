import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TreeViewPrograms from '../Tree View/TreeViewPrograms';
import './OverviewCourses.scss';
import UGProgramsArts from '../ArtsAndHumanity/UG Programs/UGPrograms'; // Import your components
import PGProgramsArts from '../ArtsAndHumanity/PG Programs/PGPrograms';
import UGProgramsSci from '../ScienceCourses/UG Programs/UGPrograms';
import PGProgramsSci from '../ScienceCourses/PG Programs/PGPrograms';

function OverviewCourses() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const location = useLocation();
  const selectedComponentIdentifier = location.state?.selectedComponent;

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };

  
  let componentToRender = null;
  switch (selectedComponentIdentifier) {
    case 'UGProgramsArts':
      componentToRender = <UGProgramsArts />;
      break;
    case 'PGProgramsArts':
      componentToRender = <PGProgramsArts />;
      break;
    case 'UGProgramsSci':
      componentToRender = <UGProgramsSci />;
      break;
    case 'PGProgramsSci':
      componentToRender = <PGProgramsSci />;
      break;
    default:
      componentToRender = null;
  }
  return (
    <div className='course-overview-wrap'>
    <h1>Course Overview</h1>
    <div className='content-wrapper'>
      <div className='tree-view'>
        <TreeViewPrograms onComponentSelect={renderComponent} />
      </div>
      <div className='component-placeholder'>
        {selectedComponent || componentToRender}
      </div>
    </div>
  </div>
);
}

export default OverviewCourses;
